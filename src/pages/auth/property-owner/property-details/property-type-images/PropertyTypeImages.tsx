import PropertyType from './PropertyType';
import ExteriorAndFrontage from './ExteriorAndFrontage';
import LivingAndCommonArea from './LivingAndCommonArea';
import SpecialFeatures from './SpecialFeatures';

const uploadSLots = [1, 2, 3, 4];

const PropertyTypeImages = () => {
	return (
		<main>
			<PropertyType />
			<ExteriorAndFrontage upload={uploadSLots} />
			<LivingAndCommonArea upload={uploadSLots} />
			<SpecialFeatures upload={uploadSLots} />
		</main>
	);
};

export default PropertyTypeImages;
