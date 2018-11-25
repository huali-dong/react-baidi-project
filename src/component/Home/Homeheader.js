import React, { Component,Fragment } from 'react';
import {HeaderContanier} from "./styled";
import Left from "@as/images/header-left.png"
import Search from "@as/images/search.png"
import Right from "@as/images/header-right.png"
import Close from "@as/images/cha.png"
class Movie extends Component{
    constructor(props){
        super(props)
        this.state={
            left:Left,
            search: Search,
            close :Close,
            right:Right
        }
    }
    render(){
        return (
            <Fragment>
                <HeaderContanier { ...this.state}>
                    <div className="left" ></div>
                    <div className="center">
                        <div className="center-left"></div>
                        <input></input>
                        <a href="#"> </a>
                    </div>
                    <div className="right">
                        <img  alt="" src={this.state.right}/>
                    </div>
                </HeaderContanier>
            </Fragment>
        )
    }
}

export default Movie