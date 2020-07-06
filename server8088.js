/*
 * @Description: 
 * @Date: 2020-03-30 10:25:02
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
/*
 * @Description: port 8087 server
 * @Date: 2020-03-30 10:14:31
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
const express = require('express');
const querystring = require('querystring');
const app = new express();





const port = 8088;

const data = {
    port,
    msg: 'success'
}


app.get('/', (req, res) => {
    res.send(`Hello World! I am port ${port}～`)
})



app.get('/jsonp-test', (req, res) => {
    const { query: { callback = 'callback' } } = req;
    data.callbackName = callback;
    res.end(`${callback}(${JSON.stringify(data)})`);
})
app.listen(port, () => { console.log(`success:${port}`) })


