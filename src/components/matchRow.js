const matchRow = ({gameType, kills, deaths, damage, date, placement}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body matchlist-grid-container">
                    <div className="grid-item grid-gameType">{gameType}</div>
                    <div className="grid-item grid-placement">{placement}</div>
                    <div className="grid-item grid-date">{date}</div>
                    <div className="grid-space"></div>
                    <div className="grid-item grid-kills-label">Kills:</div> 
                    <div className="grid-item grid-kills">{kills}</div>
                    <div className="grid-item grid-deaths-label">Deaths:</div>
                    <div className="grid-item grid-deaths">{deaths}</div>
                    <div className="grid-item grid-damage-label">Damage:</div>
                    <div className="grid-item grid-damage">{damage}</div>
                </div>
            </div>
        </div>
    );
}
export default matchRow;