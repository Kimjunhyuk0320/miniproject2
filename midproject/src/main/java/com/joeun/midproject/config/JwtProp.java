package com.joeun.midproject.config;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties("com.joeun.jwt")
public class JwtProp {
    private String secretKey;
}