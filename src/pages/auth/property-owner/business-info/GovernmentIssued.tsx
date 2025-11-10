import file from '@/assets/file.svg';
import { Input } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const governmentIssuedIDs = [
	{
		value: 'passport',
		label: 'Passport',
	},
	{
		value: 'driver license',
		label: 'Driver License ',
	},
	{
		value: 'philhealth',
		label: 'PhilHealth ID',
	},
	{
		value: 'sss',
		label: 'SSS ID',
	},
	{
		value: 'umid',
		label: 'UMID',
	},
	{
		value: 'voter',
		label: 'Voter ID',
	},
	{
		value: 'postal',
		label: 'Postal ID',
	},
	{
		value: 'prc',
		label: 'PRC ID',
	},
];
const GovernmentIssued = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2 pb-5">
				<h1 className="text-2xl">Government-Issued ID</h1>
				<p>
					Please upload a valid government-issued ID (such as a driver's license, passport, or national ID) to verify
					your identity. This ensures the security and authenticity of your account.
				</p>
			</div>
			<div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 p-10 text-center">
				<img src={file} alt="file" className="mb-3 h-10 w-10" />
				<p className="text-[#232323]">Drag and drop your file here or,</p>

				<label htmlFor="file-upload" className="cursor-pointer text-[#0080DB] hover:underline">
					Click to browse
				</label>

				<Input id="file-upload" type="file" multiple accept=".png,.jpg,.jpeg,.pdf" className="hidden" />

				<span className="mt-2 text-[#23232380]">(Individual file size limit is 25mb)</span>
			</div>
			<div className="space-y-3 pt-10">
				<div className="flex">
					<h2 className="text-2xl">Government-Issued Type </h2>
					<span className="text-primary">*</span>
				</div>

				<Select>
					<SelectTrigger className="text-md w-full rounded-full px-5 py-6">
						<SelectValue placeholder="Government-Issued Type" />
					</SelectTrigger>

					<SelectContent className="">
						{governmentIssuedIDs.map((item, index) => (
							<SelectItem key={index} value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</section>
	);
};

export default GovernmentIssued;
