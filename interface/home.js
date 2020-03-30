/*
 * @Description: 
 * @Date: 2019-11-06 13:43:51
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
const Router = require("koa-router")();
const path = require('path');
const fs = require('fs');
const ipConfig = require('./../config/ip.config');
const { dev:{host,port} } = ipConfig;
const filePathProxy = `http://${host}:${port}/img/`
Router.get("/home/getImages", async ctx => {
 

const files = fs.readdirSync(path.resolve(__dirname,'../static/img'));
const data = files.map(item=>{
  return `${filePathProxy}${item}`
})


  ctx.body = {
    code: 200,
    msg: "success",
    data
  };
});


module.exports = Router;