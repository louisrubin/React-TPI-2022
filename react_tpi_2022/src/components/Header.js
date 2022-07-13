import gh from '../assets/github.svg'
import lk from '../assets/linkedin.svg'
import yt from '../assets/youtube.svg'
import './Header-css.css'

function Header() {
    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=EB+Garamond:ital,wght@0,800;1,700;1,800&family=Oswald:wght@300;400;700&display=swap');
        </style>
        
        <div id="header">
            <h1>INFOR-NOTICIAS</h1>
            <div id="header-sub-info">
                <p>Resistencia - 12°C - Dolar Blue: $297</p>
            
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
