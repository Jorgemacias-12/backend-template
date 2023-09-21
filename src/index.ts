import express from 'express';
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("<h1 style='font-family: system-ui;'>Hello World</h1>")
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})