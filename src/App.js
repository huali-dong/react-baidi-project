import React, { Component } from 'react'
import axios from "axios"
import {Route} from "react-router-dom"
class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  // componentWillMount(){
  //   axios.get("/bda/bd-user/api/users/getUsersInfo?_t=1543030631715")
  //   .then((result)=>{
  //     console.log(result)
  //   })
  //   // axios.get("https://m.bd-ego.com/bd-user/api/users/getUsersInfo?_t=1543030631715")
  //   // .then((result)=>{
  //   //   console.log(result)
  //   // })
  // }
    render(){
      return (
        <div>
            {this.props.children}
        </div>
      )
    }
}
export default App
