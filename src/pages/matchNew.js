import { useState } from 'react';
import MatchForm from '../components/matchForm';
import MatchesAPI from '../services/matchesAPI';

const MatchNew = () => {
    const [match, setMatch] = useState({})
    return (
        <div className="container">
            <div className="row">
                <h1>New Match</h1>
            </div>
            <div className="row">
                <MatchForm
                    match={match}
                    setMatch={setMatch}
                    callApi={() => MatchesAPI.create(this.state.match) }
                    buttonText="Create Match"
                    cancelPath="/"
                />
            </div>
        </div>
    );
}
export default MatchNew;