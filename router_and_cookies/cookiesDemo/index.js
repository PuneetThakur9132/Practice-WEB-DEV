const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  const { name } = req.cookies;
  res.send(`Hey there , ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Henreitta");
  res.send("OK Sent A Cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("OK SIGNED YOUR FRUIT COOKIE");
});
app.get("/verifyfruit", (req, res) => {
  console.log(req.cookies);
  res.send(req.signedCookies);
});
app.listen(3000, () => {
  console.log("SERVING");
});
