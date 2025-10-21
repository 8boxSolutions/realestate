import { useState } from 'react';
import { useParams } from 'react-router-dom';

import PropertiesDetailsCard from '@/components/detailsProperties/PropertyDetailsCard';

import { developmentProperties } from '@/constants/PropertiesDetailsData';
import { summaryData } from '@/constants/summaryAnalysisData';

import area from '@/assets/imgs/area.svg';
import beds from '@/assets/imgs/beds.svg';
import baths from '@/assets/imgs/baths.svg';
import floor from '@/assets/imgs/floor.svg';
import construction from '@/assets/imgs/construction.svg';
import elevator from '@/assets/imgs/elevator.svg';
import parking from '@/assets/imgs/parking.svg';
import wifi from '@/assets/imgs/wifi.svg';
import tv from '@/assets/imgs/TV.svg';

const NewDevelopmentsDetails = () => {
	const [deposit, setDeposit] = useState<number>(10);
	const [loanTerm, setLoanTerm] = useState<number>(5);
	const [interestRate, setInterestRate] = useState<number>(10);
	const { developmentId } = useParams<{ developmentId: string }>();
	const property = developmentProperties.find((item) => item.id === developmentId);

	const icons = {
		totalArea: area,
		bedRooms: beds,
		bathrooms: baths,
		floor: floor,
		constructionYear: construction,
		elevator: elevator,
		parking: parking,
		wifi: wifi,
		TV: tv,
	};

	return (
		<div>
			<PropertiesDetailsCard
				dataDetails={property}
				icons={icons}
				breadCrumb="NEW DEVELOPMENTS > HOUSE > "
				type="house"
				showAvailable={true}
				showMortgageCalculator={true}
				deposit={deposit}
				setDeposit={setDeposit}
				loanTerm={loanTerm}
				setLoanTerm={setLoanTerm}
				interestRate={interestRate}
				setInterestRate={setInterestRate}
				data={summaryData}
			/>
		</div>
	);
};

export default NewDevelopmentsDetails;
