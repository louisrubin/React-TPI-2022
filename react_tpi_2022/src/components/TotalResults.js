import './TotalResults.css'

function TotalResults(props) {
    let viewing = props.viewing
    let totalResults = props.totalResults.totalResults
    
    if(totalResults === 0){
        viewing = 0
    }
    
    if(totalResults < viewing){      // si totalResults es menor a las pages seleccionadas usa -setPages()-
        viewing = totalResults
    }

    
    return(
        <div className='conteiner-results'>
            <p>Viendo <code>{viewing}</code> resultados de <code>{totalResults}</code> </p>
        </div>
    )
}

export default TotalResults;

