package com.black.controller;

import com.black.entity.User;
import com.black.service.UserService;
import com.black.utils.Result;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author Black
 */
@RestController
@RequestMapping("/user")
@Api(value="用户controller",tags={"用户操作接口"})
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/registerUser")
    public Result registerUser(String userEmail, String userName, String userPassword) {
        User retUser = userService.judgeUser(userName);
        if (retUser == null) {
            userService.registerUser(userEmail, userName, userPassword);
            return Result.ok().message("注册成功");
        } else {
            return Result.error().message("已有此用户");
        }
    }

    @PostMapping("/loginUser")
    public Result loginUser(String userEmail, String userPassword) {
        User userResult = userService.loginUser(userEmail, userPassword);
        if (userResult == null) {
            return Result.error().message("登陆失败，用户名或者密码错误");
        } else {
            if (userResult.getUserEmail() == null) {
                return Result.error().message("登陆失败，用户名或者密码错误");
            } else {
                return Result.ok().message("登陆成功");
            }
        }
    }


    @PostMapping("/updateAvatar")
    public Result updateAvatar(String userEmail, String avatarUrl) {
        userService.updateAvatar(userEmail, avatarUrl);
        return Result.ok().message("修改头像成功 ");
    }


    @PostMapping("/updatePassword")
    public Result updatePassword(String userEmail, String userPassword) {
        userService.updatePassword(userEmail, userPassword);
        return Result.ok().message("修改头像成功 ");
    }
}
