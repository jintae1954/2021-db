// node_modules로부터 사용할 module을 load
import mysql from "mysql2";

// database 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
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
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        console.log(rows);

        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        console.log(rows);
        
        return rows
    },
    getInvestment : async () => {
        const [rows] = await promisePool.query(`select * from investment`);
        console.log(rows);

        return rows
    }
}

// delete 문
export const deleteSql = {
    deleteteDepartment : async (data) => { // department table에서 record 삭제하는 함수
        console.log('deleteSql.deleteDepartment: ', data.Dnumber);
        const sql = `delete from department where Dnumber = "${data.Dnumber}"`; // 삭제할 record는 사용자가 선택한 id와 일치하는 record를 삭제
        await promisePool.query(sql);
    },
    deleteInvestment : async (data) => { // investment table에서 record 삭제하는 함수
        console.log('deleteSql.deleteInvestment: ', data.Id);
        const sql = `delete from investment where Id = "${data.Id}"`; // 삭제할 record는 사용자가 선택한 id와 일치하는 record를 삭제
        await promisePool.query(sql);
    }
}