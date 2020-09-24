import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import React from 'react'
import Menu from './Menu'
import SignUp from './SignUp'


const Routes = () =>{
    return(
        <div>
            
        <Route exact path = {`${process.env.PUBLIC_URL}/`} component = { Login } ></Route>
        <Route exact path = {`${process.env.PUBLIC_URL}/dashboard`} component = { Menu } ></Route>
        <Route exact path = {`${process.env.PUBLIC_URL}/SignUp`} component = { SignUp } ></Route>
        {window.location.pathname != `${process.env.PUBLIC_URL}/` && window.location.pathname != `${process.env.PUBLIC_URL}/dashboard` ? <Menu></Menu> : <Route></Route>}
        {/* {window.location.pathname != `${process.env.PUBLIC_URL}/` && window.location.pathname != `${process.env.PUBLIC_URL}/SignUp` ? <Menu></Menu> : <SignUp></SignUp>} */}
       
    </div>
    )
   
}

export default Routes