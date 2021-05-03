# The World's Sports League
![sports league](https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png)

## Features: 

* Uses The World's Sports League API
* And League Details Information
* You will get more information about sports league


[See Live Preveiw Website](https://6048c62877b744f6fc3b568d--zealous-wiles-9872a0.netlify.app/)

## My Code
---

```javascript
 const [league, setLeague] = useState({});
    const {id} = useParams();
    const { strBanner, strLeague, strLogo, strDescriptionEN, strDescriptionFR, strCountry, strSport, strGender, intFormedYear} = league;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [id]);
    document.title = strLeague;
```
