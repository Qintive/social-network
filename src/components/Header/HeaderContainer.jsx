import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header/Header'
import { setAuthUserData, logout } from '../../redux/AuthReducer'



class HeaderContainer extends React.Component {

    componentDidMount() {

       /*userAPI.auth ().then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    this.props.setAuthUserData (id, email, login)
                }
            });*/
    }

    render() {
    
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.userId

    }
}

export default connect (mapStateToProps, {setAuthUserData, logout})(HeaderContainer);