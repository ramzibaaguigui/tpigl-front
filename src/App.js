
import './App.css';
import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/landing';
import Navbar from './components/sharedComponents/Navbar';
import Profile from './pages/Profile'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <> 
                <Navbar/>
                <Landing/>
              </>
              }>
          </Route>
          <Route 
            path="/profile" 
            element={
              <> 
                <Navbar/>
                <Profile/>
              </>
              }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;