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
         console.log(this.props)
         this.props.home_actions.getswiper()
    }
    componentWillReceiveProps(){
        if(this.props.home.length>0){
            var resdata = this.props.home[1].list
            var res =  resdata.splice(0,4)
            var resdatas = this.props.home[2].list
            var ress =  resdatas.splice(0,4)
        }else{
            return false;
        }
        this.setState({
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