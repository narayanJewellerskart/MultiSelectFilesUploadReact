import { SlButton } from "@shoelace-style/shoelace/dist/react";

const BasicTestFile = () => {
	return (
		<div className='flex flex-wrap items-center justify-center gap-5 py-8'>
			<SlButton variant='default' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Default</p>
			</SlButton>
			<SlButton variant='primary' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Primary</p>
			</SlButton>
			<SlButton variant='success' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Success</p>
			</SlButton>
			<SlButton variant='neutral' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Neutral</p>
			</SlButton>
			<SlButton variant='warning' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Warning</p>
			</SlButton>
			<SlButton variant='danger' className='w-96'>
				<p className='py-6 px-5 font-bold tracking-widest'>Normal Button Danger</p>
			</SlButton>
			{/* -----------Size------------- */}
			<SlButton variant='primary' size='small' className='w-96'>
				<p className='py-2 px-5 font-bold tracking-widest'>Primary Size Small</p>
			</SlButton>
			<SlButton variant='success' size='medium' className='w-96'>
				<p className='py-2 px-5 font-bold tracking-widest'>Success Size Medium</p>
			</SlButton>
			<SlButton variant='neutral' size='large' className='w-96'>
				<p className='py-2 px-5 font-bold tracking-widest'>Neutral Size Large</p>
			</SlButton>
		</div>
	);
};

export default BasicTestFile;
