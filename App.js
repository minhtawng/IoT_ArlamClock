const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/db');
const route = require('./routes');

// Connect to DB
db.connect();

// Route init
route(app);

app.get("/", (req, res) => {
    res.send(`Hello may`);
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});