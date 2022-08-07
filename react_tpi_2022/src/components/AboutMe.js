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
                    <p><b id="p-myname">Hola! Mi nombre es Luis Rubín</b>.</p>
                    <p>Tengo 20 años y soy de Resistencia, Chaco, Argentina, y aquí va un poco sobre mí :)
                        Crecí en Resistencia y cursé mi etapa de secundaria allí,
                        en el colegio <b>E.E.T. N°24 "Simón de Iriondo"</b>
                        , una de las secundarias técnicas más importante de Resistencia.
                        En este colegio hay dos orientaciones a elegir llegado a tercer año de cursado, 
                        el cual yo fui por la orientación de Informática ya que siempre me gustó todo lo relacionado con computadoras desde niño.
                        Fue aquí donde conocí la programación, luego de haber elegido esta orientación, donde teniamos la materia 
                        "Introducción a la Programación" con el lenguaje Pascal. 
                        Al siguiente año, estudiábamos Python, el cual me gustaba mucho por lo fácil que era escribir código comparado con Pascal, 
                        ya que en Pascal siempre me generaba confuciones.
                        Ya en el último año de cursado conocí el Informatorio Chaco y me inscribí en la primer etapa "Introducción a la Programación" con duración 
                        de un mes y luego a la segunda etapa "Programación y Desarrollo Web", ambas en modalidad virtual.
                        La primera vez que cursé la segunda etapa del Informatorio no logré aprobar, a raíz de eso fue que lo volví a intentar en la siguiente edición.
                        En esta segunda oportunidad si logré aprobarla, el cual me permitió ingresar a la etapa número tres "Especialización en Lenguajes de Programación".
                        Ya en esta nueva edición decidí cursar "Testing" y "React", dos de las tres opciones a elegir, dejando de lado la opción de Inglés.
                        Ambas materias me encantaron, sobre todo Testing, gracias a uno de los mejores profesores que pude tener, gracias a él conocí las oficinas de Globant Chaco, ya que él trabaja ahí
                        , entonces pidió permiso para que la última clase del curso de Testing sea presencial, y así fue :')
                    </p>
                    
                    <p>
                        Eso fue un poco sobre mí, espero que les haya gustado este proyecto hecho por mí con ReactJs!
                    </p>
                    <p id="date">07.08.2022</p>
                </div>

                <div className="right">
                    <img src={photo} />
                </div>

            </div>
        </>
    )
}

export default AboutMe;

