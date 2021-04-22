import { Link } from 'react-router-dom';
import nukeImage from '../nuke.jpg';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between" id="navBar">
            <Link className="navbar-brand" to={"/"}><img src={nukeImage} alt={"nuke"} id="nukeImage"/></Link>
            <h1 id="appTitle">Warzone Stat Tracker</h1>
            <Link className="btn btn-primary btn-lg" to={"/match/new"} id="newMatchButton">New Match</Link>
        </nav>
    );
}
export default navbar;