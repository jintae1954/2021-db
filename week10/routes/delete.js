// node_modules로부터 사용할 module을 load
import express from "express";

// database폴더로부터 사용할 sql.js file을 load
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 department table 의 records 불러오기
router.get('/', async(req, res) => {
    const dept_res = await selectSql.getDepartment();
    const invst_res = await selectSql.getInvestment();
    res.render('delete',{
        title: "삭제 기능",
        dept_res,
        invst_res
    });
});

// deleteDepartment() 실행. 실행 후 /delete 주소로 redirect
router.post('/', async(req, res)=>{
    console.log(`delete router: `, req.body.delBtn);
    console.log(`delete router: `, req.body.delBtn2);

    const data = {
        Dnumber: req.body.delBtn
    };
    
    const data2 = {
        Id : req.body.delBtn2
    };
    
    if(req.body.delBtn === true) { // DEPARTMENT TABLE의 삭제버튼을 눌렀을 때
        await deleteSql.deleteteDepartment(data);
    }
    else{ // INVESTMENT TABLE의ㅣ 삭제버튼을 눌렀을 때
        await deleteSql.deleteInvestment(data2);
    }
    
    res.redirect('/delete');
});

module.exports = router; 
