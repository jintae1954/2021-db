// node_modules로부터 사용할 module을 load
import express from "express";
import logger from "morgan";
import path from "path";

// routes로부터 사용할 js file을 load
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";


const PORT = 3202; // port 번호 설정

const app = express(); // app객체로 모든 http서버의 일을 처리

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname,'../views'));
app.set('view engine', 'hbs');

app.use(logger("dev"));

// homepage address의 하위 router address 를 설정. 
app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);


// server에 접근하는 user를 인지
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})