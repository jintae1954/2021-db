// node_modules로부터 사용할 module을 load
import express from "express";

// database폴더로부터 사용할 sql.js file을 load
import { selectSql } from  "../database/sql"

const router = express.Router(); // router 객체생성

// home.js 를 routing
router.get('/', (req, res) => {
    res.render('login');
});

// home.js 를 routing 시키고 난 뒤에, browser에 표기할 변수들 선언
router.post('/', async(req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;

    //for(let i = 0; i<users.length; i++){
    //    if(vars.id === user.id && vars.password === user[i]){
    //        ;
    //    }
    //}

    // log-in 성공여부를 판단하는 logic
    users.map((user)=>{
        if ( vars.id === user.Id && vars.password === user.Password){
            checkLogin = true;
            if(vars.id === 'admin'){
                whoAmI = 'admin';
            }else{
                whoAmI = 'users';
            }
        }
    })

    console.log('whoAmI: ', whoAmI); // 접근한 사용자 정보 출력
    
    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'users'){
        res.redirect('/select');
    } else {
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }

})

module.exports = router; // 다른 소스에서도 사용할 수 있도록 함. 이 때 변수명은 router로 정의