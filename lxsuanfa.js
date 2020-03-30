/*
 * @Description: 
 * @Date: 2020-03-30 15:27:39
 * @author: zhangyongxuan <yongxuan.zhang@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2019, Hand
 */
/**

* 获取最适合的客户的需求 负载均衡轮询

*/

function getBestCus_group(list) {

    if (list.length > 0) {



        // 1、cus_group_name 去重

        let cus_hash = [];

        for (let i = 0; i < list.length; i++) {

            if (cus_hash.indexOf(list[i].cus_group_name) == -1) {

                cus_hash.push(list[i].cus_group_name);

            }

        }

        console.log("去重cus_hash==" + cus_hash);



        // 获取优先级权重

        // const cus_priorityData = require('../../config/json_data/cus_priority.json');

        const cus_priorityData = await this.groupService.getGroupList(this.app.config('industry'), false);

        // console.log("cus_priorityData=="+JSON.stringify(cus_priorityData));

        let cus_priorityRes = [];

        for (let i = 0; i < cus_hash.length; i++) {

            for (let item in cus_priorityData) {

                console.log("item==" + JSON.stringify(cus_priorityData[item]));

                if (cus_priorityData[item].name == cus_hash[i]) {

                    cus_priorityRes.push({ "cus": cus_priorityData[item].name, "priority": cus_priorityData[item].score || 0 });

                    break;

                }

            }

        }



        console.log("获取优先级权重==" + JSON.stringify(cus_priorityRes));



        // 2、选择最优客户 负载均衡轮询

        let sum = 0;

        let bestCus = 0;



        for (let i = 0; i < cus_priorityRes.length; i++) {

            sum += cus_priorityRes[i].priority;

        }



        let rand = Math.random() * sum;

        for (let i = 0; i < cus_priorityRes.length; i++) {

            rand -= cus_priorityRes[i].priority;

            if (rand <= 0) {

                bestCus = cus_priorityRes[i].cus;

                break;

            }

        }

        if (bestCus == 0) {

            let maxi = cus_priorityRes[0];

            for (let i = 0; i < cus_priorityRes.length; i++) {

                if (maxi.priority <= cus_priorityRes[i].priority) {

                    maxi.cus = cus_priorityRes[i].cus;

                }

            }

            bestCus = maxi.cus;

        }

        console.log("获取优先级bestCus==" + bestCus);

        // 3、选择该客户对应需求

        for (let i = 0; i < list.length; i++) {

            if (list[i].cus_group_name == bestCus) {

                console.log("获取list[i]==" + JSON.stringify(list[i]));

                return list[i];

            }

        }

    } else {

        return {};

    }

}
