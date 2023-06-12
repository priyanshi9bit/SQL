import mysql from "mysql"
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "form",
    port:"3306"
})

con.connect((err)=>{
    if(err)
    console.log("Error in connection.js ", err)
    else
    console.log("Connection created!")
})

// module.exports.con = con;
export default con;