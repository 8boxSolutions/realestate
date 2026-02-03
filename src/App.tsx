import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebLayout from './layouts/WebLayout';
import { UserProvider } from './context/UserProvider';
// AUTH
import ClientLogin from './pages/auth/Client/ClientLogin';
import SignUp from './pages/auth/Client/SignUp';
import ForgetPassword from './pages/auth/Client/ForgetPassword';
import VerifyCode from './pages/auth/Client/VerifyCode';
import SetPassword from './pages/auth/Client/SetPassword';
import PropertyLogin from './pages/auth/property-owner/PropertyLogin';
import PropertyRegister from './pages/auth/property-owner/PropertyRegister';
import PropertyForPass from './pages/auth/property-owner/PropertyForPass';
import PropertyVerifyCode from './pages/auth/property-owner/PropertyVerifyCode';
import PropertySetPassword from './pages/auth/property-owner/PropertySetPassword';

// PROPERTY-PAGES
import PropertyLayout from './layouts/Property_Layout';
import PropertyHome from './pages/property-pages/property-home';
import PropertyMessages from './pages/property-pages/property-messages';
import PropertyLeadsTransactions from './pages/property-pages/property-leads-transactions';
import PropertyListings from './pages/property-pages/property-listings';
import PropertyPerformance from './pages/property-pages/property-performance';

// FOR SALE
import { BuyHouseAndLot, Home } from '@/pages';
import CondoForSale from './pages/buy/CondoForSale';
import ApartmentForSale from './pages/buy/ApartmentForSale';
import LotsForSale from './pages/buy/LotsForSale';
import CommercialForSale from './pages/buy/CommercialForSale';
import AllProptertiesForSale from './pages/buy/AllProptertiesForSale';

// FOR RENT
import HouseAndLotForRent from './pages/rent/HouseAndLotForRent';
import CondoForRent from './pages/rent/CondoForRent';
import ApartmentForRent from './pages/rent/ApartmentForRent';
import LotsForRent from './pages/rent/LotsForRent';
import CommercialForRent from './pages/rent/CommercialForRent';
import AllPropertiesForRent from './pages/rent/AllPropertiesForRent';

import NewDevelopmentsSection from './pages/NewDevelopmentsSection';
import ForeclosuresSection from './pages/ForeclosuresSection';

// Resources
import Journal from './pages/resources/Journal';
import LoanCalculator from './pages/resources/LoanCalculator';
import PropertyGuidelines from './pages/resources/propertyGuidelines/PropertyGuidelines';

import FavoriteSection from './pages/favorite/FavoriteSection';

// BUY DETAILS
import HouseForSaleDetails from './features/home/buyDetails/HouseForSaleDetails';
import CondoForSaleDetails from './features/home/buyDetails/CondoForSaleDetails';
import CommercialForSaleDetails from './features/home/buyDetails/CommercialForSaleDetails';
import ApartmentsForSaleDetails from './features/home/buyDetails/ApartmentsForSaleDetails';
import LotForSaleDetails from './features/home/buyDetails/LotForSaleDetails';

// RENT DETAILS
import HouseForRentDetail from './features/home/rentDetails/HouseForRentDetails';
import CondoForRentDetails from './features/home/rentDetails/CondoForRentDetails';
import CommercialForRentDetails from './features/home/rentDetails/CommercialForRentDetails';
import ApartmentsForRentDetails from './features/home/rentDetails/ApartmentsForRentDetails';
import LotForRentDetails from './features/home/buyDetails/LotForSaleDetails';

import NewDevelopmentsDetails from './features/home/NewDevelopmentsDetails';
import ForeclosuresDetails from './features/home/ForeclosuresDetails';
import { fromTheme } from 'tailwind-merge';

import ClientFavorites from './pages/client/ClientFavorites';
import Profile from './pages/client/Profile';
import ClientHome from './pages/client/ClientHome';
import ClientMessages from './pages/client/messages/ClientMessages';
import ClientTransactions from './pages/client/Transactions/ClientTransactions';
import ClientLayout from './layouts/ClientLayout';

function App() {
	return (
    <UserProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/login-client" element={<ClientLogin />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/forget-password" element={<ForgetPassword />} />
				<Route path="/verify-code" element={<VerifyCode />} />
				<Route path="/set-password" element={<SetPassword />} />
				<Route path="/login-property" element={<PropertyLogin />} />
				<Route path="/property-for-pass" element={<PropertyForPass />} />
				<Route path="/property-register" element={<PropertyRegister />} />
				<Route path="/property-set-password" element={<PropertySetPassword />} />
				<Route path="/property-verify-code" element={<PropertyVerifyCode />} />
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
					<Route path="/house-and-lot-for-rent" element={<HouseAndLotForRent />} />
					<Route path="/house-and-lot-for-rent/:houseId" element={<HouseForRentDetail />} />

					<Route path="/condo-for-rent" element={<CondoForRent />} />
					<Route path="/condo-for-rent/:condoId" element={<CondoForRentDetails />} />

					<Route path="/apartments-for-rent" element={<ApartmentForRent />} />
					<Route path="/apartments-for-rent/:apartmentId" element={<ApartmentsForRentDetails />} />

					<Route path="/lots-for-rent" element={<LotsForRent />} />
					<Route path="/lots-for-rent/:lotId" element={<LotForRentDetails />} />

					<Route path="/commercial-unit-for-rent" element={<CommercialForRent />} />
					<Route path="/commercial-unit-for-rent/:commercialId" element={<CommercialForRentDetails />} />

					<Route path="/all-properties-for-rent" element={<AllPropertiesForRent />} />
					
					{/* NEW DEVELOPMENTS */}
					<Route path="/new-developments" element={<NewDevelopmentsSection />} />
					<Route path="/new-developments/:developmentId" element={<NewDevelopmentsDetails />} />

					{/* FORECLOSURES */}
					<Route path="/foreclosures" element={<ForeclosuresSection />} />
					<Route path="/foreclosures/:foreclosureId" element={<ForeclosuresDetails />} />

					{/* RESOURCES */}
					<Route path="/journal" element={<Journal />} />
					<Route path="/loan-calculator" element={<LoanCalculator />} />
					<Route path="/property-guides" element={<PropertyGuidelines />} />
					<Route path="/favorite" element={<FavoriteSection />} />
				</Route>

        {/* CLIENT LAYOUT */}
         <Route element={<ClientLayout />}>
           <Route path="/client-home" element={<ClientHome />} />
           <Route path="/client-messages" element={<ClientMessages />} />
           <Route path="/client-transaction" element={<ClientTransactions />} />
           <Route path="/client-favorite" element={<ClientFavorites />} />
           <Route path="/profile" element={<Profile />} />
         </Route>
				
				{/* PROPERTY-OWNER */}
				<Route element={<PropertyLayout />}>
					<Route path="/property-home" element={<PropertyHome />} />
					<Route path="/property-messages" element={<PropertyMessages />} />
					<Route path="/property-leads-transactions" element={<PropertyLeadsTransactions />} />
					<Route path="/property-listings" element={<PropertyListings />} />
					<Route path="/property-performance" element={<PropertyPerformance />} />
				</Route>
			</Routes>
		</BrowserRouter>
    </UserProvider>
	);
}

export default App;