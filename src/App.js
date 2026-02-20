import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import Theme from "./theme/index";
import UserCreate from './components/User/UserCreate';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import Main from './components/Body/Main';
import ProductDetail from './components/Body/Products/ProductDetail';
function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle/>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={<Main/>}
					/>
					<Route 
						path="/user/create" 
						element={<UserCreate/>}
					/>
					<Route 
						path="/user/login" 
						element={<UserLogin/>}
					/>
					<Route 
						path="/product/:id" 
						element={<ProductDetail/>}
					/>
					<Route
						path="/cart/:id"
						element={<cartView/>}
					/>
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
