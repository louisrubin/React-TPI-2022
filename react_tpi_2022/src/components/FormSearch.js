// FORM SEARCH FORM

const formListener = (states) => {
    const { setSearch, setLanguage, setPages } = states
    // form listener on Submit event
    console.log('STATES ',states)
    document.getElementById('form-search')
        .addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.target) )
            console.log(data)
            setSearch(data.search)
            setLanguage(data.language)
            setPages(data.pages)
        }
    )
} 


function Form(props) {
    // COMPONENT SEARCH BELOW HEADER
    return(
        <div>
            <form id="form-search">
                <input type="text" name="search" placeholder="Buscar" defaultValue={props.defValue} />

                <label>Idioma</label>
                <select name="language">
                    <option>es</option>
                    <option>en</option>
                </select>

                <label>Resultados</label>
                <select name="pages" >
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

export {Form, formListener}