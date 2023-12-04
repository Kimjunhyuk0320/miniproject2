package com.joeun.midproject.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.Ticket;
import com.joeun.midproject.dto.Users;
import com.joeun.midproject.service.UserService;

@RestController
@RequestMapping("/api")
public class UserApiController {

    @Autowired
    private UserService userService;

    /**
     * 로그인 화면
     * 
     * @return
     */
    @GetMapping("/login")
    public ResponseEntity<Map<String, Object>> login(
            @CookieValue(value = "remember-id", required = false) Cookie cookie) {
        String userId = "";
        boolean rememberId = false;

        if (cookie != null) {
            userId = cookie.getValue();
            rememberId = true;
        }

        Map<String, Object> map = new HashMap<>();
        map.put("username", userId);
        map.put("rememberId", rememberId);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("/join")
    public ResponseEntity<String> joinPro(@RequestBody Users users, HttpServletRequest request) {
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

    @PostMapping("/update")
    public ResponseEntity<String> updatePro(@RequestBody Users users, HttpServletRequest request) {
        try {
            // int result = userService.update(users, request);

            // if (result > 0) {
            //     return new ResponseEntity<>("수정 성공", HttpStatus.OK);
            // } else {
            //     return new ResponseEntity<>("수정 실패", HttpStatus.BAD_REQUEST);
            // }
        } catch (Exception e) {
            // 예외 처리 로직
            return new ResponseEntity<>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // result가 0보다 크다면 수정 성공!
        // 나머지는 수정 실패 ㅠ
        return null;
    }

    // 로그인 중복 검사
    @GetMapping("/getLoginIdDup")
    public ResponseEntity<?> getLoginIdDup(@RequestParam String username) {
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

    // 연락처 중복 검사
    @GetMapping("/getPhoneDup")
    public ResponseEntity<?> getPhoneDup(@RequestParam String phone) {
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
    @RequestMapping("/listByPhone")
    public ResponseEntity<List<Ticket>> listByPhone(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByPhone(users);
        ticketList.add(new Ticket());
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }

    // 유저 아이디로 판매한 티켓 리스트 조회하기
    @RequestMapping("/listByUserName")
    public ResponseEntity<List<Ticket>> listByUserName(Users users) throws Exception {
        List<Ticket> ticketList = userService.listByUserName(users);
        return new ResponseEntity<List<Ticket>>(ticketList, HttpStatus.OK);
    }
    
}