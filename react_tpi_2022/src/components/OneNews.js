import './OneNews.css'
import { useParams } from 'react-router-dom'

function OneNews() {
    const { title, urlToImage, url } = useParams()
    console.log(title)

    /*
                NO FUNCA :C
    */

    return (
        <div className='conteiner-news' id='one-news-page'>
            <h1> {title} </h1>
            <img src={urlToImage} />

            <a href={url}>
                <input type='button' >IR A LA NOTICIA</input>
            </a>
        </div>
    )
}


export default OneNews;
