import React ,{useContext,useReducer,useEffect} from 'react'
import reducer from "../reducers/user_reducer"
import {FORM_OPEN, USER_REGISTER} from "../actions"
const UserContext = React.createContext()

const userStorage = JSON.parse(localStorage.getItem("users"))
const initialState = {
    users:userStorage
}
export const UserProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const registerAccount = (data)=>{
        dispatch({type:USER_REGISTER,payload:data})
       
    }
    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(state.users))
    },[state.users])
    return (
        <UserContext.Provider value={{...state,registerAccount}}>
            {children}
        </UserContext.Provider>
    )
    
}
export const useUserContext = ()=>{
    return useContext(UserContext)
}
