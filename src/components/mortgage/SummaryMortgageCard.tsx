import EstimatedRepaymentBox from './EstimatedRepaymentBox';
import AnalyticsSummary from './AnalyticsSummary';
import { Card } from '@/components/ui/card';
const SummaryMortgageCard = () => {
	return (
		<div className="w-full rounded-2xl bg-primary py-10 text-white lg:ml-4 xl:w-1/3">
			<div className="flex flex-col items-center space-y-3 py-9">
				<h1 className="text-2xl">Totals</h1>
				<h2 className="text-2xl">Mortgage Cost Outline</h2>
			</div>
			<EstimatedRepaymentBox />
			<AnalyticsSummary />
		</div>
	);
};

export default SummaryMortgageCard;
