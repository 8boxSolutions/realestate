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
				{ label: 'Buy', href: '/buy' },
				{ label: 'Rent', href: '/rent' },
				{ label: 'New Developments', href: '/new-developments' },
				{ label: 'Foreclosures', href: '/foreclosures' },
				{ label: 'Resources', href: '/resources' },
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
			<div className="bg-[#F6F6F6] p-15">
				<div className="flex flex-col gap-8 md:flex-row md:justify-between">
					<div className="-mt-20 flex flex-col gap-3">
						<img src={logo} alt="Real Estate Logo" className="w-70 object-contain" />

						{/* Contact info */}
						<ul className="-mt-15 space-y-2">
							{ContactUs.map((contact, index) => (
								<li key={index} className="flex items-center gap-3 text-gray-600">
									<span className="text-lg">{contact.icon}</span>
									<span className="text-sm md:text-base">{contact.info}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex grid grid-cols-2 gap-8 space-x-20 md:flex md:gap-40">
						{footerLinks.map((section, index) => (
							<ul key={index}>
								<h3 className="text-lg font-semibold text-primary">{section.sectionTitle}</h3>
								{section.sectionLinks.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link to={link.href} className="block py-1 text-gray-600 hover:underline">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>

					<div className="flex flex-col gap-5 md:gap-20">
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
