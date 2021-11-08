// node_modules로부터 사용할 module을 load
import mysql from "mysql2";

// database 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'respect4!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select 문
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows);
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows
    },
}

// insert 문
export const insertSql = {
    setEmployee : async (data) => { // data라는 이름의 파라미터로 employee table의 attribute에 대응하여 값을 insert
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

            console.log(sql);
            await promisePool.query(sql);
    },
    setDepartment : async (data) => { // data라는 이름의 파라미터로 department table의 attribute에 대응하여 값을 insert
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}","${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
            
            console.log(sql);
            await promisePool.query(sql);
    },
}

// update 문
export const updateSql = {
    updateEmployee : async () => {
        const sql = `update employee set salary = 500 where Minit = "F"`;  // where 조건을 만족하는 record에 대해서 salary 수정
        await promisePool.query(sql);
    },

    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`; // where 조건을 만족하는 record에 대해서 Dname 수정
        await promisePool.query(sql);
    }
}