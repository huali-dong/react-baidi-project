import React, { Component } from 'react';
import { MineHeaderContainer} from "./Minestyled"
import Bg_Img from "@as/images/bg_mine.png";
import MineImg from "@as/images/allpyra_headimg.png";
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
class MineHeader extends Component{
    render(){
        return (
            <MineHeaderContainer img = {Bg_Img}>
                <div className="head">
                    <div className="left"><i className="fa fa-cog"></i></div>
                    <div className="right"><i className="fa fa-telegram"></i></div>
                </div>
                <div className="center">
                    <div className="center-left">
                        <img src={MineImg}></img>
                        <div className="span">
                            <span>13198487983</span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <NoticeBar mode="link" marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    补全个人信息成为百大集团会员，凭借手机号可在百大集团门店享受会折扣并参与积分。
                    </NoticeBar>
                </div>  
            </MineHeaderContainer>
        )
    }
}

export default MineHeader