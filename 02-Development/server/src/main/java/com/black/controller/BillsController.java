package com.black.controller;

import com.black.service.BillsService;
import com.black.utils.Result;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author Black
 */
@RestController
@RequestMapping("/bills")
@Api(value="账单controller",tags={"账单操作接口"})
public class BillsController {
    @Resource
    private BillsService billsService;

    @PostMapping("/incomeRecord")
    public Result incomeRecord(String billsName, String billsTags, String billsDate, String billsNum, String billsInfo, String userEmail) {
        billsService.incomeRecord(billsName,billsTags, billsDate, billsNum, billsInfo, userEmail);
        return  Result.ok().message("插入帐单数据成功");
    }
}
