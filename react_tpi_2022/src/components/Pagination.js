import './Pagination.css'
import prevIcon from '../assets/arrow-prev.png'
import nextIcon from '../assets/arrow-next.png'

function Pagination( {pagination, setPagination} ) {

    const prevPage = () => {
        // previous page function

        if(pagination > 1){
            // if 'pagination' is less than 1 it doesn't nothing
            setPagination(pagination -= 1)
        }
    }

    const nextPage = () => {
        // next page function
        setPagination(pagination += 1)
    }

    return(
        <div className="pagination-container">
            <div className='pagination-ELEMENTS'>
                <nav onClick={prevPage}>
                    <img src={prevIcon} />
                </nav>
                <nav id='number-Page'>
                    {pagination}
                </nav>
                <nav onClick={nextPage}>
                    <img src={nextIcon} />
                </nav>

            </div>
        </div>
    )
}


export default Pagination;

