/*
 * @Description: 
 * @Date: 2020-03-30 10:25:34
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
const express = require ('express');
const app = new express();





const port = 8089;



app.get('/', (req,res)=>{
    res.send(`Hello World! I am port ${port}～`)
})
app.listen(port,()=>{console.log(`success:${port}`)})


