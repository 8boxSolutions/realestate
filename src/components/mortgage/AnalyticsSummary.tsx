import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import type { summaryStats } from '@/constants/summaryAnalysisData';

interface summaryProps {
	data: summaryStats[];
}

const AnalyticsSummary: React.FC<summaryProps> = ({ data }) => {
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

			<div className="grid grid-cols-1 gap-5 pl-5 sm:grid-cols-2 md:pl-10 lg:gap-2 xl:gap-10">
				{data.map((item, index) => (
					<div key={index} className="flex items-center gap-2">
						<span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }}></span>
						<p className="text-sm text-gray-300 sm:text-base">{item.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnalyticsSummary;
