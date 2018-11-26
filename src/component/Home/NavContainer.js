import React, { Component,Fragment } from 'react';
import {Grid } from "antd-mobile";
import { NavContanier } from "./styled";
import connect from "@connect"
class NavContnier extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            data2:[]
        }
    }
    componentWillReceiveProps(props,state){//一开始会执行一遍，没有数据，所以在接收新的属性之前先判断
        if(props.home.swiper.length>0){
            //处理nav导航栏的数据
            var resdata = props.home.swiper[1].list
            var res =  resdata.splice(0,4)
            var resdatas = props.home.swiper[2].list
            var ress =  resdatas.splice(0,4)
        }else{
            return false;
        }
        this.setState({
            //在接收到属性之前更改状态
            data:res.map((item,i)=>({
                icon:item.bannerImg,
            })),
            data2:ress.map((item,i)=>({
                icon:item.bannerImg,
            })),
        })
    }
      
    render(){
        return (
            <Fragment>  
                <NavContanier>
                    <div>
                        <Grid data={this.state.data}  hasLine={false} />
                        <Grid data={this.state.data2}  hasLine={false} />
                    </div>
                </NavContanier>
            </Fragment>
        )
    }
}

export default connect(NavContnier,[{name: 'home', state: ['swiper']}])