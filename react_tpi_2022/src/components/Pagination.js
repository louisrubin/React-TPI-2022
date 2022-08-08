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
            return navigateMain(`/buscar/${search}/${newPagination}`)
        }
    }

    const nextPage = () => {
        const newPagination = paginationINT += 1
        setPagination(newPagination)
        
        return navigateMain(`/buscar/${search}/${newPagination}`)
    }

    return(
        <div className="pagination-container">
            <div className='pagination-ELEMENTS'>

                <button className='pagination btn-pagination' onClick={prevPage}>
                    <img src={prevIcon} />
                </button>

                <button className='pagination' id='number-Page'>
                    {pagination}
                </button>

                <button className='pagination btn-pagination' onClick={nextPage} disabled={true}>
                    <img src={nextIcon} />
                </button>

            </div>
        </div>
    )
}


export default Pagination;

