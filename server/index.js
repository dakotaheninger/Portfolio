let express = require('express');
let path = require('path');

let app = express();

const PORT = process.env.PORT || 8084;

app.use(express.static(path.resolve(__dirname, "..", "src")));

app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "..", "src", "index.html"));
});

app.listen(PORT, () =>{
    console.log(`Server is Started on port ${PORT}`)
});