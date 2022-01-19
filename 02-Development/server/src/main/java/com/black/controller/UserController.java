package com.black.controller;

import com.black.entity.User;
import com.black.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Black
 */
@RestController
@RequestMapping("/user")
@Api(value="用户controller",tags={"用户操作接口"})
public class UserController {
    @Autowired
    private UserService userService;

    @ApiOperation(value="注册用户",tags={"注册用户"},notes="输入用户信息")
    @PostMapping ("/registerUser")
    public Boolean registerUser(@ApiParam(name="User",value="用户信息")User user){
        return userService.registerUser(user);
    }
}
