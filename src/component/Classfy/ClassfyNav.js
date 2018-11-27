import React, { Component,Fragment } from 'react';
import {ClassNavContainer,ClassfyContainerBar} from "./Classfystyled";
import { withRouter} from "react-router-dom";
class ClassfyNav extends Component{
    constructor(props){
        super(props)
        this.state = {
            //将此组件包裹上WithRoute，就能拿到route上的东西，就能做点击切换的nav的一个变化
            active_nav : this.props.location.pathname
        }
    }
    componentWillReceiveProps(props){//当路由切换的时候，在即将要接受这个属性的时候，更改状态，props是即将要接受的，this上面还是旧得
        this.setState({
            active_nav : props.location.pathname
        })
    }
    render(){
        let {active_nav} = this.state
        return (
            <Fragment>
                <ClassNavContainer>
                    <ClassfyContainerBar active={active_nav === "/classfy"}>
                        <a onClick={()=>this.changeRoute("/classfy")}>分类</a>
                    </ClassfyContainerBar>
                    <ClassfyContainerBar active = {active_nav === "/brand"}>
                        <a onClick={()=>this.changeRoute("/brand")}>品牌</a>
                    </ClassfyContainerBar>
                </ClassNavContainer>
            </Fragment>
        )
    }
    changeRoute(nav){
        this.props.history.push(nav)
    }
}

export default  withRouter(ClassfyNav) 