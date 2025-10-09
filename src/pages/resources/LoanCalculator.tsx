import { useState } from 'react';
import SummaryMortgage from '@/components/mortgage/SummaryMortgage';
import MortgageCalculatorDashboard from '@/components/mortgage/MortgageCalculatorDashboard';

const LoanCalculator = () => {
	const [deposit, setDeposit] = useState<number>(10);
	const [loanTerm, setLoanTerm] = useState<number>(5);
	const [interestRate, setInterestRate] = useState<number>(10);
	return (
		<div className="p-10">
			<div className="flex flex-col space-y-3">
				<h1 className="text-3xl font-normal text-primary">BANK LOAN SIMULATOR</h1>
				<h2 className="mt-5">Simulate your mortgarge</h2>
				<div className="mt-5 flex max-w-4xl flex-col space-y-5">
					<p>
						With our convenient mortgage loan calculator, we at Real Estate make it simple to determine the estimated
						cost of your mortgage. You might feel more at ease knowing what you can afford by figuring out your expected
						loan amount, monthly payments, and upfront expenses.
					</p>
					<p>
						In order to examine how a home fits into your budget and how it would affect your existing way of life, you
						can also email yourself the findings of this data.
					</p>
				</div>
			</div>

			<div>
				<MortgageCalculatorDashboard
					deposit={deposit}
					setDeposit={setDeposit}
					loanTerm={loanTerm}
					setLoanTerm={setLoanTerm}
					interestRate={interestRate}
					setInterestRate={setInterestRate}
				/>

				<SummaryMortgage />
			</div>
		</div>
	);
};

export default LoanCalculator;
