import './NewsBox.css'
import { Link } from 'react-router-dom'

// NEWS-BOX COMPONENT
function NewsBox(props) {
    const { news, index, publishedAt } = props


    return(
        <div className="box-news" key={index}>
            
            {/* <a href={news.url} target="_blank" rel="noopener noreferrer">
                <img className="img-news" src={news.urlToImage}  />
            </a> */}
            
            <Link to={`/news/${news.title}/${news.author}/${news.description}/${publishedAt}`}>
                <img className="img-news" src={news.urlToImage}  />
            </Link>

            <div id='box-info'>
                <small>Publicado: { publishedAt } - </small>
                <small style={ {textDecoration: 'underline'} }>{ news.source.name }</small>

                <Link to={`/news/${news.title}`}>  
                    <p> <b>{news.title}</b>  </p>
                </Link>

                {/* <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <p> <b>{news.title}</b>  </p> 
                </a>  */}
            </div>                               
        </div>
    )
}

export default NewsBox;
