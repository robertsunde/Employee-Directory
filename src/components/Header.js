import React from "react";
import API from "../api/api"


export default class Header extends React.Component{



componentDidMount(){
console.log(API.findEmployees());
}

render(){
return(
<><p style={{textAlign:"center", fontSize:"36pt"}}>Employee Directory</p></>

)
}
}