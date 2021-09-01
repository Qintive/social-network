import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import UsersСontainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializedApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends Component {
  componentDidMount() {
    this.props.initializedApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={this.props.state.friendPage.friendsData} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => {
            return <React.Suspense fallback={<div>LOADING</div>}>
              <DialogsContainer />
            </React.Suspense>
          }} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/news' component={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersСontainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);
