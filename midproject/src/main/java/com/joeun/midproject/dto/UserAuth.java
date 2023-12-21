package com.joeun.midproject.dto;

import lombok.Data;

// 회원 권한
@Data
public class UserAuth {
    
    private int authNo;
    private String username;
    private String auth;

    public UserAuth() {

    }

    public UserAuth(String username, String auth) {
        this.username = username;
        this.auth = auth;
    }

    
}