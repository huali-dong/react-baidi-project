import React, { Component,Fragment } from 'react';
import {MineMenuHead,NavContainerBar} from "./Minestyled";
import NavContainer from "@c/common/NavContainer";
import mine1 from "@as/images/mine1.png"
import mine2 from "@as/images/mine2.png"
import mine3 from "@as/images/mine3.png"
import mine4 from "@as/images/mine4.png"
import mine5 from "@as/images/mine5.png"
import mine6 from "@as/images/mine6.png"
class MineMenu extends Component{
    constructor(props){
        super(props)
        this.state={
            list : [
               mine1,mine2,mine3,mine4
            ],
            text:[
                "待处理","待收货","已完成","退款/售货"
            ],
            lists:[
                mine5,mine6,
            ],
            texts:[
                "百大积分卡","百大预付卡"
            ]
        }
    }
    render(){
        return (
            <Fragment>
                <MineMenuHead>
                    <a>
                        <div>我的订单
                            <i className="order-right fa fa-angle-right"></i>
                        </div>
                    </a>
                </MineMenuHead>
                <NavContainer list={this.state.list} text = {this.state.text}/>
                <NavContainerBar >
                    <NavContainer lists = {this.state.lists} texts={this.state.texts} />
                </NavContainerBar>
            </Fragment>
        )
    }
}

export default MineMenu