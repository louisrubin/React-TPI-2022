import { Component } from "react";

import './App.css'
import Main from "./components/News";

class App extends Component {
  render() {
    return (
      <Main />
    )
    
  }
}

export default App;




/* Seccion 28: 177 - min 4:30 

  <div>
    <p className={`mode-${this.state.mode}`}>Hola Mundo</p>
    <button onClick={ () => this.setState({ mode: 'dark'}) }>Modo oscuro</button>
    <button onClick={ () => this.setState({ mode: 'light'}) }>Modo claro</button>
  </div>
  
*/