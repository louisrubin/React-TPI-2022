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

            navigateMain(`/buscar/${search}/${newPagination}`)    // 'navigateMain' function
            return setPagination(newPagination)     
        }
    }

    const nextPage = () => {
        const newPagination = paginationINT += 1
        navigateMain(`/buscar/${search}/${newPagination}`)
        return setPagination(newPagination)
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

