/*
 * @Description: 
 * @Date: 2019-11-04 14:50:26
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
const Koa = require('koa');  // 引入koa框架
const cp = require('child_process'); // 用来创建子进程
const path = require('path');
const KoaStatic = require('koa-static');
const color = require('./font-color.config');
const m1 = require('./middleware/m1');
const home = require('./interface/home');
const ipConfig = require('./config/ip.config');
const app = new Koa();
const { dev:{port,host} } = ipConfig;
app.use(KoaStatic(path.join( __dirname, './static')));
app.use( async (ctx,next)=>{
    console.log('m1 start');
    const res = await new Promise((resolve)=>{
        setTimeout(()=>resolve(path.join( __dirname, './static')),100)
    })
    console.log(res);
    await next();
    console.log('m1 end');
} )
app.use( async (ctx,next)=>{
    console.log('m2 start');
    await next();
    console.log('m2 end');
} )
app.use(home.routes()).use(home.allowedMethods());
app.listen(port);

console.log(color.green,`[server] server is running at http://${host}:${port}/`);
