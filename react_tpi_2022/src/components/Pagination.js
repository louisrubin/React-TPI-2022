import './Pagination.css'
import prevIcon from '../assets/arrow-prev.png'
import nextIcon from '../assets/arrow-next.png'

function Pagination(state) {

    const prevPage = () => {
        // previous page function
        console.log('clic anterior')
    }

    const nextPage = () => {
        // next page function
        console.log('clic siguiente')
    }

    return(
        <div className="pagination-container">
            <nav onClick={prevPage}>
                <img src={prevIcon} />
            </nav>
            <nav>
                1
            </nav>
            <nav onClick={nextPage}>
                <img src={nextIcon} />
            </nav>
        </div>
    )
}


export default Pagination;

