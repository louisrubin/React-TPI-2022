import { useEffect, useState } from "react";
import NewsBox from "./NewsBox";
import './News.css'
import Function from "./Functions";

// CLASE 06/06

function Form() {
    // COMPONENT SEARCH BELOW HEADER
    return(
        <div id="form-search">
            <form>
                <input name="search" placeholder="Buscar" />

                <label>Idioma</label>
                <select name="language">
                    <option>ES</option>
                    <option>EN</option>
                </select>

                <label>Resultados</label>
                <select name="pages">
                    <option>4</option>
                    <option>8</option>
                    <option select="yes">10</option>
                    <option>12</option>
                    <option>16</option>
                </select>

                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

function Main() {
    const [search, setSearch] = useState('world')
    const [pages, setPages] = useState(10)    // if (totalResults < 10 { pages = totalResults })
    const [language, setLanguage] = useState('es')
    const [allResp, setResp] = useState()
    //const [totalResult, setResults] = useState()
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

    // const handleChange(e) => {
    //     e.onSubmit()    // ###############################
    // }
    
    useEffect( () =>{
        Function.fetchApi(setResp, url)     // import FetchApi
    }, [search, pages, language])  

    return(
        <>
            <Form />
            <div className="conteiner-news">
                { !allResp ? 'Cargando...' :

                    allResp.articles.map( (news, index ) => {
                        const publishedAt = Function.transformDate(news.publishedAt)    // import FetchApi
                        const obj = { news, index, publishedAt} // un objeto como param
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