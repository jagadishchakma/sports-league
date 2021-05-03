import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import './LeagueDetails.css';
import male from '../../img/photo/male.png';
import famale from '../../img/photo/female.png'
import facebook from '../../img/Icon/Facebook.png';
import youtube from '../../img/Icon/YouTube.png';
import twiter from '../../img/Icon/Twitter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faThermometerEmpty, faFlag,  faVolleyballBall, faMarsStroke } from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const [league, setLeague] = useState({});
    const {id} = useParams();
    const { strBanner, strFacebook, strTwitter, strYoutube, strLeague, strLogo, strDescriptionEN, strDescriptionFR, strCountry, strSport, strGender, intFormedYear} = league;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [id]);
    document.title = strLeague;
    return (
        <div>
            <Banner banner={strBanner}  logo={strLogo}/>
            <div className="league-details">
                <div className="league-info">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="info">
                                <h2>{strLeague}</h2>
                                <p><FontAwesomeIcon icon={faThermometerEmpty}></FontAwesomeIcon> Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={faVolleyballBall}></FontAwesomeIcon> Sport Type: {strSport}</p>
                                <p><FontAwesomeIcon icon={faMarsStroke}></FontAwesomeIcon> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-media">
                                <img src={strGender === 'Male' ? male : famale} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="league-description">
                    <h3>Description(English)</h3>
                    <p>
                        {strDescriptionEN}
                    </p>
                    <h3>Description(France)</h3>
                    <p>
                        {strDescriptionFR}
                    </p>
                </div>
                <div className="social-link">
                    <ul>
                        <li><a href={`https://­${strFacebook}`} target="_blank" rel="noreferrer"><img src={facebook} alt=""/></a></li>
                        <li><a href={`https://­${strYoutube}`} target="_blank" rel="noreferrer"><img src={youtube} alt=""/></a></li>
                        <li><a href={`https://­${strTwitter}`} target="_blank" rel="noreferrer"><img src={twiter} alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;