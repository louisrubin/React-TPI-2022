import { useEffect, useState } from 'react'
import './Header.css'
import Functions from './Functions'
import LoadingSpinner from './Spinner'


function Header() {

    const url = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const [weather, setWeather ] = useState(null)
    

    useEffect( () => {
        Functions.fetchWeather(setWeather, url)     // import FetchApi
    }, [])

    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=EB+Garamond:ital,wght@0,800;1,700;1,800&family=Oswald:wght@300;400;700&display=swap');
        </style>
        
        <div id="header">
            <div id='over'>
                <h1 id='main-title'>INFOR-NEWS</h1>
                <a href='#' >ABOUT</a>
            </div>
            
            <div id="header-sub-info">
                    <div id="div-weather">
                        { weather !== null ? (
                        <>
                            <p>{weather.location.name} - {weather.current.temp_c}°C</p>  
                            <img id="weather-icon" src= {weather.current.condition.icon} />
                        </>
                        ) : <p>Loading...</p>}
                    </div>
            </div>
        </div>
        </>
    )
}
export default Header;
