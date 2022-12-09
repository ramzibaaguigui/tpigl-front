
import './App.css';
import Login from './pages/login'
import { ReactDOM } from 'react';
import { Route,  Router,  Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/landing';

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Landing/> } />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;