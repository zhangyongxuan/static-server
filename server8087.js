/*
 * @Description: port 8087 server
 * @Date: 2020-03-30 10:14:31
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
const express = require("express");
const app = new express();
const http = require("http");

const servers = [
  { weight: 10, host: "http://localhost", port: 8088, id: 0 },
  { weight: 9, host: "http://localhost", port: 8089, id: 1 },
];

const port = 8087;
let currentServer = null;
let currentIndex = 0;

app.get("/", (req, res) => {
  if (currentIndex === servers.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentServer = servers[currentIndex];
  http.get(`${currentServer.host}:${currentServer.port}`, res1 => {
    console.log(currentServer.port,"proxy success");
    let data = "";
    res1.on("data", chunk => {
      data += chunk;
    });
    res1.on("end", () => {
      res.send(data);
    });
  });
});
app.listen(port, () => {
  console.log(`success:${port}`);
});
