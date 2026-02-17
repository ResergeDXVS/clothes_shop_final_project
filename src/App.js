import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Theme from "./theme/index";
function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle/>
			<Header/>
			{/* <div className="App">
				<Routes>
					<Route 
						path="/" 
						element={<Banner/>}/>
					
				</Routes>
			</div> */}
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
