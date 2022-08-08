import { Component } from "react";

import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import NotFound_Results from "./components/NotFound_Results";
import AboutMe from "./components/AboutMe";
import Home from "./components/BuscarPage";
// import OneNews from "./components/OneNews";


class App extends Component {
	render() {
		return (
			<>
				<Header />

				<Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path="/buscar" element={ <Home />} />
                    <Route path="/buscar/:title" element={ <Main />} />
                    <Route path="/noResults" element={ <NotFound_Results noResults={true} /> } />


                    {/* <Route path='/news/:title' element={ <OneNews /> } /> */}
                    {/* <Route path="/search/:title" element={ <h1 style={{marginTop: '100px'}}>SEARCH/: TITLE</h1> } /> */}
                    <Route path="/about" element={ <AboutMe /> } />
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