import './Footer.css'
import gh from '../assets/github.svg'
import lk from '../assets/linkedin.svg'
import yt from '../assets/youtube.svg'

function Footer() {
    return(
        <footer>
            <div id='opt'>

            </div>

            <div id="assets">
                <a href='https://www.linkedin.com/in/luisrubin/' target="_blank">
                    <img src={lk}/>
                </a>
                <a href='https://github.com/louisrubin' target="_blank">
                    <img src={gh} />
                </a>
                <a href='coming-soon' target="_blank">
                    <img src={yt} />
                </a>
            </div>

        </footer>
    )
}
 /*
    
            
            <div id='desc'>
                Esta aplicación web fue realizado por Rubin Azas Miguel A. Luis como proyecto final del cursado
                "Informatorio Chaco: Especialización Etapa 3 - 2022 A"<br/>
                Desarrollado con ReactJS durante el mes de julio de 2022.<br/><br/>
                Más información del proyecto en el repositorio de GitHub.
                
            </div>

 */

export default Footer;