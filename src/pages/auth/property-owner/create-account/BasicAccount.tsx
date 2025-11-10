import BasicInformation from './BasicInformation';
import ContactInfo from './ContactInfo';
import SecurityDetails from './SecurityDetails';

const BasicAccount = () => {
	return (
		<main>
			<BasicInformation />
			<ContactInfo />
			<SecurityDetails />
		</main>
	);
};

export default BasicAccount;
