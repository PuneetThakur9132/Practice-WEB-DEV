const express = require("express");
const app = express();
const AppError = require("./AppError");
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  // res.send("SORRY YOU NEED A PASSWORD");
  throw new AppError("Password required!");
};

app.get("/", (req, res) => {
  res.send("HOME PAGE!!");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST TIME - ${req.requestTime}`);
  res.send("WOOF WOOF");
});
app.get("/secret", verifyPassword, (req, res) => {
  res.send("MY SECRET IS: I DON'T LIKE COMPETITIVE PROGRAMMING");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!!");
});

// app.use((err, req, res, next) => {
//   console.log("*******************************");
//   console.log("************Error**************");
//   console.log("*******************************");
//   next(err);
// });
app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("APP SERVING ON PORT 3000");
});
