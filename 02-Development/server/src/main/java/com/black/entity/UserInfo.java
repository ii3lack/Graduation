package com.black.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * @author Black
 */
@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "userinfo")
@PropertySource(value = { "classpath:application.yml" })
public class UserInfo {
    private Integer userId;
    private String userAvatar;
    private String userEmail;
    private String userName;
    private String userSignal;
}
