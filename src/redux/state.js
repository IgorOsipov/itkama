import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _state: {
        profilePage:{
            posts: [
                {message:'Hi, how are you?', id:1},
                {message:"It's my first Post", id:2}
            ],
            newPostText: ''
        },
    
        dialogsPage:{
            messages: [
                {message:'Hi', id:1},
                {message:'How are you my nigga?', id:2}, 
                {message:"I'm fine, working on field of white master, right now", id:3} 
            ],
            newMessageBody: '',
            dialogs: [
                {name:'Dima', id:1},
                {name:'Andrey', id:2}, 
                {name:'Sveta', id:3}, 
                {name:'Sasha', id:4},
                {name:'Victor', id:5},
                {name:'Valera', id:6}
            ]
        },
        sidebar:{} 
    },

    _callSubscriber()  {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        
        this._callSubscriber(this._state)

        
    }
}






export default store