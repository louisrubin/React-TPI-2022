import { useEffect, useState } from "react";
import { DateTime } from 'luxon'
import './News-css.css'


// CLASE 06/06

function Main() {
    const search = 'messi'
    const pages = 7
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&apiKey=3a8f8a50766947e8b6d4633919806d8a`
    console.log(process.env.NEWS_API_KEY)
    const [toDos, setToDos] = useState()
    const [totalResult, setResult] = useState()

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()  // retorna una promise --> 'await'
        
        setToDos(responseJSON)  // response
        setResult(responseJSON.totalResults)    // total results

    }

    useEffect( () =>{
        fetchApi()
    }, [])  // array vacio: el useEffect no tiene dependencias

    
    const formatingDate = (date) => {
        const string = DateTime.toString(date)
        const formated = DateTime.fromISO(string, {
            zone: 'system',
        })
        console.log(formated)
        return formated
    }


    return(
        <>
            <h1>BUSQUEDA: "{search}"</h1>
            <h3>RESULTADOS TOTALES: {totalResult}</h3>
            <div className="conteiner-news">
                { !toDos ? 'Cargando...' :
                    toDos.articles.map( (news, index) => {

                        return(
                            <div className="box-news">
                                <a href={news.url}>
                                    <img src={news.urlToImage} className="img-news"  />
                                    <p key={index}> <b>{news.title}</b>  </p> 
                                    <small>{ news.publishedAt }</small>
                                </a>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main;