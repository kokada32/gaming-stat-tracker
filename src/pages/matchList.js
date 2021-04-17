import { Component } from 'react';
import MatchRow from '../components/matchRow';

class matchList extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row row-cols-2">
                        <MatchRow />
                    </div>
                </div>
            </div>
        );
    }
}
export default matchList;