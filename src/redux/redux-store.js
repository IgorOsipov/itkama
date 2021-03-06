import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReduces from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let redusers = combineReducers({
    profilePage: profileReduces,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store