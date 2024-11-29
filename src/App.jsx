import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BookList from './components/BookList';
import MasterList from './components/MasterList';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showMasterList, setShowMasterList] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleMainMenuClick = () => {
    setShowMainMenu(true);
    setShowMasterList(false);
  };
  
  const handleBookListClick = () => {
    setShowMainMenu(false);
    setShowMasterList(false);
  };
  
  const handleMasterListClick = () => {
    setShowMainMenu(false);
    setShowMasterList(true);
  };

  // const handleUserLogin = () => {
  // };
  return (
    <div>
      {showMainMenu ? (
        <MainMenu 
          onLoginClick={handleLoginClick} 
          onSignUpClick={handleSignUpClick}
          onBookListClick={handleBookListClick}
          onMasterListClick={handleMasterListClick}
        />
      ) : showMasterList ? (
        <MasterList 
          onLoginClick={handleLoginClick} 
          onSignUpClick={handleSignUpClick}
          onMainMenuClick={handleMainMenuClick}
          onBookListClick={handleBookListClick} 
        />
      ) : (
        <BookList 
          onLoginClick={handleLoginClick} 
          onSignUpClick={handleSignUpClick} 
          onMainMenuClick={handleMainMenuClick}
          onMasterListClick={handleMasterListClick}
        />
      )}

      {showLogin && (
        <LoginForm onClose={handleCloseModal} /> 
      )}

      {showSignUp && (
        <SignUpForm onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

