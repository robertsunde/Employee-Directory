import React from "react"
import Grid from "./Grid"





function EmployeeTable({ users, headings, handleFilter }) {

return(
<div>
<table>
<thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleFilter(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>







<Grid users = {users}/>
</table>
</div>
)
}

export default EmployeeTable