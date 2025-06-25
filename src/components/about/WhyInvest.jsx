import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const WhyInvest = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		threshold: 0.1,
	});
	const [hoveredCard, setHoveredCard] =
		useState(null);

	const investmentReasons = [
		{
			id: 1,
			title: "First of its kind on the mainland",
			description:
				"Be part of a groundbreaking development that sets new standards for luxury living and investment opportunities.",
			icon: "mdi:trophy-award",
			percentage: "1st",
			gradient:
				"from-primary-peach to-primary-green",
			bgGradient:
				"from-white via-primary-green/15 to-primary-peach/12",
			shadowColor: "shadow-primary-peach/30",
			stats: "Pioneer Development",
			iconColor: "text-white",
		},
		{
			id: 2,
			title: "Perfect location for your business",
			description:
				"Strategic positioning with excellent connectivity, infrastructure, and growth potential for commercial ventures.",
			icon: "mdi:map-marker-radius",
			percentage: "15min",
			gradient:
				"from-primary-green via-primary-peach to-primary-green",
			bgGradient:
				"from-white via-primary-green/15 to-primary-peach/12",
			shadowColor: "shadow-primary-green/25",
			stats: "From CBD Alausa",
			iconColor: "text-white",
		},
		{
			id: 3,
			title: "Guaranteed 70% ROI",
			description:
				"Secure your financial future with our proven track record of exceptional returns on investment.",
			icon: "mdi:trending-up",
			percentage: "70%",
			gradient:
				"from-primary-green to-primary-peach",
			bgGradient:
				"from-white via-primary-green/15 to-primary-peach/12",
			shadowColor: "shadow-primary-green/30",
			stats: "Average Annual Return",
			iconColor: "text-white",
		},
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
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 80, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const floatingVariants = {
		animate: {
			y: [-10, 10, -10],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.section
			ref={ref}
			className='py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary-peach/8 relative overflow-hidden'
			variants={containerVariants}
			initial='hidden'
			animate={isInView ? "visible" : "hidden"}
		>
			{/* Background Elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					className='absolute top-20 left-10 w-72 h-72 bg-primary-green/8 rounded-full blur-3xl'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.4, 0.6, 0.4],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className='absolute bottom-20 right-10 w-96 h-96 bg-primary-peach/12 rounded-full blur-3xl'
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header Section */}
				<motion.div
					className='text-center mb-16'
					variants={headerVariants}
				>
					<motion.div
						className='inline-flex items-center gap-3 mb-6'
						whileHover={{ scale: 1.05 }}
					>
						<motion.h2
							className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-green to-primary-peach bg-clip-text text-transparent'
							whileHover={{
								backgroundImage:
									"linear-gradient(45deg, #1e3d36, #ddd1b4, #1e3d36)",
								transition: { duration: 0.5 },
							}}
						>
							Why Invest in Vedura
						</motion.h2>
					</motion.div>

					<motion.p
						className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium'
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{
							delay: 0.3,
							duration: 0.8,
						}}
					>
						At Vedura, you don't just own land.
						You own a part of something that is{" "}
						<motion.span
							className='text-primary-green font-bold'
							whileHover={{
								scale: 1.1,
								color: "#ddd1b4",
							}}
						>
							growing
						</motion.span>
						,{" "}
						<motion.span
							className='text-primary-green font-bold'
							whileHover={{
								scale: 1.1,
								color: "#ddd1b4",
							}}
						>
							evolving
						</motion.span>
						, and set to{" "}
						<motion.span
							className='text-primary-green font-bold'
							whileHover={{
								scale: 1.1,
								color: "#ddd1b4",
							}}
						>
							thrive
						</motion.span>
						.
					</motion.p>
				</motion.div>

				{/* Investment Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{investmentReasons.map(
						(reason, index) => (
							<motion.div
								key={reason.id}
								className={`relative group cursor-pointer`}
								variants={cardVariants}
								onHoverStart={() =>
									setHoveredCard(reason.id)
								}
								onHoverEnd={() =>
									setHoveredCard(null)
								}
								whileHover={{ y: -10 }}
							>
								{/* Card Background */}
								<motion.div
									className={`relative p-8 rounded-3xl bg-gradient-to-br ${reason.bgGradient} border border-primary-green/15 backdrop-blur-sm shadow-xl transition-all duration-500`}
									whileHover={{
										boxShadow:
											"0 25px 50px -12px rgba(30, 61, 54, 0.2)",
										scale: 1.02,
										borderColor:
											"rgba(30, 61, 54, 0.3)",
									}}
									style={{
										background:
											hoveredCard === reason.id
												? `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(30,61,54,0.08) 50%, rgba(221,209,180,0.12) 100%)`
												: undefined,
									}}
								>
									{/* Floating Icon */}
									<motion.div
										className='absolute -top-6 left-8'
										variants={floatingVariants}
										animate='animate'
									>
										<motion.div
											className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center shadow-lg border border-white/20`}
											whileHover={{
												rotate: [0, -10, 10, 0],
												scale: 1.1,
											}}
											transition={{
												duration: 0.5,
											}}
										>
											<Icon
												icon={reason.icon}
												className={`text-3xl ${reason.iconColor} drop-shadow-sm`}
											/>
										</motion.div>
									</motion.div>

									{/* Percentage/Stats Display */}
									<motion.div
										className='text-right mb-4'
										initial={{
											opacity: 0,
											x: 20,
										}}
										animate={
											isInView
												? { opacity: 1, x: 0 }
												: { opacity: 0, x: 20 }
										}
										transition={{
											delay: 0.2 * index,
											duration: 0.6,
										}}
									>
										<motion.div
											className={`text-4xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}
											whileHover={{ scale: 1.1 }}
										>
											{reason.percentage}
										</motion.div>
										<div className='text-sm text-primary-green/80 font-semibold'>
											{reason.stats}
										</div>
									</motion.div>

									{/* Content */}
									<div className='mt-8'>
										<motion.h3
											className='text-2xl font-bold text-primary-green mb-4 leading-tight'
											whileHover={{
												color: "#ddd1b4",
											}}
											transition={{
												duration: 0.2,
											}}
										>
											{reason.title}
										</motion.h3>

										<motion.p
											className='text-gray-700 mb-6 font-medium text-sm sm:text-base lg:text-lg leading-relaxed'
											animate={
												hoveredCard === reason.id
													? {
															opacity: 1,
															color: "#374151",
													  }
													: {
															opacity: 0.85,
															color: "#4b5563",
													  }
											}
											transition={{
												duration: 0.3,
											}}
										>
											{reason.description}
										</motion.p>
									</div>

									{/* Card border glow */}
									<motion.div
										className='absolute inset-0 rounded-3xl pointer-events-none'
										animate={
											hoveredCard === reason.id
												? {
														boxShadow:
															"inset 0 0 0 2px rgba(30, 61, 54, 0.2), 0 0 30px rgba(30, 61, 54, 0.15)",
												  }
												: {
														boxShadow:
															"inset 0 0 0 1px rgba(30, 61, 54, 0.1), 0 0 0px rgba(0, 0, 0, 0)",
												  }
										}
										transition={{ duration: 0.3 }}
									/>

									{/* Subtle shine effect */}
									<motion.div
										className='absolute inset-0 rounded-3xl opacity-0 pointer-events-none'
										animate={
											hoveredCard === reason.id
												? {
														opacity: 1,
														background:
															"linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(221,209,180,0.1) 100%)",
												  }
												: { opacity: 0 }
										}
										transition={{ duration: 0.4 }}
									/>
								</motion.div>
							</motion.div>
						)
					)}
				</div>
			</div>
		</motion.section>
	);
};

export default WhyInvest;
