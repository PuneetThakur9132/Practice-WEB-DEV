const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE'VE GOT A NEW REQUEST");

//   res.send("<h1>ITS MY WEB PAGE</h1>");
// });
// app.get("*", (req, res) => {
//   res.send("THIS IS UNIVERSAL");
// });

app.get("/search", (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  res.send(`<h1>Search results for:${q}</h1>`);
});

app.get("/r/:subreddit", (req, res) => {
  res.send("THIS IS MY SUBREDDIT");
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  console.log(req.params);
  res.send(`BROWSING SUBREDDIT ${subreddit} with POSTID : ${postID}`);
});

app.get("/", (req, res) => {
  res.send("THIS IS MY HOMEPAGE!!!!yayyy");
});
app.get("/cats", (req, res) => {
  res.send("MEOWW!!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOOF!!");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
