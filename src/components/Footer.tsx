import { Link } from 'react-router-dom';
import { FaPhoneFlip } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import logo from '@/assets/homepage/logo.png';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import CopyRight from './CopyRight';
import { ReactElement } from 'react';

interface FooterSection {
	sectionTitle: string;
	sectionLinks: { label: string; href: string }[];
}

const Footer = () => {
	const footerLinks: FooterSection[] = [
		{
			sectionTitle: 'Quick Links',
			sectionLinks: [
				{ label: 'Home', href: '/' },
				{ label: 'Buy', href: '/' },
				{ label: 'Rent', href: '/' },
				{ label: 'New Developments', href: '/' },
				{ label: 'Foreclosures', href: '/' },
				{ label: 'Resources', href: '/' },
			],
		},
		{
			sectionTitle: 'Properties',
			sectionLinks: [
				{ label: 'Manila', href: '/' },
				{ label: 'Pampanga', href: '/' },
				{ label: 'Makati', href: '/' },
				{ label: 'Cebu', href: '/' },
				{ label: 'Quezon', href: '/' },
			],
		},
	];

	const ContactUs: { icon: ReactElement; info: string }[] = [
		{ icon: <CiLocationOn />, info: 'Manila, Philippines' },
		{ icon: <FaPhoneFlip />, info: '+63 912 123 1234' },
		{ icon: <MdEmail />, info: 'real.estate@gmail.com' },
	];

	return (
		<>
			<div className="bg-[#F6F6F6] px-6 py-10 sm:px-10 lg:p-15">
				<div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
					{/* Logo + Contact */}
					<div className="-mt-10 flex flex-col gap-3 sm:-mt-20">
						<img src={logo} alt="Real Estate Logo" className="w-40 object-contain sm:w-60 lg:w-70" />

						<ul className="mt-4 space-y-2 sm:-mt-15">
							{ContactUs.map((contact, index) => (
								<li key={index} className="flex items-center gap-3 text-gray-600">
									<span className="text-base sm:text-lg">{contact.icon}</span>
									<span className="text-sm sm:text-base">{contact.info}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Links */}
					<div className="grid grid-cols-2 gap-8 sm:gap-12 md:flex md:gap-20 lg:gap-40">
						{footerLinks.map((section, index) => (
							<ul key={index} className="text-center sm:text-left">
								<h3 className="text-base font-semibold text-primary sm:text-lg">{section.sectionTitle}</h3>
								{section.sectionLinks.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link to={link.href} className="block py-1 text-sm text-gray-600 hover:underline sm:text-base">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>

					{/* Subscribe + Socials */}
					<div className="flex flex-col gap-6 sm:gap-10 md:gap-20">
						<Subscribe />
						<SocialLinks />
					</div>
				</div>
			</div>
			<CopyRight />
		</>
	);
};

export default Footer;
