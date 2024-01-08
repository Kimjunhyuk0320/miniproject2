package com.joeun.midproject.api;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.Ticket;
import com.joeun.midproject.dto.Users;
import com.joeun.midproject.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserApiController {

    @Autowired
    private UserService userService;

    /**
     * 로그인 화면
     * 
     * @return
     */
    // @GetMapping("/login")
    // public ResponseEntity<Map<String, Object>> login(
    //         @CookieValue(value = "remember-id", required = false) Cookie cookie) {
    //     String userId = "";
    //     boolean rememberId = false;

    //     if (cookie != null) {
    //         userId = cookie.getValue();
    //         rememberId = true;
    //     }

    //     Map<String, Object> map = new HashMap<>();
    //     map.put("username", userId);
    //     map.put("rememberId", rememberId);

    //     return new ResponseEntity<>(map, HttpStatus.OK);
    // }
    @GetMapping("/{username}")
    public ResponseEntity<Users> userInfo(@PathVariable("username") String username) {

        try {
            Users users = userService.select(username);
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    

    @PostMapping()
    public ResponseEntity<String> joinPro( Users users, HttpServletRequest request) {
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

    @PutMapping()
    public ResponseEntity<String> updatePro( Users users, HttpServletRequest request, HttpServletResponse response) {
        try {
            int result = userService.update(users, request,response);

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
            Users user = userService.select(username);
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
    @GetMapping("/getNicknameDup")
    public ResponseEntity<?> getNicknameDup(@RequestParam String nickname) {
        try {
            Users user = userService.readOnlyNickname(nickname);

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

    // 연락처 중복 검사
    @GetMapping("/getPhoneDup")
    public ResponseEntity<?> getPhoneDup(@RequestParam String phone) {
        log.info(phone);
        try {
            Users user = userService.readOnlyPhone(phone);

            if (user != null) {
                return new ResponseEntity<>("N", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Y", HttpStatus.OK);
            }

        } catch (Exception e) {
            // 예외 로직 처리
            return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
        }
    }

    // 유저 전화번호로 구매한 티켓 리스트 조회하기
    @GetMapping("/listByPhone")
    public ResponseEntity<List<Ticket>> listByPhone(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByPhone(users);
        ticketList.add(new Ticket());
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }

    // 유저 아이디로 판매한 티켓 리스트 조회하기
    @GetMapping("/listByUserName")
    public ResponseEntity<List<Ticket>> listByUserName(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByUserName(users);
        // if(ticketList == null) {
        //     return new ResponseEntity<List<Ticket>>(null, HttpStatus.OK);
        // }
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }
}
