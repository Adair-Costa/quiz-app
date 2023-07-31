const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/api/v1/first", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Request have success",
  });
});

app.listen(port, () => {
  console.log(`App running in port: ${port}...`);
});
