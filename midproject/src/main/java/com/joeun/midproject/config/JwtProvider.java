package com.joeun.midproject.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.joeun.midproject.security.CustomUserDetailsService;

import groovyjarjarantlr.collections.List;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private static final String KEY_ROLES = "roles";
    private static final long EXPIRE_TIME = 1000 * 60 * 30; // 30 mins

    @Autowired
    private UserDetailsService customUserDetailsService;

    @Autowired
    private JwtProp jwtProp;

    // 토큰 유효성 확인
    public boolean validateToken(String token) {
        System.out.println(token);
        if (!StringUtils.hasText(token)) {
            return false;
        }
        Claims claims = getClaims(token);
        return !claims.getExpiration().before(new Date());
    }

    // 토큰 기반으로 Authentication 구현체 생성
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(getUserName(token));
        System.out.println("유더디테일 : " + userDetails);
        return new UsernamePasswordAuthenticationToken(userDetails, "",
                userDetails.getAuthorities());
    }

    // Claims에서 username 추출
    private String getUserName(String token) {
        System.out.println("겟유저네임 토큰: "+token);
        return getClaims(token).get("uid",String.class);
    }

    // 토큰에서 Claims 추출
    private Claims getClaims(String token) {
        Claims claims;
        byte[] signingKey = jwtProp.getSecretKey().getBytes();
        try {
            Jws<Claims> parsedToken = Jwts.parser()
                    .verifyWith(Keys.hmacShaKeyFor(signingKey))
                    .build()
                    .parseSignedClaims(token);
            claims = parsedToken.getPayload();
        } catch (SignatureException e) {
            throw new BadCredentialsException("잘못된 비밀키", e);
        } catch (ExpiredJwtException e) {
            throw new BadCredentialsException("만료된 토큰", e);
        } catch (MalformedJwtException e) {
            throw new BadCredentialsException("유효하지 않은 구성의 토큰", e);
        } catch (UnsupportedJwtException e) {
            throw new BadCredentialsException("지원되지 않는 형식이나 구성의 토큰", e);
        } catch (IllegalArgumentException e) {
            throw new BadCredentialsException("잘못된 입력값", e);
        }
        System.out.println("getClaims : "+ claims);
        return claims;
    }
}
