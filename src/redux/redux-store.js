import { createStore, combineReducers } from "redux"
import profileReduces from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReduser from "./sidebarReducer"
import usersReducer from "./usersReducer"

let redusers = combineReducers({
    profilePage: profileReduces,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReducer
})

let store = createStore(redusers)

export default store