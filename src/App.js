import React, { Component } from 'react';
import MainContainer from './pages/Main/MainContainer';
import axios from "axios"
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
        <MainContainer/>
      )
    }
}
export default App
