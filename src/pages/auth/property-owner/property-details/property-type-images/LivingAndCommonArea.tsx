import { Input } from '@/components';
import drag from '@/assets/drop-photo.svg';

interface uploadSlotProps {
	upload: number[];
}

const LivingAndCommonArea: React.FC<uploadSlotProps> = ({ upload }) => {
	return (
		<section className="space-y-5 pt-15">
			<h1 className="text-2xl">Living and common areas (living room, dining area, open spaces)</h1>
			<div className="grid grid-cols-3 gap-5">
				{upload.map((_, index) => (
					<div
						key={index}
						className={`flex cursor-pointer flex-col items-center justify-center bg-[#D9D9D933] text-center ${index === 0 ? 'col-span-3 h-110' : 'h-60'}`}
					>
						<img src={drag} alt="file" className="mb-3 h-10 w-10" />
						<p className="text-[#232323]">Drag and drop your images here or,</p>

						<label htmlFor={`file-upload-${index}`} className="cursor-pointer text-[#0080DB] hover:underline">
							Click to browse
						</label>

						<Input id={`file-upload-${index}`} type="file" multiple accept=".png,.jpg,.jpeg,.pdf" className="hidden" />

						<span className="mt-2 text-[#23232380]">(Individual file size limit is 25mb)</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default LivingAndCommonArea;
