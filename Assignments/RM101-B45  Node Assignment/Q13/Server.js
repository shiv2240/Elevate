const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
    res.send("Home Route")
}
)
//This bracke was missing
app.post("/data", (req, res) => {
    const data = req.body;
    res.send(`Received data: ${data}`);
})

app.listen(port, () => {
    console.log("Server running on port ${port}");
})

