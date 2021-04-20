import React from "react"
import Employees from "./Employees"
import 'bootstrap/dist/css/bootstrap.min.css'


function EmployeeList({ employee, sortArray, handleFilter }) {

return(
<div>
<div className="row">
          <div className="col-12">

{/* Sorts employees */}

            {sortArray.map(({ name }) => {
              return (
                <div
                  key={name}
                  className="col-12 text-center"
                  style={{cursor: "pointer", alignItems: "center"}}
                  onClick={() => {
                    handleFilter(name.toLowerCase());
                  }}
                >

                <p>Click below to sort by:
                </p>
                 {name}
                </div>
              );
        })}

</div>

</div>







<Employees employee = {employee}/>
</div>
)
}






export default EmployeeList