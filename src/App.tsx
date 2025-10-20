import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebLayout from './layouts/WebLayout';
// FOR SALE
import CondoForSale from './pages/buy/CondoForSale';
import ApartmentForSale from './pages/buy/ApartmentForSale';
import LotsForSale from './pages/buy/LotsForSale';
import CommercialForSale from './pages/buy/CommercialForSale';
import AllProptertiesForSale from './pages/buy/AllProptertiesForSale';

// FOR RENT
// import CondoForRent from './pages/rent/CondoForRent';
// import ApartmentForRent from './pages/rent/ApartmentForRent';
// import LotsForRent from './pages/rent/LotsForRent';
// import CommercialForRent from './pages/rent/CommercialForRent';
// import AllPropertiesForRent from './pages/rent/AllPropertiesForRent';

import NewDevelopmentsSection from './pages/NewDevelopmentsSection';
import ForeclosuresSection from './pages/ForeclosuresSection';

// Resources
import Journal from './pages/resources/Journal';
import LoanCalculator from './pages/resources/LoanCalculator';
import PropertyGuidelines from './pages/resources/propertyGuidelines/PropertyGuidelines';

import FavoriteSection from './pages/favorite/FavoriteSection';

import { BuyHouseAndLot, Home } from '@/pages';

// BUY DETAILS
import HouseForSaleDetails from './features/home/buyDetails/HouseForSaleDetails';
import CondoForSaleDetails from './features/home/buyDetails/CondoForSaleDetails';
import CommercialForSaleDetails from './features/home/buyDetails/CommercialForSaleDetails';
import ApartmentsForSaleDetails from './features/home/buyDetails/ApartmentsForSaleDetails';
import LotForSaleDetails from './features/home/buyDetails/LotForSaleDetails';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WebLayout />}>
					<Route path="/" element={<Home />} />
					{/* BUY */}
					<Route path="/house-and-lot/buy" element={<BuyHouseAndLot />} />
					<Route path="/house-and-lot/buy/:houseId" element={<HouseForSaleDetails />} />

					<Route path="/condo-for-sale" element={<CondoForSale />} />
					<Route path="/condo-for-sale/:condoId" element={<CondoForSaleDetails />} />

					<Route path="/apartments-for-sale" element={<ApartmentForSale />} />
					<Route path="/apartments-for-sale/:apartmentId" element={<ApartmentsForSaleDetails />} />

					<Route path="/lots-for-sale" element={<LotsForSale />} />
					<Route path="/lots-for-sale/:lotId" element={<LotForSaleDetails />} />

					<Route path="/commercial-unit-for-sale" element={<CommercialForSale />} />
					<Route path="/commercial-unit-for-sale/:commercialId" element={<CommercialForSaleDetails />} />

					<Route path="/all-properties-for-sale" element={<AllProptertiesForSale />} />

					{/* RENT */}
					{/* <Route path="/condo-for-rent" element={<CondoForRent />} />
					<Route path="/apartments-for-rent" element={<ApartmentForRent />} />
					<Route path="/lots-for-rent" element={<LotsForRent />} />
					<Route path="/commercial-unit-for-rent" element={<CommercialForRent />} />
					<Route path="/all-properties-for-rent" element={<AllPropertiesForRent />} /> */}

					<Route path="/new-developments" element={<NewDevelopmentsSection />} />
					<Route path="/foreclosures" element={<ForeclosuresSection />} />
					{/* RESOURCES */}
					<Route path="/journal" element={<Journal />} />
					<Route path="/loan-calculator" element={<LoanCalculator />} />
					<Route path="/property-guides" element={<PropertyGuidelines />} />
					<Route path="/favorite" element={<FavoriteSection />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
