import './NotFound_Results.css'
import { Link } from 'react-router-dom'
import notFound from '../assets/not-found.png'
import noReslt from '../assets/no-results.png'


function NotFound_Results( { noResults } ) {
    let img = undefined
    let messageP = undefined

    if (noResults) {
        // noResults === true  -->  no results found
        img = noReslt
        messageP = 'NO RESULTS FOUND'
    }
    else {
        // noResults === false  -->  there are results
        img = notFound
        messageP = 'PAGE NOT FOUND'
    }


    // MAIN RETURN 
    return(
        <div id='conteiner-notFound'>
            <img id='img-notFound' src={img} />
            <p>{messageP}</p>
            
            <Link to='/buscar'>Back to Home</Link>
        </div>
    )
} 


export default NotFound_Results;
