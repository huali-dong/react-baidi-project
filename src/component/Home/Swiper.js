import React, { Component,Fragment } from 'react';
import swiper from "@as/images/swiper.png";
import { SwriperContainer } from "./styled";
import {  Carousel } from 'antd-mobile';
import connect from "@connect";
class Swiper extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.home_actions.getswiper()
    }
    render(){
        return (
            <Fragment> 
                <SwriperContainer>
                    <Carousel
                        autoplay={true}
                        dots={false}
                    >
                        {this.renderswiper()}
                        <img alt="" src={swiper}></img>
                    </Carousel>
                   
                </SwriperContainer> 
            </Fragment>
        )
    }
    renderswiper(){
        if(this.props.home.length>0){
            var  list = this.props.home[0].list 
        }else{
            return "";
        }
        return list.map((item,i)=>{
            return  <img
                        key={i}
                        src={ item.bannerImg}
                        alt=""
                    />
            }
        )
    }
}

export default connect(Swiper,[{name: 'home', state: ['swiper']}])