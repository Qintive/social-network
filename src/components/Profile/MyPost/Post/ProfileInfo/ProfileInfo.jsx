import React from 'react'
import Preloader from '../../../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return (
      <Preloader />
    )
  }

  return <div>
    <div className={classes.poster}>
      <img src='http://ngosbs.info/wp-content/uploads/2018/02/sunset-1260x240.jpg' />
    </div>
    <div className={classes.poster} />
    <div className={classes.avatar}>
      <img src={props.image} />
    </div>
    <div>
      <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} putPhoto={props.putPhoto} />
    </div>
  </div>
}
export default ProfileInfo;