import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import matchList from './pages/matchList';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={""}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="dropdown-item" to={""}>Most Recent</Link>
            <Link className="dropdown-item" to={""}>Most Kills</Link>
            <Link className="dropdown-item" to={""}>Most Damage</Link>
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={matchList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
