import './NewsBox.css'

// NEWS-BOX COMPONENT
function NewsBox(props) {
    const { news, index, publishedAt } = props
    return(
        <div className="box-news" key={index}>
            
            <a href={news.url} target="_blank" rel="noopener noreferrer">
                <img className="img-news" src={news.urlToImage}  />
            </a>
            
            <div id='box-info'>
                <small>Publicado: { publishedAt } - </small>
                <small style={ {textDecoration: 'underline'} }>{ news.source.name }</small>

                <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <p> <b>{news.title}</b>  </p> 
                </a> 
            </div>                               
        </div>
    )
}

export default NewsBox;
