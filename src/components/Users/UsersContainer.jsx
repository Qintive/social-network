import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleIsFollowingProgress, requestUsers } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsers, getPageSize, getTotalItemsCount, getCurrentPage, getIsFetching, getFolowingInProgress } from '../../redux/users-selectors'


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

        /*userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

                this.props.toggleIsFetching(false)
                this.props.setTotalUserCount(data.totalCount)
            });
            */
    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize)
        /*
              this.props.toggleIsFetching(true)
                this.props.setCurrentPage(pageNumber)
        
                userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                        this.props.setUsers(data.items);
                        this.props.toggleIsFetching(false);
                    });
                    */
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader />
                : null}
            <Users
                totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                folowingInProgress={this.props.folowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        folowingInProgress: getFolowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUserCount, toggleIsFetching,
    toggleIsFollowingProgress, requestUsers
})(UsersContainer);