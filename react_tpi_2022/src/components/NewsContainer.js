import { useNavigate } from 'react-router-dom';

import Functions from "./Functions";
import NewsBox from "./NewsBox";
import NotFound_Results from './NotFound_Results';
import notFoundicon from '../assets/file-delete.png';

function NewsContainer(props) {
    const { allResp, search  } = props
    
    // Returns an imperative method for changing the location. 
    // Used by s, but may also be used by other elements to change the location.
    // const navigate = useNavigate()

    if ( allResp.totalResults === 0){
        //  no results found
        return(
            <NotFound_Results noResults={true} />
        )
    }
    else if (allResp.articles !== null){
        // if articles !== null
        // navigate(`/search/${search}`)
        return(
            allResp.articles.map( (news, index ) => {
                const publishedAt = Functions.transformDate(news.publishedAt)
                const obj = { news, index, publishedAt} // un objeto como param

                if (news.urlToImage === null){
                    news.urlToImage = notFoundicon
                }
                return(
                    NewsBox(obj)
                )
            })

        )
    }
    else{
        // if articles === null
        return(
            <div className='error-div'>
                <p>ERROR LOADING (Refresh)</p>
            </div>
        )
    }
}


export default NewsContainer;

