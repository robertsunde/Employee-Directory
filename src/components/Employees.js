import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


function Employees({ employee }) {
  return (
        
    
    <div>
    {employee[0] !== undefined && employee[0].email !== undefined ? (
      employee.map(({ id, name, picture, phone, email}) => {
        return (
          <div key={id.value}>
            <div className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", marginTop:"2cm", padding: "0cm" }}>
              <img
                src={picture.large}
                alt={""}
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
              <a href={"mailto:" + email} target="__blank">
                {email}
              </a>
            </div>
          </div>
        );
      })
    ) : (
      <></>
    )}
  </div>


);

}




























export default Employees