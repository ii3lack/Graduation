package com.black.service;

import com.black.entity.News;

/**
 * @author Black
 */
public interface NewsService {
    /**
     * 查询新闻
     * @return 新闻结果
     */
    News[] queryNews();
}
