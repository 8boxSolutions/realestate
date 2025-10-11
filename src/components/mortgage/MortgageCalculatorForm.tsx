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
		<div className="flex flex-col items-center gap-5 rounded-3xl bg-primary p-5 lg:flex-row lg:gap-20 lg:p-10">
			{/* Left text */}
			<div className="flex max-w-lg flex-col gap-2 text-white">
				<h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Get help understanding calculations</h1>
				<p className="text-sm sm:text-base lg:text-lg">
					Find out how much you will pay month by month and all the expenses in your email.
				</p>
			</div>

			{/* Contact Dialog */}
			<Dialog>
				<DialogTrigger className="rounded-full bg-[#2B2B2B] p-7 text-white">Contact</DialogTrigger>
				<DialogContent className="rounded-3xl sm:max-w-[425px]">
					<DialogHeader className="flex flex-col space-y-2 pt-3">
						<DialogTitle className="text-xl font-medium">Mortgage Calculator</DialogTitle>
						<DialogDescription>
							Enter your data to send you the breakdown and the amortization plan to your email.
						</DialogDescription>
					</DialogHeader>

					{/* Form */}
					<div className="flex flex-col space-y-5 pb-4">
						<div>
							<Label>Name</Label>
							<div className="relative mt-1">
								<Input type="text" placeholder="Name" className="pl-10" />
								<div className="absolute top-2 left-3 text-[#B3B3B3]">
									<CiUser size={19} />
								</div>
							</div>
						</div>

						<div>
							<Label>Email</Label>
							<div className="relative mt-1">
								<Input type="email" placeholder="Email" className="pl-10" />
								<div className="absolute top-2 left-3 text-[#B3B3B3]">
									<MdOutlineEmail size={19} />
								</div>
							</div>
						</div>

						<div>
							<Label>Phone</Label>
							<PhoneInput
								defaultCountry="ph"
								value={phone}
								onChange={(phone) => setPhone(phone)}
								className="mt-1 [&_.react-international-phone-country-selector]:pr-3"
							/>
						</div>

						<div>
							<Label>Where do you plan to buy your property</Label>
							<Input type="text" placeholder="Enter your message" className="mt-1 h-20" />
						</div>
					</div>

					<Separator />

					<DialogFooter className="flex w-full flex-col-reverse gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
						<DialogClose asChild>
							<Button variant="link" className="w-full text-lg sm:w-auto">
								Cancel
							</Button>
						</DialogClose>
						<Button
							type="submit"
							className="w-full rounded-full bg-[#2B2B2B] px-7 py-6 text-lg text-white hover:bg-[#3b3b3b] sm:w-auto"
						>
							Send Simulation
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MortgageCalculatorForm;
