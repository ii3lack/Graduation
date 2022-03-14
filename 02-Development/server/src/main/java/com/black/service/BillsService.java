package com.black.service;

/**
 * @author Black
 */
public interface BillsService {
    /**
     * 添加一笔账单数据
     * @param billsName 账单类别
     * @param billsTags 账单标签
     * @param billsDate 账单日期
     * @param billsNum 账单金额
     * @param billsInfo 账单描述
     * @param userEmail 账单用户
     */
    void incomeRecord(String billsName, String billsTags, String billsDate, String billsNum, String billsInfo, String userEmail);
}
