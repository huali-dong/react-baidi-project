import React, { Component,Fragment } from 'react';
import { Route,withRouter,Redirect,Switch} from "react-router-dom";
import ClassfySearch from "@c/Classfy/ClassfySearch";
import ClassfyNav from "@c/Classfy/ClassfyNav";
import ClassfyContainer from "@c/Classfy/ClassfyContainer";
import ClassfyBrand from "@c/Classfy/ClassfyBrand";
class Classfy extends Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(props,state){
        //因为main组件用的是组件切换，没有用路由切换，所以每次当更改的时候，都会重新render
        //所以在这里阻止此组件是否渲染
        let {pathname } = props.location;//新的
        let {pathname : _pathname } = this.props.location;//当前的
        if(pathname ==="/" && (_pathname==="/classfy" || _pathname === "/brand")) {
            return false;
        }
        return true;
    }
    render(){
        return (
            <Fragment>
                <ClassfySearch/>
                <ClassfyNav/>
                <div>
                        <Route path="/" exact render={()=>{ return <Redirect to="/classfy"/>}}></Route>
                        <Route path="/classfy"  component={()=><ClassfyContainer/>} ></Route>
                        <Route path="/brand"  component={()=><ClassfyBrand/>}></Route>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Classfy)