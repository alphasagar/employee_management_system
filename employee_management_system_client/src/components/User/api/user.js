import axios from "axios";

export const getAllUser=()=>async dispatch=>
{
    console.log("I am here");
  try {
      const res=await axios.get(`${config.api_url}/user`);
      console.log("Calling Get All User");
      console.log(res);
      dispatch ({
          type:'GET_User',
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:'Error in  calling API',
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

