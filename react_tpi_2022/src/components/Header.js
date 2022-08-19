import { useEffect, useState } from 'react'
import './Header.css'
import Functions from './Functions'
import { Link } from 'react-router-dom'


// DISABLED
// const clickToShowAndHide = (divFather, divChildren) => {
//     // FUNCTION TO SHOW AND HIDE INFORMATION IN THIS CASE TO WEATHER AND DOLAR
//     const father = document.getElementById( divFather )
//     const children = document.getElementById( divChildren )

//     children.classList.add('hiden')
    
//     father.addEventListener('click', (e) => {

//         if ( children.classList.contains('hiden') ){
//             children.classList.remove('hiden')
//         } else {
//             children.classList.add('hiden')
//             console.log(e.target);
//         }
            
//     })

// }

const hover = (divFather, divChildren, className) => {
    // FUNCTION TO SHOW AND HIDE INFORMATION IN THIS CASE TO WEATHER AND DOLAR
    const father = document.getElementById( divFather )
    const children = document.getElementById( divChildren )

    father.addEventListener("mouseover", (event) => { children.classList.remove(className) })
    father.addEventListener("mouseout", (event) => { children.classList.add(className) })
}


function Header() {

    const urlWeather = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const urlBlue = 'https://api.bluelytics.com.ar/v2/latest'
    const [weather, setWeather ] = useState(null)
    const [bluePrice, setBlue ] = useState()
    console.log(weather);
    

    // USE EFFECT
    useEffect( () => {
        Functions.fetchWeather(setWeather, urlWeather)     // import FetchApi
        Functions.fetchBlue(setBlue, urlBlue)

        hover('div-main-weather', 'more-info-weather', 'hiden')
        // clickToShowAndHide('div-weather', 'more-info-weather')   // DISABLED
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
                        
                        <div id='div-main-weather' >

                            {   //  IF WEATHER 
                            weather !== null ? (
                            <>
                                <div className='div-sub-info div-weather'>
                                    <img id="weather-icon" src= {weather.current.condition.icon} />                 
                                    <p>{weather.location.name} ( { String(weather.current.temp_c).slice(0,2) }°C )</p>
                                </div>
                            </>
                            )

                            :   // ELSE
                            <div className='div-sub-info div-weather'>
                                <p>Loading...</p>   
                            </div>
                            }

                            <div id='more-info-weather' className='more-info more-info-weather hiden'>
                                {   //  IF WEATHER 
                                weather !== null ? (
                                <>
                                    <img id='img-bg-more-info-wather' src={weather.current.condition.icon} />
                                    <p> <b>{weather.location.region}, {weather.location.name} (hoy)</b> </p>
                                    <p> <b>Temperatura</b> {weather.current.temp_c}°C</p>
                                    <p> <b>Lluvia</b> {weather.current.precip_in}%</p>
                                    <p> <b>Humedad</b> {weather.current.humidity}%</p>
                                    <small style={{fontSize: '10px'}}>Ult. act: {weather.current.last_updated}</small>
                                </>
                                )

                                :   // ELSE
                                    <p>Loading...</p>
                                }
                            </div>

                        </div>

                        <div className='div-sub-info div-dolar'>
                            { 
                            //  IF DOLAR BLUE
                            bluePrice !== undefined ? (
                                <>
                                    <p>Dólar Blue: AR${bluePrice.blue.value_sell}</p>

                                </>
                            )
                            :   // ELSE
                            <p>Loading...</p>  
                            }
                        </div>
            </div>
        </div>
        </>
    )
}
export default Header;
