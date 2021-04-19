import React from "react"



function Searchbar({ employeesearch }) {
    return (
        <nav className="nav-bar">
            <div>
                <form>
<input
className = "form-control"
type = "search"
 style = {{float: "right", width: "50vw", marginLeft: "1cm", marginRight: "1cm"}}
  placeholder = "Search for an employee by name!"
onChange = {searchs=>employeesearch(searchs)}
/>


                </form>



            </div>


        </nav>
    )






}
export default Searchbar