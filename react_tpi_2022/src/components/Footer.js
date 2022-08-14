import './Footer.css'
import gh from '../assets/github.svg'
import lk from '../assets/linkedin.svg'
import yt from '../assets/youtube.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer>

            <div id="assets">
                <a href='https://www.linkedin.com/in/luisrubin/' target="_blank">
                    <img src={lk}/>
                </a>
                <a href='https://github.com/louisrubin' target="_blank">
                    <img src={gh} />
                </a>
                <a href='https://youtu.be/RDEJdB61sxs' target="_blank">
                    <img src={yt} />
                </a>
            </div>

            <div id='copyright'>
                Rubin Azas Miguel Angel Luis - Informatorio Chaco, Etapa 3 (Jul-Aug 2022) - <Link to='/about' id='a-aboutMe'>Sobre Mí</Link>
            </div>
        </footer>
    )
}

export default Footer;