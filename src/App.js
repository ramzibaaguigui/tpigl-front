import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/landing';
import Profile from './pages/profile';
<<<<<<< HEAD
import Test from './pages/Test';
=======
import Contact from "./pages/contact";

>>>>>>> merwan

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />   
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
)
}
export default App