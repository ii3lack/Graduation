package com.black.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Black
 */
@RestController
public class HelloWorldController {
    @RequestMapping("/hello")
    public String say(){
        return "Hello World";
    }
}
