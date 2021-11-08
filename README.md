# 2021-db
- 데이터베이스설계

<br><br>

## 3주차 실습 실행 방법
1. 레포지리 복(Terminal 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week3 폴더로 이동
    > cd week3
3. 콘솔창(Terminal)에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'dbdesign', // 본인이 만든 데이터베이스 이름
        password: 'root1234', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

studentNumber|name|major|grade|admission|email
---|---|---|---|
12161733 | park | com   | 3     | 2016-03   | test@gmail.com 
12171733 | kim  | com   | 3     | 2017-03   | test2@gmail.com

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.