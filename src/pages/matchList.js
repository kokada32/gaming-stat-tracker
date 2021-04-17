import MatchRow from '../components/matchRow';

const matchList = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-2">
                    <MatchRow />
                </div>
            </div>
        </div>
    )
}
export default matchList;