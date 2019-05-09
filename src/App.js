import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsConatiner';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'



const App = (props) => {
  return (
      <div>
        <Header />
        <div className='app_wrapper'>
          <Navbar />
          <div className="app_wrapper_content">
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/music' component={Music} />
            <Route path='/news' component={News} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </div>
  );
}



export default App
