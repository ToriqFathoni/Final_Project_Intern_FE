import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BookList from './components/BookList';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(true);

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
  };

  const handleBookListClick = () => {
    setShowMainMenu(false);
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
        />
      ) : (
        <BookList 
          onLoginClick={handleLoginClick} 
          onSignUpClick={handleSignUpClick} 
          onMainMenuClick={handleMainMenuClick}
        />
      )},
      {showLogin && (
        <LoginForm 
          onClose={handleCloseModal}
        /> 
      )}
      {showSignUp && (
        <SignUpForm
          onClose={handleCloseModal}
        />)}
    </div>
  );
}

export default App;

