// node_modules로부터 사용할 module을 load
import express from "express";

// database폴더로부터 사용할 sql.js file을 load
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

// 기존의 employee table 의 records 불러오기 
router.get('/employee', async(req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee',{
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존의 department table 의 records 불러오기
router.get('/department', async(req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment',{
        title: "부서 테이블 갱신",
        dept_res
    });
});

// updateEmployee() 실행. 실행 후 /select 주소로 redirect
router.post('/employee', async(req, res)=>{
    await updateSql.updateEmployee();

    res.redirect('/select');
});

// updateDepartment() 실행. 실행 후 /select 주소로 redirect
router.post('/department', async(req, res)=>{
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select');
});

module.exports = router; 
