package com.black.mapper;

import com.black.entity.News;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author Black
 */
@Mapper
public interface NewsMapper {
    /**
     * 查询新闻
     * @return 新闻结果
     */
    News[] queryNews();
}
