import axios from "axios";

export const getAllLeave=()=>async dispatch=>
{
    console.log("I am here");
  try {
      const res=await axios.get(`${config.api_url}/leave`);
      console.log("Calling Get All Leave");
      console.log(res);
      dispatch ({
          type:'GET_Leave',
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:'Error in  calling API',
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

