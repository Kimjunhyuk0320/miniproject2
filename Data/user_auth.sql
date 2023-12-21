-- 기존 테이블 존재하면 삭제
DROP TABLE IF EXISTS user_auth;

-- user_auth : 권한 테이블
CREATE TABLE `user_auth` (
      auth_no int NOT NULL AUTO_INCREMENT       -- 권한번호
    , user_id varchar(100) NOT NULL             -- 아이디
    , auth varchar(100) NOT NULL                -- 권한 (USER, ADMIN, ...)
    , PRIMARY KEY(auth_no)                      
);
