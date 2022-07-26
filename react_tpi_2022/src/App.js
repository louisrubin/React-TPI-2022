import { Component } from "react";

import './App.css'
import Header from "./components/Header";
import Main from "./components/News";
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import NotFound_Results from "./components/NotFound_Results";
import OneNews from "./components/OneNews";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<Header />} />
			<Route path='/news/:title/:author/:description/:published' element={ <OneNews /> } />

            <Route path="*" element={<NotFound_Results noResults={false} />} /> 
        </Routes>
        
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