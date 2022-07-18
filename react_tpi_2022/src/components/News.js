import { useEffect, useState } from "react";
import { DateTime } from 'luxon'
import NewsBox from "./NewsBox";
import './News.css'

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
    const [totalResult, setResults] = useState()
    
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=${pages}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()  // retorna una promise --> 'await'
        
        setResp(responseJSON)  // response
        setResults(responseJSON.totalResults)    // total results
    }

    // const handleChange(e) => {
    //     e.onSubmit()    // ###############################
    // }

    const transformDate = time => {
        // function to transform date ISO from News API to a local String Date
        const Date = DateTime.fromISO(time)     // =>  {year: 2022, month: 7, day: 8, hour: 14, minute: 30, minute, second, ... }
        const newDate = Date.toLocaleString(DateTime.DATE_MED)     // 'dd-MM-yyyy- hh:mm' (formato 12hs)

        const Time = `${newDate} - ${ ('0' + Date.c.hour).slice(-2) }:${ ('0' + Date.c.minute).slice(-2) }hs`   // método slice(-2) lo copie de EdTeam B) - shorturl.at/klrxZ
        return Time
        
        //  console.log('Fecha: ', DateTime.fromISO(time).toLocaleString(DateTime.DATE_MED))    // 8 jul 2022
    }

    
    useEffect( () =>{
        fetchApi()
    }, [search, pages, language])  

    return(
        <>
            <Form />
            <div className="conteiner-news">
                { !allResp ? 'Cargando...' :

                    allResp.articles.map( (news, index ) => {
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