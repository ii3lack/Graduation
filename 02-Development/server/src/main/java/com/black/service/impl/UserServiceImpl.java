package com.black.service.impl;

import com.black.entity.User;
import com.black.mapper.UserMapper;
import com.black.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Black
 */
@Service("UserService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public List<User> testFindUser() {
        return userMapper.testFindUser();
    }

    @Override
    public Boolean registerUser(User user) {
        return userMapper.registerUser(user);
    }
}
