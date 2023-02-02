import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Search from './pages/Search';
import Offres from './pages/Offres';
function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />   
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/offres' element={<Offres/>} />
      </Routes>
    </Router>
)
}
export default App