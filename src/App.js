
import './App.css';

import Login from './pages/Login'
import { ReactDOM } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />      
        <Route path='/profile' element={<Profile />} />
        
      </Routes>
    </Router>
  );
}

export default App;