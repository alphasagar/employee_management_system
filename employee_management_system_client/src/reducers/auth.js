import{
    REGISTER_SUCESS,REGISTER_FAIL,USER_LOAD,AUTH_ERR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT
} from '../actions/types';

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    loading: true,
    user:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){
const{type,payload}=action;
    switch(type)
{
case USER_LOAD:{
    return{
        ...state,
        isAuthenticated:true,
        loading:false,
        user:payload
    }
}

case REGISTER_SUCESS:
case LOGIN_SUCCESS:

    console.log("1")
    localStorage.setItem('token',payload.token);
    return{
        ...state,
        ...payload,
        isAuthenticated:true,
        loading:false
    
};
    case REGISTER_FAIL:
    case AUTH_ERR:
    case LOGIN_FAIL:
   
        
         localStorage.removeItem('token');
        return{
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        };
    case LOGOUT:
        
            localStorage.removeItem('token');
           return{
               ...state,
               token:null,
               isAuthenticated:false,
               loading:false
           };
    default:
        return state;
}
}