import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Banner from '../Banner/Banner';
import './Home.css';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 18)))
    }, []);
    const banner = 'https://www.thesportsdb.com/images/media/league/banner/vs538a1557524860.jpg';
    const name = 'The World\'s Sports League';
    document.title = name;
    return (
        <div className="sports">
            <Banner banner={banner} name={name}></Banner>
            <div className="leagues">
                <div className="row">
                        {
                            leagues.map(league => <League idLeague={league.idLeague} key={league.idLeague}></League>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Home;