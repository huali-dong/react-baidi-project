import BSroll from "better-scroll"

const scroll = ({el,})=>{
     new BSroll(el,{
        probeType:2,
        scrollY:true,
    })
}

export default scroll 