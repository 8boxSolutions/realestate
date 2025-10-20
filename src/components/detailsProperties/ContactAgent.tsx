import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ContactAgent = () => {
	return (
		<div className="flex justify-end pt-5 lg:w-2xl">
			<Card className="bg-linear-to-t from-primary to-[#910000] px-3 py-11">
				<CardHeader className="">
					<CardTitle className="text-2xl text-white">Contact agent</CardTitle>
					<div className="flex items-center gap-3">
						<Avatar className="size-15">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div>
							<p className="text-white">Marie Smith</p>
							<p className="text-white/80">(+63) 123 1234 123</p>
							<p className="text-white/80">sample@gmail.com</p>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<form>
						<div className="space-y-4">
							<Input id="name" type="text" placeholder="Name" className="bg-white py-6" required />
							<Input id="email" type="Email" placeholder="Email" className="bg-white py-6" required />
							<Input id="phone" type="number" placeholder="Phone Number" className="bg-white py-6" required />
							<Input id="message" type="text" placeholder="Message" className="bg-white py-20" required />
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<Button className="rounded-full bg-secondary px-7 py-7">Send Message</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ContactAgent;
