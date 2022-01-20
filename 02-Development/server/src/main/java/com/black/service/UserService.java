package com.black.service;

import com.black.entity.User;

import java.util.List;

/**
 * @author Black
 */
public interface UserService {
    List<User> testFindUser();

    /**
     * 注册用户接口
     * @param user 注册的用户数据
     * @return boolean 注册结果
     */
    Boolean registerUser(User user);
}
