package com.black.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * @author Black
 */
@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "bills")
@PropertySource(value = { "classpath:application.yml" })
public class Bills {
    private Integer billsId;
    private String billsName;
    private String billsTags;
    private String billsDate;
    private String billsNum;
    private String billsInfo;
    private String userEmail;
}
