import React from 'react';

interface UserIconProps {
	icon?: string;
}
const UserIcon: React.FC<UserIconProps> = ({ icon }) => {
	return (
		<div>
			<img src={icon} alt="User Icon" />
		</div>
	);
};

export default UserIcon;
