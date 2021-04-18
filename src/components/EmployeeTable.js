import React from "react"
import Grid from "./Grid"





function EmployeeTable({ users, headings, handleFilter }) {

return(
<div>
<div className="row">
          <div className="col-12">
            {headings.map(({ name, width }) => {
              return (
                <div
                  className="col"
                  key={name}
                  style={{ width }}
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