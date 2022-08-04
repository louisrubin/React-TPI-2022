
import Functions from "./Functions";
import NewsBox from "./NewsBox";
import NotFound_Results from './NotFound_Results';
import notFoundicon from '../assets/file-delete.png';

function NewsContainer(props) {
    const { search, allResp, setViewing  } = props
    Functions.setTitleFunction(`Buscando '${search}'`)    // set title dynamically
    
    // Returns an imperative method for changing the location. 
    // Used by s, but may also be used by other elements to change the location.


    if (allResp.status === "ok"){
        // if status === "ok"

        if ( allResp.totalResults !== 0){        
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
        }else {
            // status === 0
            return(
                < NotFound_Results noResults={true} />
            )
            
        }
    }

    else{
        // if status !== "ok"
        return(
            <>
                <div className='error-div'>
                    <p>ERROR LOADING (Refresh)</p>
                    <small style={{fontSize: '0.6em'}}>code: {allResp.code}</small>
                </div>
                { setViewing(0)    // set Viewing pages to 0 
                } 
            </>
        )
    }
}


export default NewsContainer;

