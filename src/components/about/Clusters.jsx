import { useState } from "react";
import { formLink } from "../../utils/data";
import { Link } from "react-router-dom";
const Clusters = () => {
	const [activeTab, setActiveTab] = useState(
		"residential"
	);

	const residentialClusters = [
		{
			id: 1,
			title: "Regular Zone",
			req: "Minimum of 250 sqm",
			price: "₦200,000/sqm",
			status: "Available",
		},
		{
			id: 2,
			title: "Premium Zone",
			req: "Minimum of 500 sqm",
			price: "₦200,000/sqm",
			status: "UnAvailable",
		},
		{
			id: 3,
			title: "Luxury Zone",
			req: "Minimum of 1000 sqm",
			price: "₦240,000/sqm",
			status: "UnAvailable",
		},
	];

	const commercialClusters = [
		{
			id: 1,
			title: "Retail hub",
			req: "Minimum of 1000 sqm",
			price: "₦250,000/sqm",
			status: "UnAvailable",
		},
		{
			id: 2,
			title: "Healthcare hub",
			req: "Minimum of 1000 sqm",
			price: "₦200,000/sqm",
			status: "UnAvailable",
		},
		{
			id: 3,
			title: "Educational hub",
			req: "Minimum of 1000 sqm",
			price: "₦250,000/sqm",
			status: "UnAvailable",
		},
	];

	return (
		<section className='py-20 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-primary-green mb-6'>
						Clusters
					</h2>
					<p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
						At Vedura, you do not just own land.
						You own a part of something that is
						growing, evolving, and set to thrive.
					</p>
				</div>

				{/* Tab Navigation */}
				<div className='flex justify-center mb-12'>
					<div className='bg-gray-100 p-2 rounded-full'>
						<button
							onClick={() =>
								setActiveTab("residential")
							}
							className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeTab === "residential"
									? "bg-primary-green text-white shadow-lg"
									: "text-primary-green hover:bg-primary-green/10"
							}`}
						>
							Residential
						</button>
						<button
							onClick={() =>
								setActiveTab("commercial")
							}
							className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeTab === "commercial"
									? "bg-primary-green text-white shadow-lg"
									: "text-primary-green hover:bg-primary-green/10"
							}`}
						>
							Commercial
						</button>
					</div>
				</div>

				{/* Residential Section */}
				{activeTab === "residential" && (
					<div>
						<div className='text-center mb-12'>
							<h3 className='text-2xl md:text-3xl font-bold text-primary-green mb-4'>
								Residential clusters - The
								headquarters of peace and
								tranquility
							</h3>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto'>
							{residentialClusters.map(
								(cluster) => (
									<div
										key={cluster.id}
										className='bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-green/30 hover:shadow-xl transition-all duration-300'
									>
										<div className='flex justify-between items-start mb-6'>
											<h4 className='text-2xl font-bold text-primary-green'>
												{cluster.title}
											</h4>
											{cluster.status ===
												"Available" && (
												<span
													className={`bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium`}
												>
													{cluster.status}
												</span>
											)}
											{cluster.status ===
												"UnAvailable" && (
												<span
													className={`bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium`}
												>
													{cluster.status}
												</span>
											)}
										</div>

										<div className='space-y-4 mb-6'>
											<div className='flex justify-between'>
												<span className='text-gray-600'>
													Requirement:
												</span>
												<span className='font-semibold text-primary-green'>
													{cluster.req}
												</span>
											</div>
											<div className='flex justify-between'>
												<span className='text-gray-600'>
													Price:
												</span>
												<span className='font-bold text-2xl text-primary-green'>
													{cluster.price}
												</span>
											</div>
										</div>

										{cluster.status ===
											"Available" && (
											<button className='w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300'>
												<Link
													to={formLink}
													target='_blank'
												>
													Select This Zone
												</Link>
											</button>
										)}
										{cluster.status ===
											"UnAvailable" && (
											<button className='w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300'>
												<Link
													to={formLink}
													target='_blank'
												>
													Join The Waitlist
												</Link>
											</button>
										)}
									</div>
								)
							)}
						</div>
					</div>
				)}

				{/* Commercial Section */}
				{activeTab === "commercial" && (
					<div>
						<div className='text-center mb-12'>
							<h3 className='text-2xl md:text-3xl font-bold text-primary-green mb-4'>
								Commercial Clusters
							</h3>
							<p className='text-lg text-gray-600'>
								Strategic business locations for
								growth and success
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{commercialClusters.map(
								(cluster) => (
									<div
										key={cluster.id}
										className='bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-green/30 hover:shadow-xl transition-all duration-300'
									>
										<div className='flex justify-between items-start mb-6'>
											<h4 className='text-xl font-bold text-primary-green'>
												{cluster.title}
											</h4>
											<span className='bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium'>
												{cluster.status}
											</span>
										</div>

										<div className='space-y-4 mb-6'>
											<div className='flex justify-between'>
												<span className='text-gray-600'>
													Requirement:
												</span>
												<span className='font-semibold text-primary-green'>
													{cluster.req}
												</span>
											</div>
											<div className='flex justify-between'>
												<span className='text-gray-600'>
													Price:
												</span>
												<span className='font-bold text-xl text-primary-green'>
													{cluster.price}
												</span>
											</div>
										</div>

										<button className='w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300'>
											<Link
												to={formLink}
												target='_blank'
											>
												Join The Waitlist
											</Link>
										</button>
									</div>
								)
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Clusters;
