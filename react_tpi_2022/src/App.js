import { Component } from "react";
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound_Results from "./components/NotFound_Results";
import AboutMe from "./components/AboutMe";
import Home from "./components/BuscarPage";


class App extends Component {
	render() {
		return (
			<>
				<Header />

				<Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path="/buscar" element={ <Home />} />
                    <Route path="/buscar/:titleParam/:pageParam" element={ <Main />} />
                    <Route path="/noResults" element={ <NotFound_Results noResults={true} /> } />
                    
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