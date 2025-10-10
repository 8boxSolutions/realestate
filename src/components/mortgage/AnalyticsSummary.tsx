import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const data = [
	{ name: 'Legal Expenses', value: 70, fill: '#ffffff' },
	{ name: 'Deposit', value: 90, fill: '#FF4D4D' },
	{ name: 'Mortgage Amount', value: 60, fill: '#9ca3af' },
	{ name: 'Interest', value: 80, fill: '#DC2626' },
];

const AnalyticsSummary = () => {
	return (
		<div className="mx-4 mt-8 flex flex-col items-center space-y-6 rounded-2xl bg-[#2B2B2B] px-2 py-6 text-white sm:mx-9 sm:mt-10">
			{/* Title */}
			<h1 className="text-center text-lg sm:text-xl">Estimated Repayment (monthly)</h1>

			{/* Chart Container */}
			<div className="relative h-[180px] w-[180px] sm:h-[240px] sm:w-[240px]">
				<ResponsiveContainer width="100%" height="100%">
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="60%"
						outerRadius="100%"
						startAngle={90}
						endAngle={-270}
						data={data}
						barSize={8}
					>
						<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
						<RadialBar dataKey="value" cornerRadius={50} isAnimationActive={false} />
					</RadialBarChart>
				</ResponsiveContainer>

				{/* Center Text */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
					<p className="text-xl leading-none font-bold sm:text-2xl">₱1.16M</p>
					<p className="mt-1 text-[10px] text-gray-400 sm:text-[11px]">Analytics Summary</p>
				</div>
			</div>

			{/* Legend */}
			<div className="grid grid-cols-2 gap-5 pl-10 lg:gap-2 xl:gap-10">
				<div className="flex items-center gap-2">
					<span className="h-3 w-3 rounded-full bg-white"></span>
					<p className="text-sm text-gray-300 sm:text-base">Legal Expenses</p>
				</div>
				<div className="flex items-center gap-2">
					<span className="h-3 w-3 rounded-full bg-[#FF4D4D]"></span>
					<p className="text-sm text-gray-300 sm:text-base">Deposit</p>
				</div>
				<div className="flex items-center gap-2">
					<span className="h-3 w-3 rounded-full bg-[#9ca3af]"></span>
					<p className="text-sm text-gray-300 sm:text-base">Mortgage Amount</p>
				</div>
				<div className="flex items-center gap-2">
					<span className="h-3 w-3 rounded-full bg-[#DC2626]"></span>
					<p className="text-sm text-gray-300 sm:text-base">Interest</p>
				</div>
			</div>
		</div>
	);
};

export default AnalyticsSummary;
