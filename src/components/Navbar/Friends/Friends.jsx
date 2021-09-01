import React from 'react'
import classes from './Friends.module.css';


const Friends = (props) => {

    return (
        <div className={classes.friends}>
            <div className={classes.item}>
                <img src='https://i.ytimg.com/vi/pifaQVt6pos/maxresdefault.jpg'></img>
                <div>
                    {props.name}
                </div>
            </div>
        </div>
    )

}

export default Friends;