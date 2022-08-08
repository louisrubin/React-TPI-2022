import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Functions from "./Functions"
import './BuscarPage.css'


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
                    <label>Buscar Noticia</label>
                    <input id='buscar-input' type='search' name="buscar" />
                    <button type="submit" id="buscar-button">Buscar</button>
                </form>
            </div>
        </>
    )
}


export default Home