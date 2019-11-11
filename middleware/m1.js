/*
 * @Description: 
 * @Date: 2019-11-05 16:36:34
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
function m1(ctx){
    console.log(ctx.path);
}
module.exports = function () {
    return async function(ctx,next){
        console.log('m1 start');
        m1(ctx);
        await next();
        console.log('m1 end');

    }
}