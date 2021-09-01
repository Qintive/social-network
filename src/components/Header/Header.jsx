import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://avatars.mds.yandex.net/get-pdb/2505111/1d0d4722-6e89-4521-878b-6bff605f1651/s1200' />
        <div className= {classes.header}>
            {props.isAuth 
                ?<div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}> LOGIN </NavLink>}
            {props.isAuth ? props.email
                : <NavLink to={'/login'}> LOGIN </NavLink>}
            {props.isAuth ? props.id
                : <NavLink to={'/login'}> LOGIN </NavLink>}
        </div>
        
    </header>
}
export default Header;