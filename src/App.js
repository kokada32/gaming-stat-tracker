import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import matchList from './pages/matchList';
import matchNew from './pages/matchNew';
import nukeImage from './nuke.jpg';

function App() {
  return (
    <div id="app">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between" id="navBar">
          <Link className="navbar-brand" to={"/"}><img src={nukeImage} alt={"nuke"} id="nukeImage"/></Link>
          <h1 id="appTitle">Warzone Stat Tracker</h1>
          <Link className="btn btn-primary btn-lg" to={"/match/new"} id="newMatchButton">New Match</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/match/new" component={matchNew} />
          <Route exact path="/" component={matchList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
