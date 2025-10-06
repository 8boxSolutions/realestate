import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebLayout from './layouts/WebLayout';
import FavoriteSection from './pages/favorite/FavoriteSection';
import NewDevelopmentsSection from './pages/NewDevelopments/NewDevelopmentsSection';
import ForeclosuresSection from './pages/Foreclosures/ForeclosuresSection';
import { BuyHouseAndLot, Home } from '@/pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WebLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/house-and-lot/buy" element={<BuyHouseAndLot />} />
					<Route path="/favorite" element={<FavoriteSection />} />
					<Route path="/new developments" element={<NewDevelopmentsSection />} />
					<Route path="/foreclosures" element={<ForeclosuresSection />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
