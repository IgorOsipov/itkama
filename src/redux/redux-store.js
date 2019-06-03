import { createStore, combineReducers } from "redux"
import profileReduces from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReduser from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";

let redusers = combineReducers({
    profilePage: profileReduces,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(redusers)
window.store = store;

export default store