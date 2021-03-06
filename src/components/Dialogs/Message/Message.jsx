import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    )
}

export default Message;