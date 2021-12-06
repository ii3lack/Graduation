package com.black.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * @author Black
 */
@Api(value = "desc of class")
@RestController
public class HelloWorldController {
    @ApiOperation(value = "desc of method")
    @PostMapping("/hello")
    public String say(){
        return "Hello World";
    }
}
