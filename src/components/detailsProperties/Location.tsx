import map from '@/assets/mapPin.jpg';

const Location = () => {
	return (
		<div className="w-full pt-20">
			<h1 className="text-primary">Location</h1>
			<p>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
			<div className="flex justify-center pt-15">
				<img src={map} alt="map" className="w-full" />
			</div>
		</div>
	);
};

export default Location;
