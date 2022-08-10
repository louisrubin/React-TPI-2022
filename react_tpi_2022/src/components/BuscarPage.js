import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Functions from "./Functions"
import './BuscarPage.css'
import searchIcon from '../assets/search-icon.svg'


function Home() {
    Functions.setTitleFunction('INFOR-NEWS')

    const navigate = useNavigate()

    useEffect( () => {
        Functions.buscarFormListener( navigate )
    })

    return(
        <>
            <div className="home-container" >
                <form id="buscar-form">

                    <label>BUSCAR NOTICIAS</label>
                    <div>
                        <input id='buscar-input' type='search' name="buscar" autoFocus />
                        <button type="submit" id="buscar-button">
                            <img id="buscar-icon" src={searchIcon} alt="Buscar"  />
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}


export default Home;