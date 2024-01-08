package com.joeun.midproject.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.joeun.midproject.dto.Ticket;
import com.joeun.midproject.dto.Users;


public interface UserService {

    // 회원 등록
    public int insert(Users user,HttpServletRequest request) throws Exception;

    // 회원 조회
    public Users select(String username) throws Exception;

    // 로그인
    public void login(Users user, HttpServletRequest requset) throws Exception;

    // 회원 닉네임 조회
    public Users readOnlyNickname(String nickname);

    // 회원 연락처 조회
    public Users readOnlyPhone(String phone);

    // 회원 수정
    public int update(Users user,HttpServletRequest request,HttpServletResponse response) throws Exception;

    // 회원 삭제
    public int delete(String username) throws Exception;
    
    //유저 전화번호로 구매한 티켓 조회하기
    public List<Ticket> listByPhone(Users users) throws Exception;

    //게시글 작성자아이디로 판매한 티켓 목록 조회하기
    public List<Ticket> listByUserName(Users users) throws Exception;
}