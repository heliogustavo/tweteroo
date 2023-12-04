import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

//Var globais
const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body
    users.push({username, avatar})
    res.send("OK!")
  });



app.listen(PORT, () => console.log(`listening on port ${PORT}`));