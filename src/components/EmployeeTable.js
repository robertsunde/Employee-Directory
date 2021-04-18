import React from "react"
import Grid from "./Grid"
import 'bootstrap/dist/css/bootstrap.min.css'






function EmployeeTable({ users, headings, handleFilter }) {

return(
<div>
<div className="row">
          <div className="col-12">
            {headings.map(({ name }) => {
              return (
                <div
                  className="col-2"
                  key={name}
                
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







<Grid users = {users}/>
</div>
)
}






export default EmployeeTable