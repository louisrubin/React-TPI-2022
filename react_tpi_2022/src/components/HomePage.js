import { Link } from "react-router-dom"
import Functions from "./Functions"


function Home() {
    Functions.setTitleFunction('INFOR-NEWS')
    return(
        <>
            <div style={ {display: 'flex', flexDirection: 'column',marginLeft: '10%', justifyContent: 'center'} }>
                <h1 style={{marginTop: '100px'}}>INFOR NEWS</h1>
                <Link to='/buscar' style={ {fontSize: '2em'} }>Buscar Noticias</Link>
                <small>created by Louis Rubin</small>
            </div>
        </>
    )
}



export default Home