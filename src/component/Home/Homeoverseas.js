import React, { Component,Fragment } from 'react'
import {HomeOversears} from "./styled"
import connect from "@connect"
class Homeovserseas extends Component {
    constructor(props){
        super(props)
        this.state = {
            list1:[],
            list2:[],
        }
    }
    componentWillReceiveProps(props,state){
        if(props.home.swiper.length>0){
            this.setState({
                list1:props.home.swiper[7].list,
                list2:props.home.swiper[8].list,
            })
        } else{
            return false;
        }
    }
    renderImg(data){
        if(!data) return false;
        return data.map((item,i)=>{
            return (
                <div 
                key={i}
            >
                <img src={item.bannerImg}>
                </img>
            </div>
            )
        })
    }
    render () {
        return (
            <Fragment>  
                <HomeOversears ismargin={true}>
                    {this.renderImg.bind(this,this.state.list1)()}
                </HomeOversears>
                <HomeOversears >
                    {this.renderImg.bind(this,this.state.list2)()}
                </HomeOversears>
            </Fragment>
        )
    }
}

export default connect(Homeovserseas,[{name:"home",state:"swiper"}])