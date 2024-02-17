import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import React, { Key } from 'react';

type FAQ = {
	q: string;
	a: string;
};

type FAQs = {
	[key: number]: FAQ;
};

const faqs: FAQs = {
	1: {
		q: 'What is the commission structure?',
		a: "All commissions are negotiatiable between the artist and the business, however our platform provides a simple way to do so and commissions start at 25%. That's 50% less than the national average consignment commission rate.",
	},
	2: {
		q: 'Are there any transaction fees?',
		a: 'The Opnwal platform charges a flat 3% fee per transaction',
	},
	3: {
		q: 'How do I get paid?',
		a: 'We make payments easy through our Stripe API Integration. ',
	},
	4: {
		q: 'How do you handle delivery?',
		a: 'As of right now, the artist remains in charge of delivery, however we do plan on rolling out integration with local and trusted delivery partners.',
	},
	5: {
		q: 'How do you handle installation?',
		a: 'At the moment, artists remain in charge of installation, however we do plan on integrating with local and trusted installation partners',
	},
};

export const FaqsAccordions = () => {
	return (
		<>
			{Object.values(faqs).map((faq: FAQ, index: Key) => (
				<div
					className='
						w-full
						h-auto
						mb-10
						bg-white
						border-2
						border-black
						rounded-full
						p-5
					'
				>
					<Accordion style={{}} key={index} type='single' collapsible>
						<AccordionItem value={`item-${index}`}>
							<AccordionTrigger>{faq.q}</AccordionTrigger>
							<AccordionContent>{faq.a}</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			))}
		</>
	);
};
