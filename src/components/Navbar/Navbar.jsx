import React from 'react'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Navbar.module.css';


const Navbar = (props) => {
  

  let friendElement = props.state.map(f => <Friends name={f.name} id={f.id} />)

  return <nav className={classes.nav}>


    <div className={classes.item}>
      <p />
      <NavLink to="/profile" activeClassName={classes.activLinks}>Profile</NavLink>
    </div>
    <p />
    <div className={classes.item}>
      <NavLink to="dialogs" activeClassName={classes.activLinks}>Messages</NavLink>
    </div>
    <p />
    <div className={classes.item}>
      <NavLink to='news' activeClassName={classes.activLinks}>News</NavLink>
    </div>
    <p />
    <div className={classes.item}>
      <NavLink to='music' activeClassName={classes.activLinks}>Music</NavLink>
    </div>
    <p />
    <div className={classes.item}>
      <NavLink to='settings' activeClassName={classes.activLinks}>Settings</NavLink>
    </div>
    <p />
    <div className={classes.item}>
      <NavLink to='users' activeClassName={classes.activLinks}>Users</NavLink>
    </div>
    <div className={classes.transition}></div>
    <div className={classes.friendItem}>
      Friends:
    </div>
    <p></p>
    {friendElement}
  </nav>
}
export default Navbar;