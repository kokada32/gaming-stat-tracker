const matchRow = ({gameType, kills, deaths, damage, date, placement}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">{gameType}</div>
                    <div className="card-text">Kills: {kills}</div>
                    <div className="card-text">Deaths: {deaths}</div>
                    <div className="card-text">Damage: {damage}</div>
                    <div className="card-text">Date: {date}</div>
                    <div className="card-text">Placement: {placement}</div>
                </div>
            </div>
        </div>
    );
}
export default matchRow;