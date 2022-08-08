import { Link, useNavigate } from "react-router-dom"
import FormSearch from "./FormSearch"
import Functions from "./Functions"
import './BuscarPage.css'


function Home() {
    Functions.setTitleFunction('INFOR-NEWS')

    // Functions.formListener()

    return(
        <>
            <div className="home-container" >
                <FormSearch />
            </div>
        </>
    )
}



export default Home