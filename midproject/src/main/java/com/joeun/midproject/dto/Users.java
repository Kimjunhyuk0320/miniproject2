package com.joeun.midproject.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Users {
    
    private String username;
    private String password;
    private String userPwCheck;     // 비밀번호 확인
    private String name;
    private String nickname;
    private String email;
    private String phone;
    private Date updDate;
    private int auth;               // 0: ROLE_USER, 1: ROLE_CLUB, 2: ROLE_BAND
    private int enabled;            // 휴면여부
    private int profileNo;
    // 권한 목록
    List<UserAuth> authList;



    //프로필사진
    private MultipartFile file;

    
    public Users() {
        
    }
    
    public Users(Users user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.name = user.getName();
        this.nickname = user.getNickname();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.authList = user.getAuthList();
    }
}