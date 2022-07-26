import { useParams } from 'react-router-dom';
import './OneNews.css';

function OneNews() {
    const { title, author, description, published } = useParams();
    console.log(title)

    return (
        <div className='conteiner-news' id='one-news-page'>
            <h1> {title} </h1>
            <small> {published} </small>
            <h2> {author} </h2>
            <p> {description} </p>

            <a href="#">
                <button id='toNews-Btn'>IR A LA NOTICIA</button>
            </a>
        </div>
    )
}


export default OneNews;
