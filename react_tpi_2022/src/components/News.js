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

    

    const transformDate = (time) => {
        // function to transform date ISO from News API to a local String Date
        const Date = DateTime.fromISO(time)     // =>  {year: 2022, month: 7, day: 8, hour: 14, minute: 30, minute, second, ... }
        const newDate = Date.toLocaleString(DateTime.DATE_MED)     // 'dd-MM-yyyy- hh:mm' (formato 12hs)

        const Time = `${newDate} - ${ ('0' + Date.c.hour).slice(-2) }:${ ('0' + Date.c.minute).slice(-2) }hs`   // método slice(-2) lo copie de EdTeam B) - shorturl.at/klrxZ
        return Time
        
        //  console.log('Fecha: ', DateTime.fromISO(time).toLocaleString(DateTime.DATE_MED))    // 8 jul 2022
    }





    return(
        <>
            <h1>BUSQUEDA: "{search}"</h1>
            <h3>RESULTADOS TOTALES: {totalResult}</h3>
            <div className="conteiner-news">
                { !toDos ? 'Cargando...' :

                    toDos.articles.map( (news, index) => {
                        return(
                            <div className="box-news" key={index}>
                                <a href={news.url} target="_blank" rel="noopener noreferrer">
                                    <img className="img-news" src={news.urlToImage}  />
                                    <small>Publicado: { transformDate(news.publishedAt) } - </small>
                                    <small style={ {textDecoration: 'underline'} }>{ news.source.name }</small>
                                    <p> <b>{news.title}</b>  </p> 
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