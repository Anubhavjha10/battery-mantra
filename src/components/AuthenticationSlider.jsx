import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthenticationSlider = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (e) => {
    if (e) e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div 
      className="auth-slider-container mx-auto" 
      style={{ 
        maxWidth: '550px', 
        overflow: 'hidden', 
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        background: '#fff'
      }}
    >
      <div 
        className="auth-slider-inner-wrapper"
        style={{ 
          display: 'flex', 
          width: '200%', 
          transform: isSignUp ? 'translateX(-50%)' : 'translateX(0%)', 
          transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)' 
        }}
      >
        {/* Left Side: Login Form */}
        <div className="auth-slider-panel" style={{ width: '50%' }}>
          <LoginForm 
            onToggleRegister={handleToggle} 
            onLoginSuccess={onAuthSuccess} 
          />
        </div>

        {/* Right Side: Register Form */}
        <div className="auth-slider-panel" style={{ width: '50%' }}>
          <SignupForm 
            onToggleLogin={handleToggle} 
            onSignupSuccess={onAuthSuccess} 
          />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationSlider;
