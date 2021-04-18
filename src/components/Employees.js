import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//////////////////////////////////////////////////////////  ADD ALL OF THIS INTO EMPLOYEE TABLE PAGE TO ELIMINATE THIS PAGE. DO NOT FORGET.
function Employees({ users }) {
  return (
        
    <div>
    {users[0] !== undefined && users[0].name !== undefined ? (
      users.map(({ login, name, picture, phone, email}) => {
        return (
          <div key={login.uuid}>
            <div data-th="Image" className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", marginTop:"2cm", padding: "0cm" }}>
              <img
                src={picture.medium}
                alt={"profile image for " + name.first + " " + name.last}
                className="img-responsive"
              />
            </div>
            <div data-th="Name" className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", padding: "0cm"  }}>
              {name.first} {name.last}
            </div>
            <div data-th="Phone" className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", padding: "0cm"  }}>
              {phone}
            </div>
            <div data-th="Email" className="col-12 text-center" style={{marginLeft: ".5cm", marginRight: ".5cm", marginBottom:"2cm", padding: "0cm"  }}>
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