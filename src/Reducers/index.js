import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import ChangePasswordReducer from './ChangePasswordReducer'
import SignupReducer from './SignupReducer'

const reducer = combineReducers ({
    login:  LoginReducer,
    
    ChngPaswrd : ChangePasswordReducer,
    
    Sign : SignupReducer
})

export default reducer