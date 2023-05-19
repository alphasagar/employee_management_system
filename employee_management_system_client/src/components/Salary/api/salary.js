import axios from "axios";

export const getAllSalary=()=>async dispatch=>
{
    console.log("I am here");
  try {
      const res=await axios.get(`${config.api_url}/salary`);
      console.log("Calling Get All Salary");
      console.log(res);
      dispatch ({
          type:'GET_Salary',
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:'Error in  calling API',
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

