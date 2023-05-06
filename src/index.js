import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  let content = renderToString(<Home />);
  // content = content.replaceAll("-dev-only-do-not-override", "");
  const html = `
    <html>
      <head></head>
      <link href="main.css" rel="stylesheet" type="text/css">
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3100, () => {
  console.log("Listening on port 3100");
});
