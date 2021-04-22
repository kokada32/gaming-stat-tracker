import { useState } from 'react';
import MatchForm from '../components/matchForm';

const MatchNew = () => {
    const [match, setMatch] = useState({})
    return (
        <div className="container" id="newMatchContainer">
            <div className="row">
                <h1 id="newMatchTitle">New Match</h1>
            </div>
            <div className="row">
                <MatchForm
                    match={match}
                    setMatch={setMatch}
                    buttonText="Create Match"
                    cancelPath="/"
                />
            </div>
        </div>
    );
}
export default MatchNew;