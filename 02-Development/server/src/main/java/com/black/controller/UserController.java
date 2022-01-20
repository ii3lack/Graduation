package com.black.controller;

import com.black.entity.User;
import com.black.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Black
 */
@RestController
@RequestMapping("/user")
@Api(value="用户controller",tags={"用户操作接口"})
public class UserController {
    @Resource
    private UserService userService;

    @ApiOperation(value="测试查询用户",tags={"测试查询用户"},notes="测试查询信息")
    @GetMapping("/testFindUser")
    @ResponseBody
    public List<User> testFindUser(){
        return userService.testFindUser();
    }

    @ApiOperation(value="注册用户",tags={"注册用户"},notes="输入用户信息")
    @PostMapping ("/registerUser")
    public Boolean registerUser(@ApiParam(name="User",value="用户信息")User user){
        return userService.registerUser(user);
    }
}
