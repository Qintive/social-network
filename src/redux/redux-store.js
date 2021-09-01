import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./AuthReducer";
import DialogsReduce from "./DialogsReducer";
import ProfileReduce from "./ProfileReducer";
import FriendsReduce from "./SitebarReducer";
import usersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";


let reducers = combineReducers ({
    profilePage: ProfileReduce,
    messagesPage: DialogsReduce,
    friendPage: FriendsReduce,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store

export default store