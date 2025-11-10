import file from '@/assets/file.svg';
import { Input } from '@/components';

const EccAndCnc = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2 pb-3">
				<h1 className="text-2xl">Environmental Compliance Certificate (ECC) / CNC</h1>
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
	);
};

export default EccAndCnc;
