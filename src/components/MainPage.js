import React from "react"
import SearchName from "./SearchName"
import EmployeeList from "./EmployeeList"
import API from "../api/api"



export default class Header extends React.Component{
state = {
order: "ascending",
email:[{}],
employee: [{}],
sortedEmployees: [{}],
}


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



        
/////////////////////////////////////////////////////////////////
// FUNCTION FOR SEARCHING FOR EMPLOYEE BY EMAIL IN DATABASE
/////////////////////////////////////////////////////////////////

emailsearch = filtered => {console.log(filtered.target.value);
    const letter = filtered.target.value;
    const currentList = this.state.email.filter(item => {
      let letters = Object.values(item)
        .toLowerCase();
      return letters.indexOf(letter.toLowerCase()) !== -1;
    });
    this.setState({ sortedEmployees: currentList });}



        
/////////////////////////////////////////////////////////////
// FUNCTION FOR SORTING EMPLOYEES ASCENDING/DESCENDING
////////////////////////////////////////////////////////////

handleFilter = nameSort => {
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

    const checkorder = (a, z) => {
      if (this.state.order === "ascending") {
        if (a[nameSort] === undefined) {
          return 1;
        } else if (z[nameSort] === undefined) {
          return -1;
        }

        else if (nameSort === "name") {
          return a[nameSort].first.localeCompare(z[nameSort].first);
        } else {
          return a[nameSort] - z[nameSort];
        }

      } else {
         if (nameSort === "name") {
          return z[nameSort].first.localeCompare(a[nameSort].first);
        } else {
          return z[nameSort] - a[nameSort];
        }
      }
    }
    const sortedUsers = this.state.sortedEmployees.sort(checkorder);
    this.setState({ sortedEmployees: sortedUsers });
  }





////////////////////////////////////////////////////////////////////////////
// API CALL
/////////////////////////////////////////////////////////////////////////////
  componentDidMount(){
    API.findEmployees().then(results=>{
    
    this.setState({
    employee: results.data.results, 
    email:results.data.results,
    sortedEmployees: results.data.results
     
    })
    })
    
    
    }



/////////////////////////////////////////////////////////
// "Name" button for sorting by employee name
/////////////////////////////////////////////////////////

sortArray = [
  { name: "Name"}
]


//////////////////////////////////////////////////////////
// RENDERS THIS ON THE PAGE
//////////////////////////////////////////////////////////

        render(){
        return(
        <>
        <SearchName employeesearch = {this.employeesearch}/>
        <EmployeeList 
        sortArray = {this.sortArray}
        employee = {this.state.sortedEmployees}
        email = {this.state.sortedEmployees}
        handleFilter = {this.handleFilter}
         />
        </>
        
        )
        }

        }