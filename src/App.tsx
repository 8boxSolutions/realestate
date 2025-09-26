import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BuyHouseAndLot, Home } from '@/pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/house-and-lot/buy" element={<BuyHouseAndLot />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
