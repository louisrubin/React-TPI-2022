import photo from '../assets/yo.jpeg'
import Functions from './Functions'
import './AboutMe.css'

function AboutMe() {
    Functions.setTitleFunction('Sobre Mí')

    return(
        <>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,500;1,300&display=swap');
            </style>
            <div className="about-container">
                <div className="left">
                    <p><b id="p-myname">Hola! Mi nombre es Luis Rubín</b>.<br/>
                        Tengo 20 años y soy de Resistencia, Chaco, Argentina, y aquí va un poco de historia sobre mí :)
                    </p>
                    <p>
                        Crecí en Resistencia y cursé mi etapa de secundaria allí,
                        en el colegio <b>E.E.T. N°24 "Simón de Iriondo"</b>
                        durante los años 2015 a 2020, aunque no me recibí hasta agosto de 2021 jaja.
                    </p>
                    <p>
                        En este colegio hay 2 orientaciones: <br/> 
                        <b>GAO</b> (Gestión Administrativa de las Organizaciones)
                        e <b>IPP</b> (Informática Profesional y Personal),
                        el cual yo fui por la orientación de IPP ya que siempre me gustó la informática.
                    </p>
                    <p>
                        Fue aquí donde conocí la programación ya que en 3er año (2017), luego de haber elegido IPP,
                        tuve la materia "Introducción a la Programación", el cual estudiábamos el lenguaje Pascal, y durante todo ese año no logré entender nada :(. <br/>
                        No fue hasta el año siguiente (dic 2018) que me veía obligado a aprobarla, entonces tuve que practicar mucho y logré aprobar :).
                    </p>
                    <p>
                        Al siguiente año, luego de un año con Pascal, seguía Python, el cual me gustaba bastante por lo fácil que era escribir código comparado con Pascal.<br/>
                        Pero no fue hasta el año siguiente (2019) estudiando Java, que mi cerebro hizo clic luego de que un amigo me explicara algo tan básico que yo no entendía, fue ahí cuando empecé a entender lo que era la programación.
                    </p>
                    <p>
                        Ya en el último año de cursado (2020) conocí el Informatorio Chaco y me inscribí en la primer etapa "Introducción a la Programación" con duración de 1 mes y luego la segunda etapa "Programación y Desarrollo Web"
                    </p>
                    <p>
                        La primera vez que cursé la 2da etapa del Informatorio no logré aprobar, a raíz de eso fue que lo volví a intentar en la siguiente edición.<br/>
                        En esta segunda oportunidad si logré aprobar esta 2da etapa del Informatorio, el cual me permitió ingresar a la etapa N°3 "Especialización en Lenguajes de Programación".
                    </p>
                    <p>
                        En esta 3er etapa del Info hay 3 materias a elegir para cursar durante 4 meses en modo virtual, yo elegí "Testing" y "React".<br/>
                        Ambas materias me encantaron, sobre todo Testing, gracias a uno de los mejores profesores que pude tener jaja, gracias a él conocí las oficinas de Globant Chaco, ya que él trabaja ahí, entonces pidió permiso para que la última clase del curso de Testing sea presencial, y así fue :')<br/>
                        
                    </p>
                    <p>
                        Eso fue un poco de historia sobre mí, podría contar muchas cosas más pero no. Espero les haya gustado este proyecto hecho por mí con ReactJs!
                    </p>
                    <p id="date">02.08.2022</p>
                </div>

                <div className="right">
                    <img src={photo} />
                </div>

            </div>
        </>
    )
}

export default AboutMe;

