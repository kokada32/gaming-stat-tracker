import { Component } from 'react';
import { Link } from 'react-router-dom';
import MatchRow from '../components/matchRow';
import matches from '../matches.json';

class matchList extends Component {
    state = {
        matches
    }

    sortByMostRecent = () => {
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
    }

    sortByMostKills = () => {
        this.setState( prevState => {
            const list = prevState.matches;
            const sortByKills = list => {
                const sorter = function (a,b) {
                   if (b.kills > a.kills) {
                      return 1
                   } else if (b.kills < a.kills) {    
                      return -1;    
                   }    
                      return 0;    
                }
                list.sort(sorter);
                return list
             }
             sortByKills(list);
        });
    }

    sortByMostDamage = () => {
        this.setState( prevState => {
            const list = prevState.matches;
            const sortByDamage = list => {
                const sorter = function (a,b) {
                   if (b.damage > a.damage) {
                      return 1
                   } else if (b.damage < a.damage) {    
                      return -1;    
                   }    
                      return 0;    
                }
                list.sort(sorter);
                return list
             }
             sortByDamage(list);
        });
    }

    // FilterValues (matchesArr) {
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

    render() {
        const allMatchesRows = matches.map( m => <MatchRow key={m.matchId} {...m} />);
        return (
            <div>
                <section className="jumbotron">
                    <div className="btn-group" role="group">
                        <Link type="button" className="btn btn-outline-primary" to={""} onClick={this.sortByMostRecent}>Most Recent</Link>
                        <Link type="button" className="btn btn-outline-primary" to={""} onClick={this.sortByMostKills}>Most Kills</Link>
                        <Link type="button" className="btn btn-outline-primary" to={""} onClick={this.sortByMostDamage}>Most Damage</Link>
                    </div>
                </section>
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