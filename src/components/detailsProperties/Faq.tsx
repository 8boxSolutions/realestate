import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
	{
		id: 1,
		question: 'How do I schedule a viewing?',
		answer:
			'You can contact us directly to set a date and time that works for you. Our agent will guide you through the property and answer your questions.',
	},

	{
		id: 2,
		question: 'Are the prices negotiable?',
		answer:
			'In most cases, yes. Prices may vary depending on the seller’s terms, market conditions, and property demand.',
	},

	{
		id: 3,
		question: 'What documents do I need to buy a property?',
		answer:
			'Generally, you’ll need a valid ID, proof of income or employment, and a reservation fee. Additional requirements may apply for financing.',
	},

	{
		id: 4,
		question: 'Can I apply for a mortgage through your listings?',
		answer:
			'Yes, many of our properties are eligible for bank financing. Our team can assist you with the process and requirements.',
	},

	{
		id: 5,
		question: 'Are there additional fees aside from the property price?',
		answer:
			'Yes, expect charges such as taxes, legal fees, and processing costs. We’ll provide a detailed breakdown before you proceed.',
	},
];

const Faq = () => {
	return (
		<div className="pt-15">
			<h1 className="text-primary">FAQs</h1>
			<p>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

			<Accordion type="single" collapsible className="space-y-5 py-10 md:px-17">
				{faq.map((item) => (
					<AccordionItem key={item.id} value={`item-${item.id}`} className="rounded-xl bg-white px-2 shadow-xl">
						<AccordionTrigger className='no-underline" font-bold md:text-xl'>{item.question}</AccordionTrigger>
						<AccordionContent className="md:text-[0.960rem]">{item.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;
