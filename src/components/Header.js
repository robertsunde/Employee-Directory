import React from "react";
import API from "../api/api"


export default class Header extends React.Component{

 
///////////////////////////////////////////////////
// Will load first
//////////////////////////////////////////////////

componentDidMount(){console.log(API.findEmployees());}


//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
return(
<><p className = "header" style={{textAlign:"center", fontSize:"36pt"}}>Employee Directory</p></>

)}}