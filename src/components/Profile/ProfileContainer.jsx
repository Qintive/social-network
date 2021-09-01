import React from 'react';
import { connect } from 'react-redux';
import {setUsersProfile, getProfile, getStatus, updateStatus} from '../../redux/ProfileReducer'
import Profile from './Profile'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14376
           
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)


        /*userAPI.getProfile(userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            });*/
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.componentDidMount()
        }
    }
    render() {

        return (
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
        updateStatus={this.props.updateStatus} users={this.props.users}/>
        
        )}        
}



let  mapStateToProps = (state) => {
    return{
profile: state.profilePage.profile,
status: state.profilePage.status,
users: state.usersPage.users
}
}

export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)