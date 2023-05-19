import axios from "axios";

export const getAllFeedback=()=>async dispatch=>
{
    console.log("I am here");
  try {
      const res=await axios.get(`${config.api_url}/feedback`);
      console.log("Calling Get All Feedback");
      console.log(res);
      dispatch ({
          type:'GET_Feedback',
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:'Error in  calling API',
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

