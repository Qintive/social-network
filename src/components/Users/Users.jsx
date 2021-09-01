import React from 'react'
import '../Users/Users.module.css'
import userPhoto from '../../assets/user2.png'
import classes from '../Users/Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';


let Users = (props) => {

    return <div>
       <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.folowingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}> Unfollowed </button>



                            : <button disabled={props.folowingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}> Followed </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)}
    </div>

}

export default Users;