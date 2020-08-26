const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messages: [
        {message:'Hi', id:1},
        {message:'How are you my friend?', id:2}, 
        {message:"I'm fine, working on field, right now", id:3} 
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
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return  {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        message: body,
                        id:7
                    }
                ],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            }
        }
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