import GalleryGrid from '@/components/GalleryGrid';

const generalPropertyStandards = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const sellerGuidelines = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const buyerGuidelines = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const GuidelinesAndImages = () => {
	return (
		<>
			<section className="flex justify-between p-5 pt-20">
				<div className="space-y-6">
					<h1 className="text-3xl text-primary md:text-5xl">General Property Standard</h1>
					<ul className="list-disc space-y-1 text-[#808080]">
						{generalPropertyStandards.map((item, index) => (
							<li key={index}>{item.label}</li>
						))}
					</ul>

					<h2 className="text-3xl font-bold md:text-5xl">Seller Guidelines</h2>
					<ul className="list-disc space-y-1 text-[#808080]">
						{sellerGuidelines.map((item, index) => (
							<li key={index}>{item.label}</li>
						))}
					</ul>

					<h3 className="text-3xl font-bold text-primary md:text-5xl">Buyer Guidelines</h3>
					<ul className="list-disc space-y-1 text-[#808080]">
						{buyerGuidelines.map((item, index) => (
							<li key={index}>{item.label}</li>
						))}
					</ul>
				</div>

				<GalleryGrid />
			</section>
			<div className="flex w-full items-center justify-between gap-3 pt-15 lg:gap-25">
				<hr className="w-full border border-black md:w-6xl" />

				<div className="flex items-center gap-2 md:gap-10">
					<hr className="w-20 border border-black" />
					<hr className="w-20 border border-primary" />
					<hr className="w-20 border border-black" />
				</div>
			</div>
		</>
	);
};

export default GuidelinesAndImages;
