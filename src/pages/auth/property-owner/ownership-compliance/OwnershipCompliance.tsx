import ProofAndBusiness from './ProofAndBusiness';
import EccAndCnc from './EccAndCnc';
import Requirements from './other-requirements/Requirements';

const OwnershipCompliance = () => {
	return (
		<main className="pt-10">
			<div className="space-y-2">
				<h1 className="text-2xl">Ownership & Compliance Documents</h1>
				<p>
					Upload the necessary Ownership & Compliance Documents to ensure your property listing meets legal and
					regulatory requirements. These documents help us verify legitimacy and maintain trust across the platform.
				</p>
			</div>

			<ProofAndBusiness />
			<EccAndCnc />
			<Requirements />
		</main>
	);
};

export default OwnershipCompliance;
