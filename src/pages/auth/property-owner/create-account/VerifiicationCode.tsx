import { BiSolidMessageCheck } from 'react-icons/bi';
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
import { Button } from '@/components';
import { Checkbox } from '@/components';
import { Input } from '@/components';
import { Label } from '@/components';

const VerifiicationCode = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2 pb-5">
				<h1 className="text-2xl">Verification Code</h1>
				<p>
					We've sent a verification code to your registered email address (maryjanecruz@gmail.com). Enter the code below
					to confirm your email address and complete the registration process.
				</p>
			</div>

			<div className="max-w-xl space-y-2">
				<div className="flex">
					<Label className="text-xl font-normal">Verification Code</Label>
					<span className="text-primary">*</span>
				</div>
				<Input type="text" placeholder="Enter Verification Code" className="rounded-full py-6" />
			</div>

			<Dialog>
				<DialogTrigger className="pt-2 text-[#0080DB]">Try another way to get a code</DialogTrigger>
				<DialogContent className="sm:max-w-xl sm:py-10">
					<DialogHeader>
						<div className="flex w-full flex-col items-center">
							<BiSolidMessageCheck size={100} className="text-primary" />
							<DialogTitle className="text-xl font-bold text-primary">Get Verification Code via SMS</DialogTitle>
						</div>
						<DialogDescription className="flex gap-3">
							<Checkbox id="verfication" />
							<Label htmlFor="verification" className="font-normal text-[#232323]">
								<div className="space-y-1">
									<p>Use my phone number to get a verification code.</p>
									<p>We'll send a unique code via SMS to the phone number you provided. </p>
								</div>
							</Label>
						</DialogDescription>
					</DialogHeader>
					<div className="pt-2">
						<Input type="number" placeholder="Phone Number" className="rounded-full px-5 py-6" />
					</div>
					<DialogFooter className="flex justify-between">
						<DialogClose asChild>
							<Button variant="outline" className="w-65 py-5 text-lg font-bold">
								Cancel
							</Button>
						</DialogClose>
						<Button className="w-65 py-5 text-lg font-bold">Send</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default VerifiicationCode;
