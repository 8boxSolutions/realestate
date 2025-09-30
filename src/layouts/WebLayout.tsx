import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WebLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			{' '}
			<div>
				<Header />
			</div>
			<div>
				<main className="flex-grow">
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
