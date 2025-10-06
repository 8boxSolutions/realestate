import logo from '@/assets/homepage/logo.png';
import { useNavigate } from 'react-router-dom';
interface LogoLinkProps {
	className?: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
	const navigate = useNavigate();
	return (
		<a onClick={() => navigate('/')} className={className}>
			<img src={logo} alt="logo" className="w-45" />
		</a>
	);
};

export default LogoLink;
