package com.black.mapper;

import com.black.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author Black
 */
@Mapper
public interface UserMapper {
    /**
     * 注册用户接口
     * @param user 注册的用户信息
     * @return boolean 是否注册成功
     */
    Boolean registerUser(User user);
}
