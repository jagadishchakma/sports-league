import React, { useEffect, useState } from 'react';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const League = (props) => {
    const id = props.idLeague;
    const [leagueData, setLeagueData] = useState({});
    const {strBadge, strLeague, strSport} = leagueData;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueData(data.leagues[0]))
    }, [id]);

    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="card-header">
                    <img src={strBadge} alt={strLeague} width="70%"/>
                </div>
                <div className="card-body">
                    <h2>{strLeague}</h2>
                    <p>Sports Type: {strSport}</p>
                </div>
                <div className="card-footer">
                    <Link to={ `/league/${id} `}>
                        <button className="btn btn-primary">
                            See Details <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default League;