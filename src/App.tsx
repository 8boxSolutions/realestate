import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebLayout from './layouts/WebLayout';
import FavoriteSection from './pages/houseAndLot/favorite/FavoriteSection';
import { BuyHouseAndLot, Home } from '@/pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WebLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/house-and-lot/buy" element={<BuyHouseAndLot />} />
					<Route path="/favorite" element={<FavoriteSection />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
