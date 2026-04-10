/** @format */

"use client";

import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function FAQ() {
	const faqs = [
		{
			q: "Do I need to fast before a colonoscopy?",
			a: "Yes. Patients are usually required to fast for 6–8 hours and follow bowel preparation instructions provided by the doctor.",
		},
		{
			q: "Is the procedure painful?",
			a: "Most examinations are performed with sedation, so patients typically feel little to no discomfort during the procedure.",
		},
		{
			q: "How long does the examination take?",
			a: "The procedure usually takes 30–60 minutes, followed by a short recovery period before going home.",
		},
		{
			q: "Can I go home immediately after the test?",
			a: "Yes, but if sedation is used, you should have someone accompany you home for safety.",
		},
	];

	const [open, setOpen] = useState(null);

	return (
		<>
			<TopBar />
			<Navbar />

			{/* HERO */}
			<section className='py-5 bg-light border-bottom '>
				<div className='container'>
					<div className='text-muted small mb-2'>
						<a
							href='/'
							className='text-muted text-decoration-none'
						>
							Resource
						</a>
						<span className='mx-2'>›</span>
						<span>Faq</span>
					</div>
					<h1 className='fw-bold text-success text-center'>Frequently Asked Questions</h1>
					<p className='text-muted text-center'>Answers to common questions about digestive health screening</p>
				</div>
			</section>

			{/* FAQ */}
			<section className='py-5'>
				<div className='container'>
					<div className='row g-5 align-items-center'>
						{/* IMAGE SIDE */}
						<div className='col-lg-5'>
							<div className='faq-image-wrapper'>
								<img
									src='/DR1111.png'
									className='img-fluid rounded-4 shadow-lg'
									alt='Doctor consultation'
								/>
							</div>
						</div>

						{/* FAQ SIDE */}
						<div className='col-lg-7'>
							{faqs.map((f, i) => (
								<div
									key={i}
									className={`faq-card mb-3 p-4 rounded-4 ${open === i ? "active" : ""}`}
									onClick={() => setOpen(open === i ? null : i)}
								>
									<div className='d-flex justify-content-between align-items-center'>
										<h5 className='fw-semibold mb-0 text-success'>{f.q}</h5>

										<span className='faq-icon'>+</span>
									</div>

									<div className={`faq-answer ${open === i ? "show" : ""}`}>
										<p className='text-muted mt-3 mb-0'>{f.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='py-5 bg-success text-white text-center'>
				<div className='container'>
					<h3 className='fw-bold mb-3'>Still have questions?</h3>
					<p className='mb-4'>Contact our medical team for personalized assistance</p>

					<a
						href='/contact'
						className='btn btn-light px-4'
					>
						Contact Us
					</a>
				</div>
			</section>

			<Footer />
		</>
	);
}
