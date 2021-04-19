import React from "react"
import Searchbar from "./Searchbar"
import EmployeeList from "./EmployeeList"
import API from "../api/api"



export default class Header extends React.Component{
state = {
order: "descending",
employee: [{}],
sortedEmployees: [{}],
}

sortArray = [
    { name: "Name"}
  ]

/////////////////////////////////////////////////////////////////
// FUNCTION FOR SEARCHING FOR EMPLOYEE BY NAME IN DATABASE
/////////////////////////////////////////////////////////////////

employeesearch = filtered => {console.log(filtered.target.value);
    const letter = filtered.target.value;
    const currentList = this.state.employee.filter(item => {
      let letters = Object.values(item)
        .join("")
        .toLowerCase();
      return letters.indexOf(letter.toLowerCase()) !== -1;
    });
    this.setState({ sortedEmployees: currentList });}



        
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
    const sortedUsers = this.state.sortedEmployees.sort(compareFnc);
    this.setState({ sortedEmployees: sortedUsers });
  }





////////////////////////////////////////////////////////////////////////////
// API CALL
/////////////////////////////////////////////////////////////////////////////
  componentDidMount(){
    API.findEmployees().then(results=>{
    
    this.setState({
    employee: results.data.results, 
    sortedEmployees: results.data.results
     
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
        employee = {this.state.sortedEmployees}
        handleFilter = {this.handleFilter}
         />
        </>
        
        )
        }
        }