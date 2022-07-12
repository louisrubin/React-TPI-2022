import { useEffect, useState } from "react";
import './News-css.css'


// CLASE 06/06

function Main() {
    const search = 'messi'
    const url = `https://newsapi.org/v2/everything?q=${search}&pageSize=5&apiKey=3a8f8a50766947e8b6d4633919806d8a`
    console.log(process.env.NEWS_API_KEY)
    const [toDos, setToDos] = useState()
    const [imgs, setImage] = useState()
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

    return(
        <>
            <h1>BUSQUEDA: "{search}"</h1>
            <h3>RESULTADOS TOTALES: {totalResult}</h3>
            <div className="conteiner-news">
                { !toDos ? 'Cargando...' :
                    toDos.articles.map( (toDo, index) => {
                        return(
                            <div className="box-news">
                                <img src={toDo.urlToImage} className="img-news" />
                                <p key={index}> <b>TITULO:</b> {toDo.title} </p> 
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main;