import React ,{useContext,useReducer,useEffect} from 'react'
import reducer from "../reducers/user_reducer"
import {FORM_OPEN, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../actions"
const UserContext = React.createContext()

const userStorage = JSON.parse(localStorage.getItem("users"))
const loginStatus =JSON.parse(localStorage.getItem("loginStatus"))
console.log(loginStatus)
const initialState = {
    users:userStorage,
    isLogin: loginStatus
}
export const UserProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const registerAccount = (data)=>{
        dispatch({type:USER_REGISTER,payload:data})
       
    }
    const login = ()=>{
        dispatch({type:USER_LOGIN})
    }
    const logout = ()=>{
        dispatch({type:USER_LOGOUT})
    }
    useEffect(()=>{
        localStorage.setItem("loginStatus",state.isLogin)
    },[state.isLogin])
    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(state.users))
    },[state.users])
    return (
        <UserContext.Provider value={{...state,registerAccount,login,logout}}>
            {children}
        </UserContext.Provider>
    )
    
}
export const useUserContext = ()=>{
    return useContext(UserContext)
}
