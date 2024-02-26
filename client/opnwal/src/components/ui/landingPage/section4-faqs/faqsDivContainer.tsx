import { FaqsAccordions } from './faqsAccordion';

export const FaqsDivContainer = () => {
	return (
		<div
			id='faqsDivContainer'
			className='
        drop-shadow-2xl
        grid
        mt-52
        grid-cols-1
        grid-rows-1
        col-start-1
        col-end-1
        row-start-1
        self-start
        justify-self-center
        w-[1036px]
        h-auto
        z-15
        bg-primaryBlue
        border
        border-black
        rounded-[56px]
        overflow-hidden
        bg-gradient-to-br
        from-emerald-200
        via-purple-200
        to-sky-300
      '
		>
			<div className='z-20 col-start-1 row-start-1 p-20'>
				<div className='mt-32'>
					<FaqsAccordions />
				</div>
			</div>
		</div>
	);
};
