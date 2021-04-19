import React from "react"
import Searchbar from "./Searchbar"
import EmployeeList from "./EmployeeList"
import API from "../api/api"



export default class Header extends React.Component{
state = {
order: "descending",
employee: [{}],
filteredUsers: [{}],
}
sortArray = [
    { name: "Name"}
  ]



employeesearch = filtered => {console.log(filtered.target.value);
    const value = filtered.target.value;
    const currentList = this.state.employee.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: currentList });}
//can change filtered userrs


        
/////////////////////////////////////////////////////////////
// FUNCTION FOR SORTING EMPLOYEES ASCENDING/DESCENDING
////////////////////////////////////////////////////////////

handleFilter = heading => {
    if (this.state.order === "descending") {
      this.setState({
        order:"ascending"
      })
    } else {
      this.setState({
        order:"descending"
      })
    }


  ///////////////////////////////////////////////////////////
  // IF/ELSE FOR SORT FUNCTIONALITY
  //////////////////////////////////////////////////////////

    const compareFnc = (a, z) => {
      if (this.state.order === "ascending") {
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





////////////////////////////////////////////////////////////////////////////
// API CALL
/////////////////////////////////////////////////////////////////////////////
  componentDidMount(){
    API.findEmployees().then(results=>{
    
    this.setState({
    employee: results.data.results, 
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
        <Searchbar employeesearch = {this.employeesearch}/>
        <EmployeeList 
        sortArray = {this.sortArray}
        employee = {this.state.filteredUsers}
        handleFilter = {this.handleFilter}
         />
        </>
        
        )
        }
        }