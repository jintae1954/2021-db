// node_modules로부터 사용할 module을 load
import express from "express";
import logger from "morgan";
import path from "path";

// routes로부터 사용할 js file을 load
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3201; // port 번호 설정

const app = express(); // app객체로 모든 http서버의 일을 처리

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname,'../views'));
app.set('view engine', 'hbs');

app.use(logger("dev"));

// homepage address의 하위 router address 를 설정. 
app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);

// server에 접근하는 user를 인지
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})