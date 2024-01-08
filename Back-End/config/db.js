import mysql from "mysql2"


 const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecomerce-schema",
    port: 3360, 
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL server");
});

export default db;
