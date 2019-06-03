import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsConatiner';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { AppWrapper, AppWrapperContent } from './AppStyles';
import NavbarContainer from './components/Navbar/NavbarContainer';



const App = () => {
  return (
    <AppWrapper>
      <NavbarContainer />
      <AppWrapperContent >
        <Route path='/profile/:id?' component={ProfileContainer} />
        <Route path='/dialogs' component={DialogsContainer} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/users' component={UsersContainer} />
        <Route path='/settings' component={Settings} />
      </AppWrapperContent>
    </AppWrapper>
  );
}



export default App
