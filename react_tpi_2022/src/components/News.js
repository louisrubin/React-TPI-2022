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
    const { allResp } = props

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
                const publishedAt = Functions.transformDate(news.publishedAt)    // import FetchApi
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
    const [search, setSearch] = useState('argentina')
    const [pages, setPages] = useState(8)    // if (totalResults < 10 { pages = totalResults })
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()

    const title = document.getElementsByTagName('title')[0]
    title.innerHTML = 'Inicio'
    console.log(title)
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

    
    useEffect( () =>{
        Functions.fetchNews(setAllResp, url, pages, setPages)     // import SET ALL RESP & PAGES
        Functions.formListener( {setSearch, setLanguage, setPages} )
    }, [search, language, pages])   // dependencias del useEffect

    

    // RETURN MAIN()
    return(
        <>
            <FormSearch defValOpt={pages} />
            
                { allResp ===  undefined 
                    ?   <div className="conteiner-news">
                            <LoadingSpinner />
                        </div>
                    :
                    <>
                        <TotalResults viewing={pages} totalResults={allResp} />
                        
                        <div className="conteiner-news">
                            <NewsConteiner allResp={allResp} />
                        </div>
                    </>
                }
        </>
    )
}

export default Main;