import logo from '@/assets/homepage/logo.png';
import { useNavigate } from 'react-router-dom';

interface LogoLinkProps {
    className?: string;
    to?: string; // 1. Add optional 'to' prop
}

const LogoLink = ({ className, to = '/' }: LogoLinkProps) => { // 2. Default to '/'
    const navigate = useNavigate();
    
    return (
        // 3. Use the 'to' variable in navigate()
        // Added 'cursor-pointer' to ensure it looks clickable
        <a onClick={() => navigate(to)} className={`cursor-pointer ${className}`}>
            <img src={logo} alt="logo" className="w-45" />
        </a>
    );
};

export default LogoLink;