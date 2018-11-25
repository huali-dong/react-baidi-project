import React, { Component,Fragment } from 'react';
import { ClassfySearchContainer } from "./Classfystyled";
import Search from "@as/images/search.png";
import Close from "@as/images/cha.png";
class ClassfySearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            search : Search,
            close : Close,
        }
    }
    render(){
        return (
            <Fragment>
                <ClassfySearchContainer {...this.state}>
                    <div className="searchs">
                        <form>
                            <i className="search fa fa-search"></i>
                            <input></input>
                            <i className="close fa fa-close"></i>
                        </form>
                    </div>
                </ClassfySearchContainer>
            </Fragment>
        )
    }
}

export default ClassfySearch