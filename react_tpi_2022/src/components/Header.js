import { useEffect, useState } from 'react'
import gh from '../assets/github.svg'
import lk from '../assets/linkedin.svg'
import yt from '../assets/youtube.svg'
import './Header-css.css'


function Header() {

    const url = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const [Resp, setResponse ] = useState(' ')
    
    const fetchApi = async () => {
        // WEATHER API
            const response = await fetch(url)
            const responseJSON = await response.json()

            await setResponse(responseJSON)

            console.log('RESP ',Resp)
            const spanInfo = document.getElementById("div-weather")
            spanInfo.innerHTML = `<p style="display: inline;">${Resp.location.name} - ${Resp.current.temp_c}°C</p>  <img id="weather-icon" src=${Resp.current.condition.icon} />`
    }

    useEffect( () => {
         fetchApi()
    }, [Resp === ' '] )     // una vez que se le asigna un valor a Resp ya no se vuelve a ejecutar fetchApi()


    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=EB+Garamond:ital,wght@0,800;1,700;1,800&family=Oswald:wght@300;400;700&display=swap');
        </style>
        
        <div id="header">
            <div id='over'>
                <h1>INFOR-NOTICIAS</h1>
                <a href=''>ABOUT</a>
            </div>
            
            <div id="header-sub-info">
                <div id="div-weather"></div>
            
                <div id="assets">
                    <a href='https://www.linkedin.com/in/luisrubin/' placeholder='Linkedin' target="_blank">
                        <img src={lk}/>
                    </a>
                    <a href='https://github.com/louisrubin' placeholder='GitHub' target="_blank">
                        <img src={gh} />
                    </a>
                    <a href='coming-soon' placeholder='YouTube Video' target="_blank">
                        <img src={yt} />
                    </a>
                </div>
            
            </div>
        </div>
        </>
    )
}
export default Header;
