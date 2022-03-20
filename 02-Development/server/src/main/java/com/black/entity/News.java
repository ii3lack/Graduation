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
@ConfigurationProperties(prefix = "news")
@PropertySource(value = { "classpath:application.yml" })
public class News {
    private Integer newsId;
    private String newsTitle;
    private String newsAuth;
    private String newsAvatar;
    private String newsTips;
    private String newsImg;
    private String newsContent;
}
