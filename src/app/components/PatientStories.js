/** @format */

import Image from "next/image";
import Link from "next/link";

export const PatientStories = () => {
	const treatments = [
		{
			title: "Colonoscopy Examination",
			image: "/colonoscopy.jpg",
			desc: "Screening and diagnosis of colon diseases",
			link: "/treatments/colonoscopy",
		},
		{
			title: "Intestinal Surgery",
			image: "/surgery.jpg",
			desc: "Treatment for severe intestinal conditions",
			link: "/treatments/surgery",
		},
		{
			title: "Colon Cancer Surgery",
			image: "/cancer.jpg",
			desc: "Removal of cancerous tumors in the colon",
			link: "/treatments/cancer",
		},
	];

	return (
		<section className='py-5 bg-light'>
			<div className='container'>
				<h2 className='text-center fw-semibold text-success mb-5'>Intestinal Treatment Information</h2>

				<div className='row g-4'>
					{treatments.map((item, index) => (
						<div
							key={index}
							className='col-lg-4 col-md-6'
						>
							<div className='card border-0 shadow-sm h-100'>
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

								<div className='card-body d-flex flex-column'>
									<h5 className='fw-semibold text-success mb-2'>{item.title}</h5>

									<p className='text-muted mb-4'>{item.desc}</p>

									<Link
										href={item.link}
										className='btn btn-outline-success mt-auto'
									>
										View Details →
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
