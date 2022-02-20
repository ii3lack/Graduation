package com.black.service;

import com.black.entity.User;

import java.util.List;

/**
 * @author Black
 */
public interface UserService {
    /**
     * 判断用户名是否存在
     * @param userName 查询的用户名
     * @return 查询结果
     */
    User judgeUser(String userName);


    /**
     * 注册用户接口
     * @param userEmail 用户邮箱
     * @param userName 用户名
     * @param userPassword 用户密码
     * @return 注册结果
     */
    int registerUser(String userEmail,String userName, String userPassword);

    /**
     * 登录用户
     * @param userEmail 用户邮箱
     * @param userPassword 用户密码
     * @return 登陆结果
     */
    User loginUser(String userEmail, String userPassword);
}
