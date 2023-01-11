
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import Landing from './pages/Landing';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Test from './pages/Test';
import Test2 from './pages/Test2';
=======
import Landing from './pages/landing';
import Profile from './pages/profile';
>>>>>>> 0ea3a5a71bf645284d67a0d1797fe6faae8c9575

function App() {

  return (

    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
=======
        <Route path='/' element={<Landing />} />   
>>>>>>> 0ea3a5a71bf645284d67a0d1797fe6faae8c9575
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;