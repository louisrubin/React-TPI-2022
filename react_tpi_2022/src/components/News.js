import { useEffect, useState } from "react";
import { DateTime } from 'luxon'
import NewsBox from "./NewsBox";

// CLASE 06/06

function Main() {
    const search = 'argentina'
    const pages = 10
    const language = 'es'
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`
    const [toDos, setToDos] = useState()
    const [totalResult, setResult] = useState()

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()  // retorna una promise --> 'await'
        
        setToDos(responseJSON)  // response
        setResult(responseJSON.totalResults)    // total results
    }

    // useEffect se ejecuta luego de montar el componente (componentDidMount)
    useEffect( () =>{
        fetchApi()
    }, [])  // array vacio: el useEffect no tiene dependencias lo cual se ejecuta 1 sola vez al montar todo

    const transformDate = time => {
        // function to transform date ISO from News API to a local String Date
        const Date = DateTime.fromISO(time)     // =>  {year: 2022, month: 7, day: 8, hour: 14, minute: 30, minute, second, ... }
        const newDate = Date.toLocaleString(DateTime.DATE_MED)     // 'dd-MM-yyyy- hh:mm' (formato 12hs)

        const Time = `${newDate} - ${ ('0' + Date.c.hour).slice(-2) }:${ ('0' + Date.c.minute).slice(-2) }hs`   // método slice(-2) lo copie de EdTeam B) - shorturl.at/klrxZ
        return Time
        
        //  console.log('Fecha: ', DateTime.fromISO(time).toLocaleString(DateTime.DATE_MED))    // 8 jul 2022
    }

    return(
        <>
            <div className="conteiner-news">
                { !toDos ? 'Cargando...' :

                    toDos.articles.map( (news, index ) => {
                        const publishedAt = transformDate(news.publishedAt)
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