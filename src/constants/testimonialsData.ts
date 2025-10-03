import img1 from '@/assets/homepage/testimonials/img1.jpg';
import img2 from '@/assets/homepage/testimonials/img2.jpg';
import img3 from '@/assets/homepage/testimonials/img3.jpg';
import img4 from '@/assets/homepage/testimonials/img4.jpg';
import img5 from '@/assets/homepage/testimonials/img5.jpg';
import img6 from '@/assets/homepage/testimonials/img6.jpg';
import img7 from '@/assets/homepage/testimonials/img7.jpg';
import img8 from '@/assets/homepage/testimonials/img8.jpg';
import img9 from '@/assets/homepage/testimonials/img9.jpg';

interface testimonialsCard {
	name: string;
	image: string;
	position: string;
	testimonial: string;
}

export const testimonials: testimonialsCard[] = [
	{
		name: 'Maria R.,',
		image: img1,
		position: 'First-time Homebuyer',
		testimonial:
			'“Working with this team was effortless—they guided me every step of the way. I found my dream home faster than I ever imagined!”',
	},

	{
		name: 'James T.,',
		image: img2,
		position: 'ABC Corporation CEO',
		testimonial:
			'“They didn’t just sell me a house, they helped me find the perfect place to start my next chapter. Truly professional and caring service.”',
	},

	{
		name: 'Samantha L.,',
		image: img3,
		position: 'Young Professional',
		testimonial:
			'“I was nervous about buying my first property, but they made the whole process smooth and stress-free. Highly recommended!”',
	},
	{
		name: 'David M.,',
		image: img4,
		position: 'Retiree',
		testimonial:
			'“The team went above and beyond to understand my needs. They matched me with a home that felt just right from the moment I walked in.”',
	},
	{
		name: 'Angela C.,',
		image: img5,
		position: 'Property Seller',
		testimonial:
			'“Transparent, honest, and always available when I had questions. This is how real estate should be done.”',
	},
	{
		name: 'Robert K.,',
		image: img6,
		position: 'Property Seller',
		testimonial:
			'“They helped me sell my home quickly at a great price. Their market knowledge and negotiation skills are top-notch!”',
	},
	{
		name: 'Christine W.,',
		image: img7,
		position: 'Business Owner',
		testimonial:
			'“What stood out most was their attention to detail and genuine care for my family’s needs. We couldn’t be happier with our new home.”',
	},

	{
		name: 'Michael D.,',
		image: img8,
		position: 'Investor',
		testimonial:
			'“Professional, responsive, and trustworthy—I always felt like I was in good hands. They turned a stressful process into an enjoyable experience.”',
	},

	{
		name: 'Laura P., ',
		image: img9,
		position: 'Agent',
		testimonial:
			'“From start to finish, everything was handled with expertise and warmth. I’ll definitely recommend them to anyone looking to buy or sell property.”',
	},
];
