package com.black.service.impl;

import com.black.entity.News;
import com.black.mapper.NewsMapper;
import com.black.service.NewsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author Black
 */
@Service("NewsService")
public class NewsServiceImpl implements NewsService {
    @Resource
    private NewsMapper newsMapper;

    @Override
    public News[] queryNews() {
        return newsMapper.queryNews();
    }
}
