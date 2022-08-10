// FORM SEARCH FORM
import './FormSearch.css'


function FormSearch(props) {
    // COMPONENT SEARCH BELOW HEADER
    return(
        <>
        <form id="form-search">
            <div id='inp-smll'>
                <input id="inp-search" type="search" name="search" placeholder="Buscar" defaultValue={props.defValSearch} />
                <small id="smll-caract">Ingrese un mínimo de 3 caracteres</small>
            </div>
            
            
            <select name="language" style={{marginRight: '5px'}}>
                <option>español</option>
                <option>english</option>
            </select>

            <select name="pages" defaultValue={props.defValOpt}>
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
            </select>

            <button id="btn-submit" className='btn-submit-styles' type="submit">Buscar</button>
        </form>
        
        </>
    )
}

export default FormSearch;