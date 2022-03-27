package com.black.service.impl;

import com.black.mapper.UserInfoMapper;
import com.black.service.UserInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author Black
 */
@Service("UserInfoService")
public class UserInfoServiceImpl implements UserInfoService {
    @Resource
    private UserInfoMapper userInfoMapper;

    @Override
    public void registerUserInfo(String userName, String userEmail) {
        userInfoMapper.registerUserInfo(userName, userEmail);
    }
}
