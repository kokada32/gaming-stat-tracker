import { Component } from 'react';
import { Link } from 'react-router-dom';
import MatchRow from '../components/matchRow';
import matches from '../matches.json';

class matchList extends Component {
    state = {
        matches
    }

    sortByMostRecent = () => {
        // this.setState( prevState => {
        //     prevState.
        // })
    }

    sortByMostKills = () => {
        console.log("most kills");
    }

    sortByMostDamage = () => {
        console.log("most damage");
    }

    render() {
        const allMatchesRows = matches.map( m => <MatchRow key={m.matchId} {...m} />);
        return (
            <div>
                <section className="jumbotron">
                    <Link className="dropdown-item" to={""} onClick={this.sortByMostRecent}>Most Recent</Link>
                    <Link className="dropdown-item" to={""} onClick={this.sortByMostKills}>Most Kills</Link>
                    <Link className="dropdown-item" to={""} onClick={this.sortByMostDamage}>Most Damage</Link>
                </section>
                <div className="container">
                    <div className="row row-cols-2">
                        {allMatchesRows}
                    </div>
                </div>
            </div>
        );
    }
}
export default matchList;