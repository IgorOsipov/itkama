import { createStore, combineReducers } from "redux"
import profileReduces from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReduser from "./sidebarReducer"

let redusers = combineReducers({
    profilePage: profileReduces,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser
})

let store = createStore(redusers)

export default store