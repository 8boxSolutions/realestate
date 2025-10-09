import React from 'react';
import MortageCalculatorCard from './MortgageCalculatorCard';

interface mortgageProps {
	deposit: number;
	setDeposit: (value: number) => void;
	loanTerm: number;
	setLoanTerm: (value: number) => void;
	interestRate: number;
	setInterestRate: (value: number) => void;
}
const MortgageCalculatorDashboard: React.FC<mortgageProps> = ({
	deposit,
	setDeposit,
	loanTerm,
	setLoanTerm,
	interestRate,
	setInterestRate,
}) => {
	return (
		<div className="mt-13">
			<h1 className="text-5xl text-primary">Mortgage</h1>
			<p className="pt-2">Calculate your mortgage credit and organize the purchase of your home.*</p>

			<MortageCalculatorCard
				deposit={deposit}
				setDeposit={setDeposit}
				loanTerm={loanTerm}
				setLoanTerm={setLoanTerm}
				interestRate={interestRate}
				setInterestRate={setInterestRate}
			/>
		</div>
	);
};

export default MortgageCalculatorDashboard;
