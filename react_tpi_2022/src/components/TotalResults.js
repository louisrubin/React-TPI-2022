import './TotalResults.css'

function TotalResults(props) {
    const { viewing, totalResults } = props

    return(
        <div className='conteiner-results'>
            <p>Viendo <code>{viewing}</code> resultados de <code>{totalResults.totalResults}</code> </p>
        </div>
    )
}

export default TotalResults;

