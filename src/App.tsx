import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebLayout from './layouts/WebLayout';

import { Home } from '@/pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WebLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
