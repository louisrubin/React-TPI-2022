import { useEffect, useState } from 'react'
import './Header.css'
import Function from './Functions'


function Header() {

    const url = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const [Resp, setResponse ] = useState(null)
    

    useEffect( () => {
        Function.fetchApi(setResponse, url)     // import FetchApi
    }, [])

    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=EB+Garamond:ital,wght@0,800;1,700;1,800&family=Oswald:wght@300;400;700&display=swap');
        </style>
        
        <div id="header">
            <div id='over'>
                <h1 id='main-title'>INFOR-NOTICIAS</h1>
                <a href='#' >ABOUT</a>
            </div>
            
            <div id="header-sub-info">
                    { Resp !==  null ? (
                        <div id="div-weather">
                            <p style= {{display: "inline"}} >{Resp.location.name} - {Resp.current.temp_c}°C</p>  
                            <img id="weather-icon" src= {Resp.current.condition.icon} />
                        </div>
                    ) : ('Cargando') }
            </div>
        </div>
        </>
    )
}
export default Header;
