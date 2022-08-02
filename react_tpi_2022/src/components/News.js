import './News.css';
import { useEffect, useState } from "react";

import NewsBox from "./NewsBox";
import Functions from "./Functions";
import notFoundicon from '../assets/file-delete.png';
import FormSearch from './FormSearch';
import TotalResults from './TotalResults'
import LoadingSpinner from './Spinner';
import NotFound_Results from './NotFound_Results';


function NewsConteiner(props) {
    const { allResp  } = props
    

    if ( allResp.totalResults === 0){
        //  no results found
        return(
            <NotFound_Results noResults={true} />
        )
    }
    else if (allResp.articles !== null){
        // if articles !== null
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


function Main() {
    Functions.setTitleFunction('INFOR-NEWS')    // set title dynamically
    const [search, setSearch] = useState('argentina')
    const [newsPerPages, setNewsPerPages] = useState(8)
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()
    
    const urlNews = `https://newsapi.org/v2/everything?q=${search}&pageSize=${newsPerPages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`


    // component did mount 
    useEffect( () =>{
        Functions.fetchNews(setAllResp, urlNews, newsPerPages, setNewsPerPages)     // import SET ALL RESP & PAGES
        Functions.formListener( {setSearch, setLanguage, setNewsPerPages} )
    }, [search, language, newsPerPages])    // useEffect's dependencies
    
    

    // RETURN MAIN()
    return(
        <>
            <FormSearch defValOpt={newsPerPages} defValSearch={search} />
            
                { allResp ===  undefined 
                    ?   <div className="conteiner-news">
                            <LoadingSpinner />
                        </div>
                    :
                    <>
                        <TotalResults viewing={newsPerPages} totalResults={allResp} />
                        
                        <div className="conteiner-news">
                            <NewsConteiner allResp={allResp} />
                        </div>
                    </>
                }
        </>
    )
}

export default Main;