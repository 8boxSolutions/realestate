import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { Button } from './ui/button';

const SocialLinks = () => {
	const SocialLinks: { icon: ReactElement; link: string }[] = [
		{ icon: <FaFacebookF />, link: '/' },
		{ icon: <FaInstagram />, link: '/' },
		{ icon: <FaLinkedinIn />, link: '/' },
		{ icon: <FaTwitter />, link: '/' },
	];
	return (
		<div className="flex flex-col gap-2 md:gap-4">
			<h1 className="text-lg font-semibold text-black">Follow Us on</h1>
			<ul className="flex gap-2">
				{SocialLinks.map((link, index) => (
					<li key={index}>
						<Link to={link.link}>
							<Button className="rounded-full bg-primary">{link.icon}</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
