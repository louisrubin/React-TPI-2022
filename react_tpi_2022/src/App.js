import { Component } from "react";

import './App.css'
import Header from "./components/Header";
import Main from "./components/News";
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<Header />} />
            <Route path="*" element={<h1>Not found</h1>} /> 
        </Routes>
        
        <nav style={{marginTop: '150px'}}>
          <ul>
            <li> <Link to='/'>Main</Link> </li>
            <li> <Link to='/about'>Header</Link> </li>
          </ul>
        </nav>
        
        <Footer />
      </>
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