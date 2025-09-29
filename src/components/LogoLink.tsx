import logo from '@/assets/homepage/logo.png';

interface LogoLinkProps {
	className?: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
	return (
		<a href="/" className={className}>
			<img src={logo} alt="logo" className="w-45" />
		</a>
	);
};

export default LogoLink;
