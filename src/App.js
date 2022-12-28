import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Contact from "./pages/contact";

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />   
        <Route path='/profile' element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;