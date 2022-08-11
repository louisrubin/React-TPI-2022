
import Functions from "./Functions";
import NewsBox from "./NewsBox";
import NotFound_Results from './NotFound_Results';
import notFoundicon from '../assets/file-delete.png';

const styles = {
    code: {
        display:'block',
        fontSize: '0.6em',
        marginBottom: '5px',
    }

}

function NewsContainer(props) {
    const { search, allResp, setViewing  } = props
    Functions.setTitleFunction(`Buscando '${search}'`)    // set title dynamically
    
    // Returns an imperative method for changing the location. 
    // Used by s, but may also be used by other elements to change the location.


    if (allResp.status === "ok"){
        // if status === "ok"
        let viewing = 0

        if ( allResp.totalResults !== 0){        
            return(
                allResp.articles.map( (news, index ) => {
                    const obj = { news, index } // un objeto como param
                    viewing += 1    // viewing + 1 for iteration of news
    
                    if (news.urlToImage === null){
                        news.urlToImage = notFoundicon
                    }
                    setViewing(viewing)     // set the 'setViewing' with the final viewing's value

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

                    <code style={styles.code}>status: {allResp.status}</code>
                    <code style={styles.code}>code: {allResp.code}</code>
                    <code style={styles.code}>message: {allResp.message}</code>
                </div>
                { setViewing(0)    // set Viewing pages to 0 
                } 
            </>
        )
    }
}


export default NewsContainer;

