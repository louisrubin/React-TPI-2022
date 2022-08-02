import photo from '../assets/yo.jpeg'
import Functions from './Functions'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        position: 'relative',
        top: '130px',
        left: '10%',
        width: '80%',
        boxSizing: 'border-box'
    },
    image: {
        height: '800px',
        width: '400px',
    },
    text: {
        fontFamily: 'Cairo',
        fontSize: '1.4em',
        maxWidth: '97%',
        margin: '0px',
        padding: '15px 0px',
    }
}

function AboutMe() {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;500&display=swap');
    </style>
    Functions.setTitleFunction('Sobre Mí')
    return(
        <div className="about-container" style={styles.container}>

            <div className="left">
                <p style={styles.text}><b>Hola! Mi nombre es Luis Rubín</b>.<br/>
                    Tengo 20 años y soy de Resistencia, Chaco, Argentina.
                </p>
                <p style={styles.text}>
                    Crecí en Resistencia y cursé mi etapa de secundaria<br/>
                    en el colegio <b>E.E.T. N°24 "Simón de Iriondo"</b> <br/>
                    durante los años 2015 a 2020, aunque no me recibí hasta agosto de 2021 jaja.
                </p>
                <p style={styles.text}>
                    En este colegio hay 2 orientaciones: <br/> 
                    <b>GAO</b> (Gestión Administrativa de las Organizaciones)<br/>
                    e <b>IPP</b> (Informática Profesional y Personal)<br/>
                    El cual yo fui por la orientación de IPP ya que siempre me gustó la informática.
                </p>
                <p style={styles.text}>
                    Fue aquí donde conocí la programación ya que en 3er año (2017), luego de haber elegido IPP,
                    teniamos la materia "Introducción a la Programación", el cual estudiábamos el lenguaje Pascal, y durante todo ese año no logré entender nada :(. <br/>
                    No fue hasta el año siguiente (dic 2018) que me veía obligado a aprobarla, entonces tuve que practicar mucho y lo logré jaja.
                </p>
                <p style={styles.text}>
                    El año siguiente luego del lenguaje Pascal, seguía Python, el cual me gustaba bastante por lo fácil que era escribir código comparado con Pascal.<br/>
                    Pero no fue hasta el año siguiente (2019) estudiando Java, que mi cerebro hizo clic luego de que un amigo me explicara algo tan básico que yo no entendía, fue ahí cuando empecé a entender lo que era la programación.
                </p>
                <p style={styles.text}>
                    No fue hasta el último año de cursado (2020) que conocí el Informatorio Chaco y me inscribí en la primer etapa "Introducción a la Programación" con duración de 1 mes y luego la segunda etapa "Programación y Desarrollo Web"
                </p>
                <p style={styles.text}>
                    La primera vez que cursé la segunda etapa del Informatorio no logré aprobar, a raíz de eso fue que lo volví a intentar en la siguiente edición.<br/>
                    En esta segunda oportunidad si logré aprobar esta 2da etapa del Informatorio, el cual me permitió ingresar a la etapa N°3 "Especialización en Lenguajes de Programación".
                </p>
                <p style={styles.text}>
                    a
                </p>
            </div>

            <div className="right">
                <img src={photo} style={styles.image} />
            </div>

        </div>
    )
}

export default AboutMe;

