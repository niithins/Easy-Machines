import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './login-page/LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate authentication process
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/*" element={
            isAuthenticated ? <Home /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
