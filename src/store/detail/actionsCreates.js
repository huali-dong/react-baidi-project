
import * as types from "./action-types"
import api from "@util/api"
export default{
    addcar(options){//向购物车中加入商品
       return {
           type:types.ADD_CAR,
           payload: api.addCar(options)
       }
    },
    controlNum(options){//
        return {
            type:types.CONTROL_NUM,
            payload:api.controlNum(options)
        }
    },
    getonegoods(id){//获取单个商品
        return{
            type:types.GETONE_GOODS,
            payload:api.getonegoods(id)
        }
    },
    getgoods(){//获取所有商品信息
        return{
            type:types.GTEGOODS,
            payload:api.getgoods()
        }

    }
}