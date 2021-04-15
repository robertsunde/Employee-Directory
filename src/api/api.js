import axios from "axios";



export default {
    //axios call like ajax call for react
     findEmployees: function() {
       return axios.get("https://randomuser.me/api/?results=50&nat=us");
     }
   };

