
import * as types from "./actionTypes";
import axios from "axios"
export default  {
    getswiper(){
        // return (dispatch)=> {
        //     axios.get("/bda/bd-marketing/api/channel/getNewHeadPageData?_t=1543039484443")
        //     .then((res)=>{
        //         console.log(res)
        //         let action = {type:types.GETSWIPER,value:res.data.list}
        //         dispatch(action);
        //     })
        // }
        return {
            type:types.GETSWIPER,//获取主页面的大多数数据
            payload: axios.get("/bda/bd-marketing/api/channel/getNewHeadPageData?_t=1543039484443")
        }
    },
    getSeconds(){
        return {
            type:types.GETSECONDS,
            payload : axios.get("/bda/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1543114778554")
        }
    },
}
