import React from "react"
import Employees from "./Employees"
import 'bootstrap/dist/css/bootstrap.min.css'


function EmployeeList({ users, headings, handleFilter }) {

return(
<div>
<div className="row">
          <div className="col-12">
            {headings.map(({ name }) => {
              return (
                <div
                  className="col-2 text-center"
                  key={name}
                style={{cursor: "pointer"}}
                  onClick={() => {
                    handleFilter(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </div>
              );
            })}
          </div>
        </div>







<Employees users = {users}/>
</div>
)
}






export default EmployeeList