import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ListOfCountries from '../ListOfCountries/ListOfCountries';
import Home from '../Home/Home';

function App(props) {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar'>
          <Link to="/" className='little-margin thin-border'>Main page</Link>
          <Link to="/notes" className='little-margin thin-border'>Notes</Link>

        </nav>
        <Routes>
          <Route path='/notes' element={<ListOfCountries/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
