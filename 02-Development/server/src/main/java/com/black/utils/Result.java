package com.black.utils;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Black
 */
@Data
public class Result {
    private Boolean success;

    private Integer status;

    private String message;

    private Map<String, Object> data = new HashMap<>();

    /**
     * 构造器私有
     */
    private Result(){}

    /**
     * 通用返回成功
     * @return 返回结果
     */
    public static Result ok() {
        Result r = new Result();
        r.setSuccess(ResultCodeEnum.SUCCESS.getSuccess());
        r.setStatus(ResultCodeEnum.SUCCESS.getCode());
        r.setMessage(ResultCodeEnum.SUCCESS.getMessage());
        return r;
    }

    /**
     * 通用返回失败，未知错误
     * @return 返回错误信息
     */
    public static Result error() {
        Result r = new Result();
        r.setSuccess(ResultCodeEnum.ERROR.getSuccess());
        r.setStatus(ResultCodeEnum.ERROR.getCode());
        r.setMessage(ResultCodeEnum.ERROR.getMessage());
        return r;
    }

    /**
     * 设置结果，形参为结果枚举
     * @param result 结果
     * @return 结果
     */
    public static Result setResult(ResultCodeEnum result) {
        Result r = new Result();
        r.setSuccess(result.getSuccess());
        r.setStatus(result.getCode());
        r.setMessage(result.getMessage());
        return r;
    }

    /**
     * 自定义返回数据
     * @param map 传入Map类型数据
     * @return 返回数据
     */
    public Result data(Map<String,Object> map) {
        this.setData(map);
        return this;
    }

    /**
     * 通用设置data
     * @param key 键
     * @param value 值
     * @return 返回数据
     */
    public Result data(String key,Object value) {
        this.data.put(key, value);
        return this;
    }

    /**
     * 自定义状态信息
     * @param message 信息
     * @return 返回信息
     */
    public Result message(String message) {
        this.setMessage(message);
        return this;
    }

    /**
     * 自定义状态码
     * @param code 状态码
     * @return 返回状态码
     */
    public Result code(Integer code) {
        this.setStatus(code);
        return this;
    }

    /**
     * 自定义返回结果
     * @param success 返回成功
     * @return 返回结果
     */
    public Result success(Boolean success) {
        this.setSuccess(success);
        return this;
    }
}
