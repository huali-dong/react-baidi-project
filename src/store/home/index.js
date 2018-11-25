
import default_state from "./default_state"
import connect from "@connect"
import action_creators from "./actionCreators"
import * as types from "./actionTypes"
connect.addActions({
    home:action_creators
})
const reducer=(prevestate=default_state,action)=>{
    let new_state = Object.assign({},prevestate)
    switch(action.type){
        case types.GETSWIPER + "_FULFILLED":
        new_state.seconds = prevestate.seconds;
        new_state.swiper = action.payload.data.data.list;break;
        case types.GETSECONDS +"_FULFILLED":
        new_state.swiper = prevestate.swiper;
        new_state.seconds = action.payload.data.data.list;break;
        default : return new_state;
    }
    return new_state;
}

export default reducer