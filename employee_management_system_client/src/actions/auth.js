
import axios from 'axios';
import { REGISTER_SUCESS,REGISTER_FAIL,USER_LOAD,AUTH_ERR,LOGIN_SUCCESS ,LOGIN_FAIL,LOGOUT} from './types';
import { setAlert } from './alert';
import setauthtoken from '../utils/setauthtoken';
//LOAD USER
export const loaduser=()=> async dispatch =>{
    if(localStorage.token)
     {
        setauthtoken(localStorage.token);
    }
    try {
        const res=await axios.get('http://localhost:4000/api/auth');
        dispatch({
            type:USER_LOAD,
            payload:res.data
        });
        dispatch (loaduser());
    } catch (err) {
        dispatch({type:AUTH_ERR});
    }
}

//Register the users
export const register=({name,email,password})=>async dispatch=>
{
const config ={
    headers:{
        'Content-Type':'application/json'
    }
}
const body =JSON.stringify({name,email,password});

try {
    const res=await axios.post('http://localhost:4000/api/users',body,config);

    dispatch({
        type:REGISTER_SUCESS,
        payload:res.data
    });
    dispatch (loaduser());
} catch (err) {
    const errors=err.response.data.errors;

    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
dispatch(
    {
        type:REGISTER_FAIL
    }
)
    
}
}

//LOGIN the users
export const login=(email,password)=>async dispatch=>
{
const config ={
    headers:{
        'Content-Type':'application/json'
    }
}
const body =JSON.stringify({email,password});
console.log("1");
try {
    const res=await axios.post('http://localhost:4000/api/auth',body,config);
    console.log(res.data);
    dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
    });
    dispatch (loaduser());
} catch (err) {
    const errors=err.response.data.errors;

    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
dispatch(
    {
        type:LOGIN_FAIL
    }
)
    
}
}

//LOGOUT

export const logout=()=>dispatch=>dispatch({type:LOGOUT});

