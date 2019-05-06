import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'


const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <div className='app_wrapper'>
        <Navbar />
        <div className="app_wrapper_content">
          <Route path='/profile' render={() => <Profile 
            profilePage={props.state.profilePage} 
            addPost = {props.addPost} 
            updateNewPostText = {props.updateNewPostText}/>} />
          <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage}/>} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App
