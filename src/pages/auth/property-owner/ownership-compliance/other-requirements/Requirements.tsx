import file from '@/assets/file.svg';
import { Input } from '@/components';

const Requirements = () => {
	return (
		<div className="space-y-10 pt-10">
			<div className="space-y-2">
				<h1 className="text-2xl">Other Requirements</h1>
				<p>
					Please upload any additional environmental permits, clearances, or certifications required for your property
					listing, such as:
				</p>
			</div>
			{/* Protected Area / Special Permit */}
			<section className="">
				<div className="space-y-2 pb-3">
					<div className="flex items-center gap-2">
						<h1 className="text-2xl">Protected Area / Special Permit </h1>
						<span>(If Applicable)</span>
					</div>
					<p>Upload a permit if your property is located within a protected area or requires special authorization.</p>
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
			</section>

			{/* Waste Management Plan */}
			<section>
				<div className="space-y-2 pb-3">
					<h1 className="text-2xl">Waste Management Plan</h1>
					<p>
						Upload a copy of your Waste Management Plan to show compliance with proper waste disposal and sustainability
						practices..
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
			</section>

			{/*  Water and Wastewater Permit*/}
			<section>
				<div className="space-y-2 pb-3">
					<div className="flex">
						<h1 className="text-2xl">Water and Wastewater Permit</h1>
						<span>(If Applicable)</span>
					</div>
					<p>Upload your ECC or CNC to demonstrate compliance with environmental regulations.</p>
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
			</section>

			{/* Fire Safety Certificate */}
			<section>
				<div className="space-y-2 pb-3">
					<h1 className="text-2xl">Fire Safety Certificate</h1>
					<p>
						Upload your Fire Safety Certificate to confirm that your property meets fire protection and safety
						standards.
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
			</section>
		</div>
	);
};

export default Requirements;
