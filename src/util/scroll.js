import BSroll from "better-scroll"

const scroll = ({el,handel,onscroll})=>{
    let scroll=  new BSroll(el,{
        probeType:2,
        scrollY:true,
        click:true,
    })
    scroll.on("pullingUp",()=>{
        handel();
    })
    scroll.on("scroll",()=>{
        onscroll(scroll.y)
    })
   return scroll;
}

export default scroll 