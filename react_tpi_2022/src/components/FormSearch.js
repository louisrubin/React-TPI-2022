// FORM SEARCH FORM
import './FormSearch.css'

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

export default Form