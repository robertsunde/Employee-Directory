import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


function Grid({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
  return (
        
    <div>
    {users[0] !== undefined && users[0].name !== undefined ? (
      users.map(({ login, name, picture, phone, email, dob }) => {
        return (
          <div key={login.uuid}>
            <div data-th="Image" className="col-2 align-middle">
              <img
                src={picture.medium}
                alt={"profile image for " + name.first + " " + name.last}
                className="img-responsive"
              />
            </div>
            <div data-th="Name" className="col-2 name-cell align-middle">
              {name.first} {name.last}
            </div>
            <div data-th="Phone" className="col-2 align-middle">
              {phone}
            </div>
            <div data-th="Email" className="align-middle">
              <a href={"mailto:" + email} target="__blank">
                {email}
              </a>
            </div>
            <div data-th="DOB" className="col-2 align-middle">
              {formatDate(dob.date)}
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




























export default Grid