import './NotFound.css'
import notF from '../assets/not-found.png'


function NotFound() {
    return(
        <div id="conteiner-notFound">
            <div>
                <img src={notF} />
            </div>
            
            <p>PAGE NOT FOUND</p>
        </div>
    )
} 


export default NotFound;
