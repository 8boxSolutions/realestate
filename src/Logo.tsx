import logo from '@/assets/logo-login.png';

interface logoProps {
	className?: string;
}

const Logo: React.FC<logoProps> = ({ className }) => {
	return (
		<div className={className}>
			<img src={logo} alt="Logo" className={className} />
		</div>
	);
};

export default Logo;
