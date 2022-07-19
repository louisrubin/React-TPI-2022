import { useEffect, useState } from "react";
import NewsBox from "./NewsBox";
import './News.css';
import Function from "./Functions";
import notFoundicon from '../assets/file-delete.png';
import { Form, formListener } from './FormSearch';


function Main() {
    const [search, setSearch] = useState('chaco')
    const [pages, setPages] = useState(4)    // if (totalResults < 10 { pages = totalResults })
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

    
    useEffect( () =>{
        Function.fetchApi(setAllResp, url)     // import SET ALL RESP
        formListener({setSearch, setLanguage, setPages})
    }, [search, language, pages])   // dependencias del useEffect

    return(
        <>
            <Form defValue={search} />
            
            <div className="conteiner-news">
                { !allResp ? 'Cargando...' :
                    allResp.articles.map( (news, index ) => {
                        const publishedAt = Function.transformDate(news.publishedAt)    // import FetchApi
                        const obj = { news, index, publishedAt} // un objeto como param
                        if (news.urlToImage === null){
                            news.urlToImage = notFoundicon
                        }
                        return(
                            NewsBox(obj)
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main;