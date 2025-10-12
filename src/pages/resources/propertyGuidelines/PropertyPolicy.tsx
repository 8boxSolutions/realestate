import img from '@/assets/img.jpg';

const agentBrokerGuidelines = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const propertyMaintenanceGuidelines = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const financialLegalGuidelines = [
	{ label: 'Property must have clear land title and updated tax declarations.' },
	{ label: 'Ensure property is free from legal disputes, liens, or encumbrances.' },
	{ label: 'Maintain accurate property boundaries (with updated survey plans if needed).' },
	{ label: 'Compliance with local zoning laws, building codes, and permits is required.' },
];

const PropertyPolicy = () => {
	return (
		<section className="flex flex-col gap-10 pt-25 lg:flex-row">
			<div>
				<img src={img} alt="Policy Guidelines" className="h-full w-full rounded-2xl object-cover" />
			</div>

			<div className="space-y-9">
				<h1 className="text-3xl text-primary md:text-5xl">Agent / Broker Guidelines</h1>
				<ul className="list-disc space-y-1 text-[#808080]">
					{agentBrokerGuidelines.map((item, index) => (
						<li key={index}>{item.label}</li>
					))}
				</ul>

				<h2 className="text-3xl font-bold md:text-5xl">Property Maintenance Guidelines</h2>
				<ul className="list-disc space-y-1 text-[#808080]">
					{propertyMaintenanceGuidelines.map((item, index) => (
						<li key={index}>{item.label}</li>
					))}
				</ul>

				<h3 className="text-3xl font-bold text-primary md:text-5xl">Financial & Legal Guidelines</h3>
				<ul className="list-disc space-y-1 text-[#808080]">
					{financialLegalGuidelines.map((item, index) => (
						<li key={index}>{item.label}</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default PropertyPolicy;
