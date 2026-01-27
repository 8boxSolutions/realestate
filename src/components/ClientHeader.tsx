import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Bell } from 'lucide-react'; 
import LogoLink from './LogoLink';
import NotificationPopup from '@/components/notifpopup/NotificationPopup'; 
// 1. Import the hook
import { useUser } from '@/context/UserContext';

interface HeaderWrapperProps {
    className?: string;
    children?: ReactNode;
}

const HeaderWrapper = ({ className, children }: HeaderWrapperProps) => {
    return (
        <div className="rounded-full border-b bg-white shadow-sm">
            <div className={cn('flex h-20 items-center justify-between px-8', className)}>{children}</div>
        </div>
    );
};

const clientLinks = [
    { label: 'Home', href: '/client-home' },
    { label: 'Messages', href: '/client-messages' },
    { label: 'Transactions', href: '/client-transaction' },
    { label: 'Favorites', href: '/client-favorite' },
];

const ClientHeader: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    // 2. Consume the context
    const { profileImage } = useUser();

    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    return (
        <div className="z-50 p-10">
            <HeaderWrapper className="flex items-center justify-between">
                <LogoLink to="/client-home" />

                <nav className="hidden items-center gap-8 md:flex">
                    {clientLinks.map((link) => {
                        const isActive = currentPath === link.href;
                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={cn(
                                    "text-base font-bold transition-colors hover:text-[#FF0000]",
                                    isActive ? "text-[#FF0000]" : "text-black"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-6 relative">
                    <button 
                        type="button" 
                        onClick={toggleNotifications}
                        aria-label="Notifications" 
                        className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                    >
                        <Bell className="h-6 w-6" />
                    </button>

                    {isNotificationsOpen && (
                        <NotificationPopup onClose={() => setIsNotificationsOpen(false)} />
                    )}

                    <Link 
                        to="/profile" 
                        className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all"
                    >
                        {/* 3. Use the dynamic image from Context */}
                        <img 
                            src={profileImage}
                            alt="Profile" 
                            className="h-full w-full object-cover" 
                        />
                    </Link>
                </div>
            </HeaderWrapper>
        </div>
    );
};

export default ClientHeader;