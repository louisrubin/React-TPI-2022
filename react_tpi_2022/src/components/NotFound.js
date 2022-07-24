import './NotFound.css'
import { Link } from 'react-router-dom'
import notF from '../assets/not-found.png'


function NotFound() {
    return(
        <div id='conteiner-notFound'>
            <div id='div-inside'>
                <img src={notF} />
                <p>PAGE NOT FOUND</p>
                
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    )
} 


export default NotFound;
