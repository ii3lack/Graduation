package com.black.utils;

import lombok.Getter;

/**
 * @author Black
 */

@Getter
public enum ResultCodeEnum {
    // 状态码
    SUCCESS(true,200,"成功"),
    ERROR(true,201,"查询结果为空"),
    UNKNOWN_ERROR(false,202,"未知错误"),
    PARAM_ERROR(false,203,"参数错误"),
    NULL_POINT(false,204,"空指针异常"),
    HTTP_CLIENT_ERROR(false,205,"数组下标越界"),
    ;


    private final Boolean success;

    private final Integer code;

    private final String message;

    ResultCodeEnum(boolean success, Integer code, String message) {
        this.success = success;
        this.code = code;
        this.message = message;
    }
}