const express = require("express");
const mysql = require('mysql2');

const router = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(5000, () => {
    console.log("Running at Port 5000");
});
