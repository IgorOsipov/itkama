import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
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
    <BrowserRouter>
      <Header />
      <div className='app_wrapper'>
        <Navbar />
        <div className="app_wrapper_content">
          <Route path='/profile' render={() => <Profile store={props.store}/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App
