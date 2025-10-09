import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import MortgageCalculatorForm from './MortgageCalculatorForm';
interface mortgageCalculatorProps {
	deposit: number;
	setDeposit: (value: number) => void;
	loanTerm: number;
	setLoanTerm: (value: number) => void;
	interestRate: number;
	setInterestRate: (value: number) => void;
}
const MortgageCalculatorCard: React.FC<mortgageCalculatorProps> = ({
	deposit,
	setDeposit,
	loanTerm,
	setLoanTerm,
	interestRate,
	setInterestRate,
}) => {
	return (
		<div className="mt-9 ml-4 flex max-w-5xl flex-col gap-10 rounded-2xl bg-[#2B2B2B] p-10">
			<Card className="w-full pt-10">
				<CardHeader className="flex flex-col">
					<CardTitle className="text-lg text-[#3F3E5E]">Mortgage Calculator</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex w-full flex-col space-y-2">
						<label>Property Price (PHP)</label>
						<Input type="number" placeholder="Placeholder" />
					</div>

					<div className="pt-10">
						<label className="font-lg mb-2 block text-lg font-bold text-[#3F3E5E]">Deposit</label>
						<div className="flex items-center gap-10">
							<Slider
								value={[deposit]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setDeposit(value[0])}
								className="flex-1"
							/>
							<div className="w-16 rounded-md bg-gray-100 py-1 text-center font-medium">{deposit} %</div>
						</div>

						<Separator className="my-8 rounded-full border-1" />

						<label className="font-lg mb-2 block text-lg font-bold text-[#3F3E5E]">Loan Term (years)</label>
						<div className="flex items-center gap-10">
							<Slider
								value={[loanTerm]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setLoanTerm(value[0])}
								className="flex-1"
							/>
							<div className="w-16 rounded-md bg-gray-100 py-1 text-center font-medium">{loanTerm} (years)</div>
						</div>

						<label className="font-lg mb-4 block text-lg font-bold text-[#3F3E5E]">Interest Rate </label>
						<div className="flex items-center gap-10">
							<Slider
								value={[interestRate]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setInterestRate(value[0])}
								className="flex-1"
							/>
							<div className="w-16 rounded-md bg-gray-100 py-1 text-center font-medium">{interestRate} %</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<MortgageCalculatorForm />
		</div>
	);
};

export default MortgageCalculatorCard;
