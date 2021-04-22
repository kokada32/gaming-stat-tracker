import {Link} from 'react-router-dom';

const matchForm = ({match, setMatch, buttonText, cancelPath, callApi}) => {

    const handleChange = e => {
        setMatch( prevMatch => ({
            ...prevMatch,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async e => {
        // e.preventDefault();
        // const data = await callApi();
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                <span>Game Type</span>
                <input
                    className="form-control"
                    name="gameType"
                    defaultValue={""}
                    placeholder="Solos, Duos, Trios, Quads"
                    onChange={handleChange}
                />
                </label>
            </div>
            <div className="form-group">
                <label>
                <span>Kills</span>
                <input
                    className="form-control"
                    name="kills"
                    type="number"
                    defaultValue={0}
                    placeholder="Number"
                    onChange={handleChange}
                />
                </label>
            </div>
            <div className="form-group">
                <label>
                <span>Deaths</span>
                <input
                    className="form-control"
                    type="number"
                    name="deaths"
                    defaultValue={0}
                    onChange={handleChange}
                />
                </label>
            </div>
            <div className="form-group">
                <label>
                <span>Damage</span>
                <input
                    className="form-control"
                    name="damage"
                    type="number"
                    defaultValue={0}
                    onChange={handleChange}
                />
                </label>
            </div>
            <div className="form-group">
                <label>
                <span>Date</span>
                <input
                    className="form-control"
                    name="date"
                    defaultValue={""}
                    onChange={handleChange}
                />
                </label>
            </div>
            <div className="form-group">
                <label>
                <span>Placement</span>
                <input
                    className="form-control"
                    name="placement"
                    defaultValue={""}
                    onChange={handleChange}
                />
                </label>
            </div>
            <button className="btn btn-primary">{buttonText}</button>
            <Link className="btn btn-link" to={cancelPath}>Cancel</Link>
        </form>
    </div>
    );
}

export default matchForm;