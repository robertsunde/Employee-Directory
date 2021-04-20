import axios from "axios";



////////////////////////////////////////////////////
// API CALL FOR EMPLOYEE DATA USING AXIOS
///////////////////////////////////////////////////

export default {

     findEmployees: function() {
       return axios.get("https://randomuser.me/api/?results=100&nat=us");
     }
   };





