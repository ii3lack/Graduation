package com.black.controller;

import com.black.entity.News;
import com.black.service.NewsService;
import com.black.utils.Result;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author Black
 */
@RestController
@RequestMapping("/news")
public class NewsController {

    @Resource
    private NewsService newsService;

    @PostMapping("/queryNews")
    public Result incomeRecord() {
        News[] newsList =  newsService.queryNews();
        return  Result.ok().message("查询数据成功").data("list", newsList);
    }
}
