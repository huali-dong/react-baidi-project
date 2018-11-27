import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter,Route,Switch} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import MainContainer from '@pages/Main/MainContainer'
import Detail from "@pages/detail"
import "@lib"
ReactDOM.render(
   <Provider store = {store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/"  component={MainContainer}/>
                </Switch>
            </App>
        </BrowserRouter>
   </Provider>
, 
document.getElementById('root'));
serviceWorker.unregister();
