package com.black.service.impl;

import com.black.entity.User;
import com.black.mapper.UserMapper;
import com.black.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Black
 */
@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public Boolean registerUser(User user) {
        return userMapper.registerUser(user);
    }
}
