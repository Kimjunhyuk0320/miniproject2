package com.joeun.midproject.api;

import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.config.JwtProp;
import com.joeun.midproject.config.SecurityConstants;
import com.joeun.midproject.dto.Ticket;
import com.joeun.midproject.dto.Users;
import com.joeun.midproject.service.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserApiController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProp jwtProp;

    /**
     * 로그인 화면
     * 
     * @return
     */

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody Users users, HttpServletResponse response) {
        log.info(users.toString());
        try {
            Users dbUsers = userService.read(users.getUsername());
            log.info("dbUsers : " + dbUsers.toString());
            log.info(passwordEncoder.matches(users.getPassword(), dbUsers.getPassword()) + "");

            if (dbUsers != null && passwordEncoder.matches(users.getPassword(), dbUsers.getPassword())) {
                byte[] signingKey = jwtProp.getSecretKey().getBytes();
                String jwt = Jwts.builder()
                        .signWith(Keys.hmacShaKeyFor(signingKey), Jwts.SIG.HS512) // 시그니처 사용할 비밀키, 알고리즘 설정
                        .header() // 헤더 설정
                        .add("typ", SecurityConstants.TOKEN_TYPE) // typ : JWT
                        .and()
                        .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 5)) // 토큰 만료 시간 설정 (5일)
                        .claim("uid", dbUsers.getUsername()) // Payload : uid : username
                        .claim("rol", dbUsers.getAuth()) // Payload : rol [ROLE_USER,ROLE_ADMIN]
                        .claim("users", dbUsers) // Payload : users {해당 회원 객체}
                        .compact(); // 토큰 세팅 종료 후 생성

                if (users.isRememberId()) {
                    log.info("아이디기억");
                    Cookie cookie = new Cookie("remember-id", users.getUsername());
                    cookie.setMaxAge(60 * 60 * 24 * 7);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                } else {
                    Cookie cookie = new Cookie("remember-id", "");
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                }
                if (users.isRememberMe()) {
                    log.info("자동로그인");
                    Cookie cookie = new Cookie("refreshToken", jwt);
                    cookie.setMaxAge(60 * 60 * 24 * 7);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                }
                log.info("JWT : " + jwt);
                return new ResponseEntity<String>(jwt, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/jwtInfo")
    public ResponseEntity<?> jwtInfo(@RequestHeader(name = "Authorization") String header) {

        log.info("====header====");
        log.info("Authorization : " + header);

        // Authorization : Bearer ${jwt}
        String jwt = header.replace(SecurityConstants.TOKEN_PREFIX, "");
        byte[] signingKey = jwtProp.getSecretKey().getBytes();
        Jws<Claims> parsedToken = Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(signingKey))
                .build()
                .parseSignedClaims(jwt);

        // uid
        String username = parsedToken.getPayload().get("uid").toString();
        log.info("username : " + username);
        Users users = userService.read(username);
        // rol
        Claims claims = parsedToken.getPayload();
        Object roles = claims.get("rol");
        log.info("roles : " + roles);

        return new ResponseEntity<Users>(users, HttpStatus.OK);

    }

    @GetMapping("/{username}")
    public ResponseEntity<Users> userInfo(@PathVariable("username") String username) {

        try {
            Users users = userService.read(username);
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PreAuthorize("isAnonymous()")
    @PostMapping()
    public ResponseEntity<String> joinPro(Users users, HttpServletRequest request) {
        log.info(users.toString());
        try {
            int result = userService.insert(users, request);

            if (result > 0) {
                return new ResponseEntity<>("회원가입 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("회원가입 실패", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            // 예외 처리 로직
            return new ResponseEntity<>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping()
    public ResponseEntity<String> updatePro(Users users, HttpServletRequest request, HttpServletResponse response) {
        log.info(users.toString());
        try {
            int result = userService.update(users, request, response);

            if (result > 0) {
                return new ResponseEntity<>("수정 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("수정 실패", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            // 예외 처리 로직
            return new ResponseEntity<>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // result가 0보다 크다면 수정 성공!
        // 나머지는 수정 실패 ㅠ
    }

    // 아이디 중복 검사
    @GetMapping("/getLoginIdDup")
    public ResponseEntity<?> getLoginIdDup(String username) {
        try {
            Users user = userService.read(username);
            if (user != null) {
                return new ResponseEntity<>("N", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Y", HttpStatus.OK);
            }
        } catch (Exception e) {
            // 예외 처리 로직
            return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
        }
    }

    // 닉네임 중복 검사
    // @PreAuthorize("hasRole('ROLE_BAND')")
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/getNicknameDup")
    public ResponseEntity<?> getNicknameDup(@RequestParam String nickname) {
        try {
            Users user = userService.readOnlyNickname(nickname);

            if (user == null) {
                return new ResponseEntity<>("Y", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("N", HttpStatus.OK);
            }
        } catch (Exception e) {
            // 예외 처리 로직
            return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
        }
    }

    // 연락처 중복 검사
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/getPhoneDup")
    public ResponseEntity<?> getPhoneDup(@RequestParam String phone) {
        try {
            Users user = userService.readOnlyPhone(phone);

            if (user == null) {
                return new ResponseEntity<>("Y", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("N", HttpStatus.OK);
            }

        } catch (Exception e) {
            // 예외 로직 처리
            return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
        }
    }

    // 유저 전화번호로 구매한 티켓 리스트 조회하기
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/listByPhone")
    public ResponseEntity<List<Ticket>> listByPhone(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByPhone(users);
        ticketList.add(new Ticket());
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }

    // 유저 아이디로 판매한 티켓 리스트 조회하기

    @PreAuthorize("hasRole('ROLE_BAND')")
    @GetMapping("/listByUserName")
    public ResponseEntity<List<Ticket>> listByUserName(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByUserName(users);
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }
    
    
    @PreAuthorize("isAuthenticated()")
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
            return new ResponseEntity<String>("Y", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("N", HttpStatus.OK);
        }
    }

}