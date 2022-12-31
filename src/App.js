import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
