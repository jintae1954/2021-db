// node_modules로부터 사용할 module을 load
import express from "express";

// database폴더로부터 사용할 sql.js file을 load
import { selectSql } from "../database/sql";

const router = express.Router(); // router 객체생성

router.get('/', async function(req,res){
    const employee = await selectSql.getEmployee(); // getEmployee()가 동작을 완수할 때까지 대기
    const department = await selectSql.getDepartment(); // getDempartment()가 동작을 완수할 때까지 대기

    res.render('select',{ // browser에 
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });

});

module.exports = router; // 다른 소스에서도 사용할 수 있도록 함. 이 때 변수명은 router로 정의
