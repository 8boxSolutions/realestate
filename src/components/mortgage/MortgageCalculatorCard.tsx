import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import MortgageCalculatorForm from './MortgageCalculatorForm';

interface mortgageCalculatorProps {
	deposit?: number;
	setDeposit?: (value: number) => void;
	loanTerm?: number;
	setLoanTerm?: (value: number) => void;
	interestRate?: number;
	setInterestRate?: (value: number) => void;
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
		<div className="flex w-full flex-col gap-8 rounded-2xl bg-[#2B2B2B] p-6 sm:p-8 md:p-10 xl:w-1/2">
			<Card className="pt-6 sm:pt-10">
				<CardHeader className="flex flex-col">
					<CardTitle className="text-base text-[#3F3E5E] sm:text-lg">Mortgage Calculator</CardTitle>
				</CardHeader>

				<CardContent>
					{/* Property Price */}
					<div className="flex w-full flex-col space-y-2">
						<label className="text-sm sm:text-base">Property Price (PHP)</label>
						<Input type="number" placeholder="Enter property price" />
					</div>

					{/* Deposit */}
					<div className="pt-8 sm:pt-10">
						<label className="mb-2 block text-base font-bold text-[#3F3E5E] sm:text-lg">Deposit</label>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
							<Slider
								value={[deposit ?? 0]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setDeposit?.(value[0])}
								className="flex-1"
							/>
							<div className="w-20 rounded-md bg-gray-100 py-1 text-center text-sm font-medium sm:text-base">
								{deposit ?? 0} %
							</div>
						</div>

						<Separator className="my-8 rounded-full border-1" />

						{/* Loan Term */}
						<label className="mb-2 block text-base font-bold text-[#3F3E5E] sm:text-lg">Loan Term (years)</label>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
							<Slider
								value={[loanTerm ?? 0]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setLoanTerm?.(value[0])}
								className="flex-1"
							/>
							<div className="w-20 rounded-md bg-gray-100 py-1 text-center text-sm font-medium sm:text-base">
								{loanTerm ?? 0} yrs
							</div>
						</div>

						{/* Interest Rate */}
						<label className="mt-8 mb-2 block text-base font-bold text-[#3F3E5E] sm:text-lg">Interest Rate</label>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
							<Slider
								value={[interestRate ?? 0]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setInterestRate?.(value[0])}
								className="flex-1"
							/>
							<div className="w-20 rounded-md bg-gray-100 py-1 text-center text-sm font-medium sm:text-base">
								{interestRate ?? 0} %
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<MortgageCalculatorForm />
		</div>
	);
};

export default MortgageCalculatorCard;
