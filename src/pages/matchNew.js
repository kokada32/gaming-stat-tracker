import MatchForm from '../components/matchForm';

const matchNew = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>New Match</h1>
            </div>
            <div className="row">
                <MatchForm
                    buttonText="Create Match"
                    cancelPath="/"
                />
            </div>
        </div>
    );
}
export default matchNew;