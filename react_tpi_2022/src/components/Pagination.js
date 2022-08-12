import './Pagination.css'
import prevIcon from '../assets/arrow-prev.png'
import nextIcon from '../assets/arrow-next.png'

function Pagination( {search, pagination, navigateMain, setPagination} ) {
    // 'navigateMain' --> useNavigate hook from "Main component"

    let paginationINT = parseInt(pagination)    // parse to Int

    const prevPage = () => {
        if(pagination > 1){
            // if 'pagination' is less than 1 it doesn't nothing
            const newPagination = paginationINT -= 1
            setPagination(newPagination) 
                // 'navigateMain' function
            return navigateMain(`/buscador/${search}/${newPagination}`)
        }
    }

    const nextPage = () => {
        const newPagination = paginationINT += 1
        setPagination(newPagination)
        
        return navigateMain(`/buscador/${search}/${newPagination}`)
    }

    return(
        <div className="pagination-container">
            <div className='pagination-ELEMENTS'>

                <button id='btn-prev' className='pagination btn-pagination' onClick={prevPage}>
                    <img src={prevIcon} />
                </button>

                <button id='number-Page' className='pagination'>
                    {pagination}
                </button>

                <button id='btn-next' className='pagination btn-pagination' onClick={nextPage}>
                    <img src={nextIcon} />
                </button>

            </div>
        </div>
    )
}


export default Pagination;

