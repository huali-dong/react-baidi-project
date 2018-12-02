import * as types from "./action-types"
import default_state from "./default-state"
import action_creators from "./actionsCreates"
import connect from "@connect"
import _ from 'lodash'
connect.addActions({
    detail:action_creators
})
const reducer =(prevstate = default_state,actions)=>{
    let new_state = Object.assign({},prevstate);
    switch(actions.type){
        case types.ADD_CAR+"_FULFILLED": 
        //点击商品添加的时候，如果store里面已经有该商品信息了，就不应该再添加了
            let good = _.find(new_state.goods, item => item.id === actions.payload.goods[0].id)
            if(!good){
                new_state.goods.push(actions.payload.goods[0]);
            }
            break;
        case types.GETONE_GOODS+"_FULFILLED": new_state.detail = actions.payload.good;break;
        case types.GTEGOODS +"_FULFILLED" : new_state.good = actions.payload.goods;break;
        default : return new_state;
    }
    return new_state;
}
export default reducer