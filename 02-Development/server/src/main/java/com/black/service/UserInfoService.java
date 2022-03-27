package com.black.service;

/**
 * @author Black
 */
public interface UserInfoService {
    /**
     * 注册用户接口
     * @param userEmail 用户邮箱
     * @param userName 用户名
     */
    void registerUserInfo(String userName,String userEmail);
}
