// FORM SEARCH FORM
import './FormSearch.css'



function Form(props) {
    // COMPONENT SEARCH BELOW HEADER
    return(
        <>
        <form id="form-search">
            <input id="inp-search" type="search" name="search" placeholder="Buscar" defaultValue={props.defValInp} />
            <small id="smll-caract">Ingrese un mínimo de 3 caracteres</small>
            
            <label>Idioma</label>
            <select name="language">
                <option>español</option>
                <option>english</option>
            </select>

            <label>Resultados</label>
            <select name="pages" defaultValue={props.defValOpt}>
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
            </select>

            <button id="btn-submit" type="submit">Buscar</button>
        </form>
        </>
    )
}

export default Form