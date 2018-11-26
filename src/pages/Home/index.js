import React, { Component,Fragment } from 'react';
import Homeheader from "@c/Home/Homeheader";
import Swiper from "@c/Home/Swiper";
import Nav from "@c/Home/NavContainer";
import Homemain from "@c/Home/Homemain";
import connect from "@connect";
import {HomeBox} from "./styled";
import Scroll from "@c/common/scroll";
import scroll from "@util/scroll"
class Home extends Component{
    constructor(props){
        super(props)
    }
    async componentDidMount(){
        //home页面所有数据同时在这里获取，因为获取数据的先后顺序不一样，可能有些会为空
      await  this.props.home_actions.getSeconds()
        this.props.home_actions.getswiper()
        let el = this.el;
        scroll({el})
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
                <Scroll></Scroll>
            </Fragment>
        )
    }
}

export default connect(Home,[{name: 'home', state: ['swiper','seconds']}])