const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messages: [
        {message:'Hi', id:1},
        {message:'How are you my nigga?', id:2}, 
        {message:"I'm fine, working on field of white master, right now", id:3} 
    ],
    
    dialogs: [
        {name:'Dima', id:1},
        {name:'Andrey', id:2}, 
        {name:'Sveta', id:3}, 
        {name:'Sasha', id:4},
        {name:'Victor', id:5},
        {name:'Valera', id:6}
    ],
    newMessageBody:''
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({
                message: body,
                id:7
            })
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state

    }
    
    
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})


export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default dialogsReducer;