import React from "react"



function Searchbar({ handlesearch }) {
    return (
        <nav className="nav-bar">
            <div>
                <form>
<input
className = "form-control"
type = "search"
placeholder = "Find An Employee"
onChange = {e=>handlesearch(e)}
/>



                </form>



            </div>


        </nav>
    )






}
export default Searchbar