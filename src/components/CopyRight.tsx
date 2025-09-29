const CopyRight = () => {
	const year = new Date().getFullYear();
	return (
		<div className="flex flex-col items-center justify-between gap-4 bg-[#0B090A] p-6 text-[#AAAAAA] md:flex-row">
			<p className="ml-10">© Copy Estate {year} - All rights reserved</p>
			<ul className="mr-10 flex list-none space-x-10">
				<li>Terms and Conditions</li>
				<li>Privacy Policy</li>
				<li>Disclaimer</li>
			</ul>
		</div>
	);
};

export default CopyRight;
