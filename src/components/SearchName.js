import React from "react"


//////////////////////////////////////////////////////////
// SearchName FUNCTION FOR RENDERING SEARCHES IN LIST FORM
/////////////////////////////////////////////////////////

function SearchName({ employeesearch }) {
    return (
        <nav className="nav-bar">
            <div>
                <div>
                
<input
className = "form-control btn-light"
type = "search"
onChange = {searchs=>employeesearch(searchs)}
 style = {{float: "right", width: "50vw", marginLeft: "1cm", marginRight: "1cm"}}
  placeholder = "Search for an employee by name, email, or phone#!"

/>


                </div>



            </div>


        </nav>
    )



}
export default SearchName