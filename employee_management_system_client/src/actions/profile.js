import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE,PROFILE_ERR,UPDATE_PROFILE} from "./types";


export const getCurrentProfile=()=>async dispatch=>
{
  try {
      const res=await axios.get('http://localhost:4000/api/profile/me');
      dispatch ({
          type:GET_PROFILE,
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:PROFILE_ERR,
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

// Create profile or update profile


export const createProfile=(formData,navigate,edit=false)=>async dispatch=>
{
    try {
        const config=
        {
            headers:{
                'Content-Type':'application/json'
            }

        }
        const res= await axios.post('http://localhost:4000/api/profile',formData,config);
        dispatch ({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert(edit ? 'profile updated':'Profile created','success'));
        if(!edit){
            navigate('/Dashboard');
        }
    } catch (err) {
        const errors=err.response.data.errors;

    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
        dispatch ({
            type:PROFILE_ERR,
            payload:{msg:err.response.statusText,status:err.response.status}
        }); 
    }
}

//ADD New space
export const addnewspace=(formData,navigate)=>async dispatch=>
{
    try {
        const config=
        {
            headers:{
                'Content-Type':'application/json'
            }

        }
        const res= await axios.put('http://localhost:4000/api/profile/newspace',formData,config);
        dispatch ({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('NEW SPACE ADDED','success'));
       
            navigate('/Dashboard');
        
    } catch (err) {
        const errors=err.response.data.errors;

    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
        dispatch ({
            type:PROFILE_ERR,
            payload:{msg:err.response.statusText,status:err.response.status}
        }); 
    }   
}