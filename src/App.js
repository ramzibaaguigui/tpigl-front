
import './App.css';
import Login from './pages/Login'
import { ReactDOM } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Test from './pages/Test';
import Test2 from './pages/Test2';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;