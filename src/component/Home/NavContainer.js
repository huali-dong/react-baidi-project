import React, { Component,Fragment } from 'react';
import {Grid } from "antd-mobile";
import { NavContanier } from "./styled";
import connect from "@connect"
class NavContnier extends Component{
    constructor(props){
        super(props)
        this.state = {
            // data: Array.from(new Array(8)).map((_val, i) => ({
            //     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            //     text: `name${i}`,
            //   })),
            data:[],
            data2:[]
        }
    }
    componentDidMount(){
         this.props.home_actions.getswiper()
    }
    componentWillReceiveProps(){
        if(this.props.home.swiper.length>0){
            //处理nav导航栏的数据
            var resdata = this.props.home.swiper[1].list
            var res =  resdata.splice(0,4)
            var resdatas = this.props.home.swiper[2].list
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