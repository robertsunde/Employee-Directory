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
handlesearch = filtered => {console.log(filtered.target.value);
    const value = filtered.target.value;
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
    const compareFnc = (a, z) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (z[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return a[heading].first.localeCompare(z[heading].first);
        } else {
          return a[heading] - z[heading];
        }
      } else {
         if (heading === "name") {
          return z[heading].first.localeCompare(a[heading].first);
        } else {
          return z[heading] - a[heading];
        }
      }
    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
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

//////////////////////////////////////////////////////////
// RENDERS THIS ON THE PAGE
//////////////////////////////////////////////////////////

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