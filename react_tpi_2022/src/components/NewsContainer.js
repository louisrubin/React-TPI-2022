
import Functions from "./Functions";
import NewsBox from "./NewsBox";
import NotFound_Results from './NotFound_Results';
import noImageicon from '../assets/no-found-image.svg';

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
                        news.urlToImage = noImageicon
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

                    <code style={styles.code}><b>status:</b> {allResp.status}</code>
                    <code style={styles.code}><b>code:</b> {allResp.code}</code>
                    <code style={styles.code}><b>message:</b> {allResp.message}</code>
                </div>
                { setViewing(0)    // set Viewing pages to 0 
                } 
            

                {
                allResp.code === 'corsNotAllowed' ? (
                    
                    <div className='error-div'>
                        <code style={{fontSize: '0.65em'}}>
                        Lo siento, pero esta API de noticias en el plan actual (gratuita) solo
                        permite su uso en localhost y no en producción, como en este caso :(
                        </code>
                    </div>
                )
                :
                    null
                }

            </>
        )
    }
}


export default NewsContainer;

