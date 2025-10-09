import { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { CiUser } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
const MortgageCalculatorForm = () => {
	const [phone, setPhone] = useState<string>('');

	return (
		<div className="flex w-full flex-col items-center rounded-2xl bg-primary p-10 md:flex-row md:justify-between">
			<div className="flex flex-col gap-2 text-white">
				<h1 className="text-3xl">Get help understanding calculations</h1>
				<p className="max-w-md">Find out how much you will pay month by month and all the expenses in your email.</p>
			</div>

			{/* Card */}
			<Dialog>
				<DialogTrigger className="mt-5 rounded-full bg-[#2B2B2B] px-10 py-5 text-lg text-white">Contact</DialogTrigger>
				<DialogContent className="rounded-4xl sm:max-w-[425px]">
					<DialogHeader className="flex flex-col space-y-2 pt-3">
						<DialogTitle className="text-xl font-medium">Mortgage Calculator</DialogTitle>
						<DialogDescription>
							Enter your data to send you the breakdown and the amortixation plan to your email
						</DialogDescription>
					</DialogHeader>

					<div className="flex flex-col space-y-5 pb-4">
						<Label>Name</Label>
						<div className="relative">
							<Input type="text" placeholder="Name" className="pl-10" />
							<div className="absolute top-2 left-3 text-[#B3B3B3]">
								<CiUser size={19} />
							</div>
						</div>

						<Label>Email</Label>
						<div className="relative">
							<Input type="email" placeholder="Email" className="pl-10" />
							<div className="absolute top-2 left-3 text-[#B3B3B3]">
								<MdOutlineEmail size={19} />
							</div>
						</div>

						<Label className="text-sm font-medium text-gray-700">Phone</Label>
						<div>
							<PhoneInput
								defaultCountry="ph"
								value={phone}
								onChange={(phone) => setPhone(phone)}
								className="[&_.react-international-phone-country-selector]:pr-3"
							/>
						</div>

						<Label>Where do you plan to buy your property</Label>
						<div>
							<Input type="text" placeholder="Enter your message" className="h-26" />
						</div>
					</div>

					<Separator />

					<DialogFooter>
						<div className="flex w-full items-center justify-between py-3">
							<DialogClose asChild>
								<Button variant="link" className="text-lg">
									Cancel
								</Button>
							</DialogClose>
							<Button type="submit" className="rounded-full bg-[#2B2B2B] px-7 py-7 text-lg text-white">
								Send Simulation
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MortgageCalculatorForm;
