import React, { Component,Fragment } from 'react';
import MineHeader from "@c/Mine/MineHeader";
import MineMenu from "@c/Mine/MineMenu";

import {MineWrapper} from "./styled"
class Mine extends Component{
    render(){
        return (
            <Fragment>
                <MineWrapper>
                    <MineHeader/>
                    <MineMenu/>
                </MineWrapper>
            </Fragment>
        )
    }
}

export default Mine