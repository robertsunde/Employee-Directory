import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

///////////////////////////////////////////////////
// POPULATES EMPLOYEE LIST FOR ALLINPUTS PAGE
///////////////////////////////////////////////////

function EmployeeList({ employee, sortArray, handleFilter }) {

return(
<div>
<div className="row">
          <div className="col-12">


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

<div>
    {employee[0] !== undefined && employee[0].email !== undefined ? (
      employee.map(({ id, name, picture, phone, email}) => {
        return (
          <div key={id.value}>
            <div className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", marginTop:"2cm", padding: "0cm" }}>
              <img
                src={picture.large}
                alt={"employee"}
                className="img-responsive"
              />
            </div>
            <div className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", padding: "0cm"  }}>
              {name.first} {name.last}
            </div>
            <div  className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", padding: "0cm"  }}>
              {phone}
            </div>
            <div className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", marginBottom:"2cm", padding: "0cm"  }}>
                {email}
            </div>
          </div>
        );
      })
    ) : (
      <></>
    )}
  </div>










</div>
)
}






export default EmployeeList