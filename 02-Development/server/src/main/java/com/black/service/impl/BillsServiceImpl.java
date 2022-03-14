package com.black.service.impl;

import com.black.mapper.BillsMapper;
import com.black.service.BillsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

/**
 * @author Black
 */
@Service("BillsService")
public class BillsServiceImpl implements BillsService {
    @Resource
    private BillsMapper billsMapper;

    @Override
    public void incomeRecord(String billsName, String billsTags, String billsDate, String billsNum, String billsInfo, String userEmail) {
             billsMapper.incomeRecord(billsName, billsTags, billsDate, billsNum,  billsInfo, userEmail);
    }
}
