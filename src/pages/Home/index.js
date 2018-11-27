import React, { Component,Fragment } from 'react';
import Homeheader from "@c/Home/Homeheader";
import Swiper from "@c/Home/Swiper";
import Nav from "@c/Home/NavContainer";
import Homemain from "@c/Home/Homemain";
import connect from "@connect";
import {HomeBox} from "./styled";
import ScrollTop from "@c/common/scroll";
import scroll from "@util/scroll"
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            scrolltopshow :false
        }
        this.ScrollTop = this.ScrollTop.bind(this)
    }
    async componentDidMount(){
        //home页面所有数据同时在这里获取，因为获取数据的先后顺序不一样，可能有些会为空
      await  this.props.home_actions.getSeconds()
        this.props.home_actions.getswiper()
        let el = this.el;
        this.scroll = scroll({
            el:el,
            handel:()=>{
            },
            onscroll:(y)=>{
                if(y<=-300){
                    this.setState({
                      scrolltopshow:true
                    })
                }else{
                    this.setState({
                        scrolltopshow:false
                      })
                }
            },
        })
    }
    ScrollTop(){
        this.scroll.scrollTo(0,0,0)
        this.setState({//回到顶部之后，图标不删除，可以重新设置
            scrolltopshow:false
          })

    }
    render(){
        return (
            <Fragment>  
                <Homeheader/>
                <HomeBox ref={el=>this.el=el} className="bscroll">
                    <div className="bscroll-content">
                        <Swiper/>
                        <Nav/>
                        <Homemain/>
                    </div>
                </HomeBox>
                {/* 要放在scroll的外面，因为如果放在里面的话，点第一下首先是停止动画，第二下才是回到顶部 */}
                { this.state.scrolltopshow ? <ScrollTop click = {this.ScrollTop}></ScrollTop> : "" }
            </Fragment>
        )
    }
}

export default connect(Home,[{name: 'home', state: ['swiper','seconds']}])