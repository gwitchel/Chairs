import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Authenticate from '../components/Authenticate';
import App from '../App';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route exact path="/auth" element={<Authenticate/>} />
        <Route exact path="/me" element={<></>} />
        <Route exact path="/friends" element={<></>} />
        <Route exact path="/settings" element={<></>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;