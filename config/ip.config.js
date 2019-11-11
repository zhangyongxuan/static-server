/*
 * @Description:
 * @Date: 2019-11-07 09:50:24
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
const address = require("address");
const localhost = address.ip() || "127.0.0.1";
module.exports = {
  dev: {
    host: localhost,
    port: 9999
  }
};
