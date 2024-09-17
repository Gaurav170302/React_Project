import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 32.71,
        humidity : 83,
        temp : 28.05,
        temp_min : 28.05,
        temp_max : 28.05,
        weather : "Mist",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App by Gaurav</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}