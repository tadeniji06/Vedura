import {
	polo,
	cas,
	chop,
	wtp,
} from "../../assets";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { formLink } from "../../utils/data";

const Perks = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		threshold: 0.1,
	});
	const [hoveredCard, setHoveredCard] =
		useState(null);

	const perkDetails = [
		{
			id: 1,
			title: "Polo",
			img: polo,
			body: "Experience the grace and tradition of one of the world's most prestigious sports at Vedura's private polo grounds. Surrounded by serene landscapes, our polo facility offers a unique blend of athletic elegance and countryside charm.",
			icon: "🏇",
			gradient: "from-amber-500 to-orange-600",
		},
		{
			id: 2,
			title: "Casino",
			img: cas,
			body: "Step into a world of refined entertainment where luxury meets excitement. Vedura's private casino offers a tasteful escape for leisure, with discreet elegance and high-end ambiance at its core.",
			icon: "🎰",
			gradient: "from-purple-500 to-pink-600",
		},
		{
			id: 3,
			title: "WaterPark",
			img: wtp,
			body: "Dive into a world of fun and relaxation at Vedura's exclusive water park. With its thrilling slides, lazy rivers, and serene pools, this aquatic paradise offers a perfect escape for families and friends alike.",
			icon: "💦",
			gradient: "from-blue-500 to-cyan-600",
		},
		// {
		//   id: 3,
		//   title: "Helipad",
		//   img: chop,
		//   body: "Designed for seamless, private arrivals, Vedura's exclusive helipad offers effortless access and convenience - a statement for residents who value time and elevated living.",
		//   icon: "🚁",
		//   gradient: "from-blue-500 to-cyan-600",
		// },
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 100, rotateX: -15 },
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		rest: { scale: 1, filter: "brightness(0.8)" },
		hover: {
			scale: 1.1,
			filter: "brightness(1.1)",
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	const overlayVariants = {
		rest: { opacity: 0.6 },
		hover: {
			opacity: 0.3,
			transition: { duration: 0.3 },
		},
	};

	const contentVariants = {
		rest: { y: 20, opacity: 0.9 },
		hover: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants = {
		rest: { scale: 1, y: 10, opacity: 0 },
		hover: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		tap: { scale: 0.95 },
	};

	const iconVariants = {
		rest: { rotate: 0, scale: 1 },
		hover: {
			rotate: [0, -10, 10, 0],
			scale: 1.2,
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.section
			ref={ref}
			className='py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'
			variants={containerVariants}
			initial='hidden'
			animate={isInView ? "visible" : "hidden"}
		>
			{/* Background decorative elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					className='absolute -top-40 -right-40 w-80 h-80 bg-primary-peach/20 rounded-full'
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
				<motion.div
					className='absolute -bottom-40 -left-40 w-80 h-80 bg-primary-green/10 rounded-full'
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					className='text-center mb-16'
					variants={headerVariants}
				>
					<motion.div
						className='inline-block mb-4'
						whileHover={{ scale: 1.05 }}
					>
						<span className='text-6xl'>✨</span>
					</motion.div>
					<motion.h2
						className='text-4xl md:text-6xl font-bold text-primary-green mb-6'
						whileHover={{
							// backgroundImage: "linear-gradient(45deg, #1e3d36, #ddd1b4)",
							// WebkitBackgroundClip: "text",
							// WebkitTextFillColor: "transparent",
							transition: { duration: 0.3 },
						}}
					>
						Exclusive Perks
					</motion.h2>
					<motion.p
						className='text-xl text-gray-600 max-w-3xl mx-auto'
						initial={{ opacity: 0 }}
						animate={
							isInView
								? { opacity: 1 }
								: { opacity: 0 }
						}
						transition={{
							delay: 0.5,
							duration: 0.8,
						}}
					>
						Indulge in world-class amenities
						designed for the discerning few. Where
						luxury meets lifestyle, and every
						moment is extraordinary.
					</motion.p>
				</motion.div>

				{/* Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{perkDetails.map((perk, index) => (
						<motion.div
							key={perk.id}
							className='group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer'
							variants={cardVariants}
							initial='rest'
							whileHover='hover'
							onHoverStart={() =>
								setHoveredCard(perk.id)
							}
							onHoverEnd={() =>
								setHoveredCard(null)
							}
							whileTap={{ scale: 0.98 }}
							style={{
								transformStyle: "preserve-3d",
								perspective: "1000px",
							}}
						>
							{/* Background Image */}
							<motion.div
								className='absolute inset-0'
								variants={imageVariants}
							>
								<img
									src={perk.img}
									alt={perk.title}
									className='w-full h-full object-cover'
								/>
							</motion.div>

							{/* Gradient Overlay */}
							<motion.div
								className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`}
								variants={overlayVariants}
							/>

							{/* Animated Icon */}
							<motion.div
								className='absolute top-6 right-6 text-4xl'
								variants={iconVariants}
							>
								{perk.icon}
							</motion.div>

							{/* Content */}
							<motion.div
								className='absolute inset-0 p-8 flex flex-col justify-end text-white'
								variants={contentVariants}
							>
								<motion.div
									className={`w-16 h-1 bg-gradient-to-r ${perk.gradient} mb-4 rounded-full`}
									initial={{ width: 0 }}
									animate={
										hoveredCard === perk.id
											? { width: "4rem" }
											: { width: "2rem" }
									}
									transition={{ duration: 0.3 }}
								/>

								<motion.h3
									className='text-3xl font-bold mb-4'
									animate={
										hoveredCard === perk.id
											? { scale: 1.05 }
											: { scale: 1 }
									}
								>
									{perk.title}
								</motion.h3>

								<motion.p
									className='text-gray-200 leading-relaxed mb-6 text-sm'
									animate={
										hoveredCard === perk.id
											? { opacity: 1 }
											: { opacity: 0.8 }
									}
								>
									{perk.body}
								</motion.p>

								{/* CTA Button */}
							</motion.div>

							{/* Border Glow Effect */}
							<motion.div
								className='absolute inset-0 rounded-3xl'
								animate={
									hoveredCard === perk.id
										? {
												boxShadow: `0 0 30px rgba(30, 61, 54, 0.5)`,
										  }
										: {
												boxShadow:
													"0 0 0px rgba(30, 61, 54, 0)",
										  }
								}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA Section */}
				<motion.div
					className='text-center mt-16'
					initial={{ opacity: 0, y: 50 }}
					animate={
						isInView
							? { opacity: 1, y: 0 }
							: { opacity: 0, y: 50 }
					}
					transition={{ delay: 1, duration: 0.8 }}
				>
					<motion.p
						className='text-gray-600 mb-6 text-lg'
						whileHover={{ scale: 1.02 }}
					>
						Ready to experience luxury redefined?
					</motion.p>
					<a
						href={formLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<motion.button
							className='bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl'
							whileHover={{
								scale: 1.05,
								boxShadow:
									"0 20px 40px rgba(30, 61, 54, 0.3)",
								y: -3,
							}}
							whileTap={{ scale: 0.95 }}
						>
							<motion.span
								className='flex items-center gap-3'
								whileHover={{ x: 5 }}
							>
								Join Exclusive Waitlist
								<motion.span
									animate={{ rotate: [0, 360] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									✨
								</motion.span>
							</motion.span>
						</motion.button>
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Perks;
