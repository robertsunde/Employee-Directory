import React from "react"
import API from "../api/api"
import Searchbar from "./Searchbar"
import EmployeeList from "./EmployeeList"



export default class Header extends React.Component{
state = {
users: [{}],
order: "descend",
filteredUsers: [{}],


}
headings = [

    { name: "Name", width: "20%"}

  ]



//can change e
handlesearch = e => {console.log(e.target.value);
    const value = e.target.value;
    const currentList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: currentList });}
//can change filtered userrs


        
        
handleFilter = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }





  handleSearch = e => {
    console.log(e.target.value);
    const value = e.target.value;
    const currentList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: currentList });
  }


  componentDidMount(){
    // ajax calls go here
    API.findEmployees().then(results=>{
    
    this.setState({
    users: results.data.results, 
    filteredUsers: results.data.results
    
    
    })
    })
    
    
    }


        render(){
        return(
        <>
        <Searchbar handlesearch = {this.handlesearch}/>
        <EmployeeList 
        headings = {this.headings}
        users = {this.state.filteredUsers}
        handleFilter = {this.handleFilter}
         />
        
        
        
        
        </>
        
        
        
        )
        }
        }