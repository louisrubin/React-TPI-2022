import './NotFound.css'
import notF from '../assets/not-found.png'


function NotFound() {
    return(
        <div id='conteiner-notFound'>
            <div id='div-inside'>
                <img src={notF} />
                <p>PAGE NOT FOUND</p>
            </div>
        </div>
    )
} 


export default NotFound;
