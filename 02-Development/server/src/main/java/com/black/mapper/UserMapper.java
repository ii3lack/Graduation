package com.black.mapper;

import com.black.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Black
 */
@Mapper
public interface UserMapper {
    /**
     * 查询用户是否存在
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
    void registerUser(String userEmail,String userName, String userPassword);

    /**
     * 登录用户
     * @param userEmail 用户邮箱
     * @param userPassword 用户密码
     * @return 登陆结果
     */
    User loginUser(String userEmail, String userPassword);
}
