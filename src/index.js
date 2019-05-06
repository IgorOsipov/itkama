import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {message:'Hi, how are you?', id:1},
    {message:"It's my first Post", id:2}
]

let dialogsData = [
    {name:'Dima', id:1},
    {name:'Andrey', id:2}, 
    {name:'Sveta', id:3}, 
    {name:'Sasha', id:4},
    {name:'Victor', id:5},
    {name:'Valera', id:6}
]

let messagesData = [
    {message:'Hi', id:1},
    {message:'How are you my nigga?', id:2}, 
    {message:"I'm fine, working on white masters field right now", id:3} 
]

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
