import { Component } from 'react';
import { Link } from 'react-router-dom';
import MatchRow from '../components/matchRow';
import matchesAPI from '../services/matchesAPI';
// import matches from '../matches.json';

class matchList extends Component {
    state = {
        matches: [],
        filter: [],
    }

    async componentDidMount() {
        matchesAPI.index()
            .then ( matches => {
                this.setState( {matches: matches.results} )
            })
    }

    sortByMostKills = () => {
        this.setState( prevState => {
            const list = prevState.matches;
            const sortByKills = list => {
                const sorter = function (a,b) {
                   if (parseInt(b.kills) > parseInt(a.kills)) {
                      return 1
                   } else if (parseInt(b.kills) < parseInt(a.kills)) {    
                      return -1;    
                   }    
                      return 0;    
                }
                list.sort(sorter);
            }
            sortByKills(list);
            return {
                list,
                filter: [],
            }
        });
    }

    sortByMostDamage = () => {
        this.setState( prevState => {
            const list = prevState.matches;
            const sortByDamage = list => {
                const sorter = function (a,b) {
                   if (parseInt(b.damage) > parseInt(a.damage)) {
                      return 1
                   } else if (parseInt(b.damage) < parseInt(a.damage)) {    
                      return -1;    
                   }    
                      return 0;    
                }
                list.sort(sorter);
             }
             sortByDamage(list);
             return {
                 list,
                 filter: [],
             }
        });
    }

    // FilterValues = (matchesArr) => {
    //     for( var i = 0; i < matchesArr.length; i++) {
    //         let obj = matchesArr[i];
    //         console.log(obj)
    //     //    //---- Filter Date ----
    //         let date = new Date(obj.date * 1000).toString();
    //         let split = date.split(' ').slice(1, 4).join(' ');
    //         let time = new Date(date).toLocaleTimeString();
    //         let dateAndTime = split + " at " + time;
    //         console.log("dateandtime:", dateAndTime.toString());
    //         obj.date = date
    //         console.log(obj)
    //     }
    //  }

        // sortByMostRecent = () => {
        // this.setState( prevState => {
        //     const list = prevState.matches;
        //     const sortByDate = list => {
        //         const sorter = (a, b) => {
        //             if(a.date > b.date) {
        //                 return 1;
        //             } else if (a.date < b.date) {
        //                 return -1
        //             } return 0
        //         };
        //         list.sort(sorter);
        //         return list;
        //     }
        //     sortByDate(list);
        //     console.log("sorted:", sortByDate(list))
        //     this.FilterValues(list);
        // })
    // }

    setFilter = type => {
        this.setState( () => {
            const filter = this.state.matches.filter( s => s.gameType.includes(type));
            return {filter}
        });
    }

    render () {
        let allMatchesRows;
        if ( this.state.filter.length > 1 ) {
            allMatchesRows = this.state.filter.map( f => <MatchRow key={f.matchId} {...f} />);
        } else {
            allMatchesRows = this.state.matches.map( m => <MatchRow key={m.matchId} {...m} />);
        }

        return (
            <div id="matchList">
                <section className="jumbotron d-flex justify-content-evenly" id="sortFilterBar">
                    <div className="btn-group" role="group">
                        {/* <Link type="button" className="btn btn-outline-primary" to={""} onClick={this.sortByMostRecent}>Most Recent</Link> */}
                        <Link type="button" className="btn sort-buttons" to={""} onClick={this.sortByMostKills}>Most Kills</Link>
                        <Link type="button" className="btn sort-buttons" to={""} onClick={this.sortByMostDamage}>Most Damage</Link>
                    </div>
                    <div className="btn-group" role="group"> 
                        <Link type="button" className="btn filter-buttons" to={""} onClick={(e) => {this.setFilter(e.target.innerText)}}>Solos</Link>
                        <Link type="button" className="btn filter-buttons" to={""} onClick={(e) => {this.setFilter(e.target.innerText)}}>Duos</Link>
                        <Link type="button" className="btn filter-buttons" to={""} onClick={(e) => {this.setFilter(e.target.innerText)}}>Trios</Link>
                        <Link type="button" className="btn filter-buttons" to={""} onClick={(e) => {this.setFilter(e.target.innerText)}}>Quads</Link>
                    </div>
                </section>
                <div className="container">
                    <div className="row row-cols-2">
                        { allMatchesRows }
                    </div>
                </div>
            </div>
        );
    }
}
export default matchList;