import React from 'react';
import MortageCalculatorCard from './MortgageCalculatorCard';
import SummaryMortgageCard from './SummaryMortgageCard';
import type { summaryStats } from '@/constants/summaryAnalysisData';

interface mortgageProps {
	deposit?: number;
	setDeposit?: (value: number) => void;
	loanTerm?: number;
	setLoanTerm?: (value: number) => void;
	interestRate?: number;
	setInterestRate?: (value: number) => void;
	data?: summaryStats[];
}
const MortgageCalculatorDashboard: React.FC<mortgageProps> = ({
	deposit,
	setDeposit,
	loanTerm,
	setLoanTerm,
	interestRate,
	setInterestRate,
	data,
}) => {
	return (
		<div className="w-ful1 pt-15">
			<h1 className="text-5xl text-primary">Mortgage</h1>
			<p className="pt-2">Calculate your mortgage credit and organize the purchase of your home.*</p>

			<div className="mt-9 flex flex-col gap-10 lg:flex-row lg:justify-between">
				<MortageCalculatorCard
					deposit={deposit}
					setDeposit={setDeposit}
					loanTerm={loanTerm}
					setLoanTerm={setLoanTerm}
					interestRate={interestRate}
					setInterestRate={setInterestRate}
				/>

				<SummaryMortgageCard data={data} />
			</div>
		</div>
	);
};

export default MortgageCalculatorDashboard;
