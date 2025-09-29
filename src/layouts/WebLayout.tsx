import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WebLayout = () => {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			<div>
				<Header />
			</div>
			<div>
				<main>
					<Outlet />
				</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default WebLayout;
