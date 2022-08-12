import './NotFound_Results.css'
import { Link } from 'react-router-dom'
import notFound from '../assets/not-found.svg'
import noReslt from '../assets/no-results.svg'
import Functions from './Functions'


function NotFound_Results( { noResults, forgtParam } ) {
    let img = undefined
    let messageP = undefined

    if (noResults) {
        // noResults === true  -->  no results found
        Functions.setTitleFunction('Sin resultados')
        img = noReslt
        messageP = 'NO SE ENCONTRÓ RESULTADOS'
    }
    else {
        // noResults === false  -->  there are results
        Functions.setTitleFunction('Página no encontrada')
        img = notFound
        messageP = 'PÁGINA NO ENCONTRADA'
    }


    // MAIN RETURN 
    return(
        <div id='conteiner-notFound'>
            <img id='img-notFound' src={img} />
            <p>{messageP}</p>

            { forgtParam 
            ?   
            <>
                <p style={{fontSize: '13px', marginTop: '0'}}>La ruta para buscar es <code>/buscador/algo/<b>NumPág</b> </code> <br/>
                Ejemplo: <code>/buscador/gatos/<b>3</b> </code>
                </p>
            </>
            :
                null
            }
            
            <Link to='/buscador' style={{marginTop:'10px'}}>VOLVER AL MENU</Link>
        </div>
    )
} 


export default NotFound_Results;
