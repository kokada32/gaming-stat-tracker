import { Component } from 'react';
import MatchRow from '../components/matchRow';
import matches from '../matches.json';

class matchList extends Component {
    state = {
        matches
    }
    render() {
        const allMatchesRows = matches.map( m => <MatchRow key={m.matchId} {...m} />);
        return (
            <div>
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