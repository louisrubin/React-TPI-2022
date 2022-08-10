import { useEffect, useState } from 'react'
import './Header.css'
import Functions from './Functions'
import { Link } from 'react-router-dom'




function Header() {

    const urlWeather = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const urlBlue = 'https://api.bluelytics.com.ar/v2/latest'
    const [weather, setWeather ] = useState(null)
    const [bluePrice, setBlue ] = useState()
    

    // USE EFFECT
    useEffect( () => {
        Functions.fetchWeather(setWeather, urlWeather)     // import FetchApi
        Functions.fetchBlue(setBlue, urlBlue)
    }, [])
    
    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=EB+Garamond:ital,wght@0,800;1,700;1,800&family=Oswald:wght@300;400;700&display=swap');
        </style>
        
        <div id="header">
            <div id='over'>
                <Link to='/' id='main-title'>
                    INFOR-NEWS
                </Link>
            </div>
            
            <div id="header-sub-info">
                    <div className="div-weather">
                        
                        { 
                        //  IF WEATHER
                        weather !== null ? (
                        <>
                            <img id="weather-icon" src= {weather.current.condition.icon} />                 
                            <p>{weather.location.name} - { String(weather.current.temp_c).slice(0,2) }°C</p>       
                        </>     ) 

                        :   // ELSE
                        <p>Loading...</p>   
                        }
                        

                        { 
                        //  IF DOLAR BLUE
                        bluePrice !== undefined ? (
                            <p style={{marginLeft: '25px'}}>Dólar Blue: AR${bluePrice.blue.value_sell}</p>
                        )
                        :   // ELSE
                        <p style={{marginLeft: '25px'}}>Loading...</p>  
                        }
                    </div>
            </div>
        </div>
        </>
    )
}
export default Header;
