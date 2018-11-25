import React, { Component,Fragment } from 'react';
import {Grid } from "antd-mobile";
import { NavContanier } from "./styled";
import nav from "@as/images/nav.png"
class NavContnier extends Component{
    constructor(props){
        super(props)
        this.state = {
              data:this.props.list? this.props.list.map((item,i)=>({
                  icon:item,
                  text:this.props.text[i],
              })) : this.props.lists.map((item,i)=>({
                    icon:item,
                    text:this.props.texts[i],
              }))
        }
    }
    render(){
        return (
            <Fragment>  
                <NavContanier>
                    <div>
                        <Grid data={this.state.data}  hasLine={false} />
                    </div>
                </NavContanier>
            </Fragment>
        )
    }
}

export default NavContnier