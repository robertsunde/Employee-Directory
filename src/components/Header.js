import React from "react";
import API from "../api/api"


export default class Header extends React.Component{



componentDidMount(){
console.log(API.findEmployees());
}


render(){
return(
<><h1 style={{textAlign:"center"}}>Employee Directory</h1></>



)
}
}