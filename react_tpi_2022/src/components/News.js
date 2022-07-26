import './News.css';
import { useEffect, useState } from "react";

import NewsBox from "./NewsBox";
import Functions from "./Functions";
import notFoundicon from '../assets/file-delete.png';
import Form from './FormSearch';
import TotalResults from './TotalResults'
import LoadingSpinner from './Spinner';


function NewsConteiner(props) {
    const { allResp } = props

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


function Main() {
    const [search, setSearch] = useState('argentina')
    const [pages, setPages] = useState(8)    // if (totalResults < 10 { pages = totalResults })
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

    
    useEffect( () =>{
        Functions.fetchNews(setAllResp, url, pages, setPages)     // import SET ALL RESP & PAGES
        Functions.formListener( {setSearch, setLanguage, setPages} )
    }, [search, language, pages])   // dependencias del useEffect

    

    // RETURN MAIN()
    return(
        <>
            <Form defValInp={search} defValOpt={pages} />
            
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