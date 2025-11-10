import OwnershipType from './OwnershipType';
import GovernmentIssued from './GovernmentIssued';
import ProofOwnership from './ProofOwnership';

const BusinessInfoStep = () => {
	return (
		<main>
			<OwnershipType />
			<GovernmentIssued />
			<ProofOwnership />
		</main>
	);
};

export default BusinessInfoStep;
