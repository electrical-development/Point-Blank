const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: "public"});
});

// Listening
app.listen(port, () => {
    console.log(`sex`);
    console.log(`its on port http://localhost:${port}`);
});
