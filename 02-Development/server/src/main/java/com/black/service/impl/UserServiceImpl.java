package com.black.service.impl;

import com.black.entity.User;
import com.black.mapper.UserMapper;
import com.black.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author Black
 */
@Service("UserService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public User judgeUser(String userName) {
        return userMapper.judgeUser(userName);
    }

    @Override
    public int registerUser(String userEmail,String userName, String userPassword) {
        return userMapper.registerUser(userEmail, userName, userPassword);
    }

    @Override
    public User loginUser(String userEmail, String userPassword) {
        return userMapper.loginUser(userEmail, userPassword);
    }
}
