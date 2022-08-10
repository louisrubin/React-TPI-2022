import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Functions from "./Functions"
import './BuscarPage.css'
import searchIcon from '../assets/search-icon.svg'


function Home() {
    Functions.setTitleFunction('INFOR-NEWS')

    const navigate = useNavigate()

    useEffect( () => {
        Functions.buscarFormListener( 'buscar-form', 'buscar-input', 'buscar-button', 'span-Alert', 'buscar-icon' , navigate)
    })

    return(
        <>
            <div className="home-container" >
                <form id="buscar-form">

                    <label>BUSCAR NOTICIAS</label>
                    <div>
                        <input id='buscar-input' type='search' name="buscar" autoFocus />
                        <button id="buscar-button" className="button-styles" type="submit">
                            <img id="buscar-icon" className="icon-styles" src={searchIcon} alt="Buscar"  />
                        </button>
                    </div>
                    <span id="span-Alert">Mínimo de 3 caracteres</span>
                </form>
            </div>

        </>
    )
}


export default Home;