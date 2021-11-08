// node_modules로부터 사용할 module을 load
import express from "express";

// database폴더로부터 사용할 sql.js file을 load
import { insertSql, selectSql } from  "../database/sql"

const router = express.Router(); // router 객체생성

// home.js 를 routing
router.get('/', (req, res) => {
    res.render('home');
});

// home.js 를 routing 시키고 난 뒤에, browser에 표기할 값을 입력
router.post('/', (req, res) => {
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; // table에 담기는 attribute의 갯수

    if(var_lenth > 4){ // table에 담기는 attribute의 갯수가 4개 초과이면 employee로 판단
        const data = { // employee table 에 들어갈 attribute 값 할당
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data); // sql.js 에 선언 되어있는 setEmployee()함수를 빌려써서 const data의 정보값을 삽입
    }
    else{
        const data = { // department table 에 들어갈 attribute 값 할당
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/'); // 새로고침 시, 기준이 되는 주소. 여기서 / 는 home route를 의미
})

module.exports = router; // 다른 소스에서도 사용할 수 있도록 함. 이 때 변수명은 router로 정의