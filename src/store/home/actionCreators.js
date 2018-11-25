
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
            type:types.GETSWIPER,
            payload: axios.get("/bda/bd-marketing/api/channel/getNewHeadPageData?_t=1543039484443")
        }
    }
}
