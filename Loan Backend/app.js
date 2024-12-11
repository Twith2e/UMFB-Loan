const express = require("express");
const app = express();
const cors = require("cors");
const emailRouter = require("./routers/email.router");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/email", emailRouter);

const port = 5002;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
