import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <header className="Ghibli-Header">
        <h1>Ghibli Films</h1>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
      </header>
    </Router>
  );
}

export default App;
