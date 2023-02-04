import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Search from './pages/Search';
import Offres from './pages/Offres';
import Detail from './pages/Detail'
import AddProduct from './pages/AddProduct'
function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />   
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/offres' element={<Offres/>} />
        <Route path='/post/:postId' element={<Detail/>} />
        <Route path='/addProduct' element={<AddProduct/> }/>
      </Routes>
    </Router>
)
}
export default App