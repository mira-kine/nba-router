import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Welcome from './views/Welcome/Welcome';
import GhibliDetail from './views/GhibliDetail/GhibliDetail';
import background from './assets/background.jpg';
function App() {
  return (
    <div className="bck" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <header className="Ghibli-Header">
          <h1>Ghibli Films</h1>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/films">Movie List</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/films">
              <Home />
            </Route>
            <Route path="/films/:filmId">
              <GhibliDetail />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
