import { useEffect, useState } from 'react'
import searchWhite from '../assets/search1.svg'
import searchBlack from '../assets/search2.svg'
import './Header.css'


function Header() {

    const url = 'http://api.weatherapi.com/v1/current.json?key=7d126238b051441097794649221407&q=Resistencia&aqi=no'
    const [Resp, setResponse ] = useState(' ')
    
    const fetchApi = async () => {
        // WEATHER API
            const response = await fetch(url)
            const responseJSON = await response.json()

            await setResponse(responseJSON)

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
                <div>
                    <label>Buscar Noticia</label>
                    <input />
                    <img src={searchWhite} />
                    <img src={searchBlack} />
                </div>
                <a href=''>ABOUT</a>
            </div>
            
            <div id="header-sub-info">
                <div id="div-weather"></div>
            </div>
        </div>
        </>
    )
}
export default Header;
