import gh from '../assets/github.svg'
import lk from '../assets/linkedin.svg'
import yt from '../assets/youtube.svg'
import './Header-css.css'

function Header() {
    return(
        <>
            <div id="main">
                <h1>INFOR-NOTICIAS</h1>
                <div>Resistencia - 12°C - Dolar Blue: $287</div>
                
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
        </>
    )
}
export default Header;
