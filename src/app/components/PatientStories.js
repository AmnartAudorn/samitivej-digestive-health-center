/** @format */

import Image from "next/image";

export const PatientStories = () => {
	const stories = [
		{
			title: "Susie’s Cosmetic Surgery Journey in Thailand",
			image: "/stories/story1.jpg",
			doctor: "Dr. Note",
			hospital: "World Medical Hospital",
			link: "/stories/susie",
		},
		{
			title: "Elyce’s Journey, Breast Augmentation in Bangkok",
			image: "/stories/story2.jpg",
			doctor: "Dr. Pattaya",
			hospital: "The ART Hospital",
			link: "/stories/elyce",
		},
		{
			title: "Elizabeth’s Transformation in Thailand",
			image: "/stories/story3.jpg",
			doctor: "Dr. Keerapat",
			hospital: "ViMUT Hospital",
			link: "/stories/elizabeth",
		},
	];

	return (
		<section className='py-5 bg-light'>
			<div className='container'>
				{/* TITLE */}
				<h2 className='text-center fw-semibold text-success mb-5'>Our Latest Patient Stories</h2>

				{/* CARDS */}
				<div className='row g-4'>
					{stories.map((item, index) => (
						<div
							key={index}
							className='col-lg-4 col-md-6'
						>
							<div className='card border-0 shadow-sm h-100'>
								{/* IMAGE */}
								<div
									className='position-relative'
									style={{ height: "260px" }}
								>
									<Image
										src={item.image}
										alt={item.title}
										fill
										className='object-fit-cover rounded-top'
									/>
								</div>

								{/* CONTENT */}
								<div className='card-body d-flex flex-column'>
									<h5 className='fw-semibold text-success mb-3'>{item.title}</h5>

									<p className='text-muted mb-4'>
										{item.doctor}, {item.hospital}
									</p>

									<a
										href={item.link}
										className='btn btn-outline-success mt-auto'
									>
										Read Story →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
