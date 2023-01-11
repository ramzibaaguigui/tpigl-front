
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;