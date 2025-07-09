import Header from "../../layouts/Header";
import { motion } from "motion/react";

const ContactHero = () => {
	return (
		<div className='relative'>
			<div className='relative bg-primary-green w-full min-h-[350px] bg-center'>
				<div className='absolute top-0 left-0 w-full z-50'>
					<Header />
				</div>

				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/20 z-30'></div>

				{/* Main content */}
				<div className='relative z-40 flex flex-col md:flex-row justify-center gap-10 px-4 md:px-24 md:pt-[180px] pt-[130px] pb-10'>
					{/* Left Text Block */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='flex flex-col gap-4 text-white text-center md:text-left max-w-xl'
					>
						<span className='text-2xl md:text-4xl font-bold leading-snug'>
							We'd Love to Hear From You
						</span>
						<p className='text-sm md:text-base leading-relaxed'>
							Whether you're ready to secure your space or simply want
							to learn <br />
							more, our team is here to guide you every step of the
							way.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default ContactHero;
