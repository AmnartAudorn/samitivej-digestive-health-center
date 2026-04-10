/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";

/* ========================= ANIMATION ========================= */
const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
	viewport: { once: true },
};

export default function OurProcess() {
	const steps = [
		{
			title: "Consultation",
			desc: "Meet with our specialist doctors for a detailed evaluation and personalized diagnosis.",
			img: "/IMG_3480.png",
		},
		{
			title: "Booking",
			desc: "Schedule your appointment easily with fast confirmation and preparation guidance.",
			img: "/reception.png",
		},
		{
			title: "Examination",
			desc: "Advanced diagnostic procedures using modern medical technology and international standards.",
			img: "/lab-room.png",
		},
		{
			title: "Results & Treatment Plan",
			desc: "Receive accurate results with a customized treatment plan tailored to your condition.",
			img: "/patient-room.png",
		},
	];

	return (
		<>
			<TopBar />
			<Navbar />

			<section className='hero-section position-relative text-white'>
				{/* Overlay */}
				<div
					className='position-absolute w-100 h-100 bg-dark'
					style={{ opacity: 0.35 }}
				></div>

				<div className='position-absolute top-50 start-50 translate-middle text-center w-100 px-3'>
					<h1 className='hero-title fw-bold mb-3'>Our Process</h1>
					<p className='hero-sub mb-0'>A Seamless Journey to Better Digestive Health.</p>
				</div>
			</section>

			{/* PROCESS */}
			<section className='py-5'>
				<div className='container'>
					<h2 className='text-center fw-bold mb-5 text-success'>How It Works</h2>

					{steps.map((step, i) => (
						<div
							key={i}
							className={`row align-items-center mb-5 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
						>
							{/* IMAGE */}
							<div className='col-md-6 mb-4 mb-md-0'>
								<motion.div {...fadeUp}>
									<div
										className='position-relative rounded-4 shadow-lg overflow-hidden img-responsive'
										style={{ height: "260px" }}
									>
										<Image
											src={step.img}
											alt={step.title}
											fill
											className='object-fit-cover'
											sizes='(max-width: 768px) 100vw, 600px'
										/>

										{/* overlay */}
										<div
											className='position-absolute w-100 h-100'
											style={{
												background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
											}}
										/>
									</div>
								</motion.div>
							</div>

							{/* TEXT */}
							<div className='col-md-6'>
								<motion.div {...fadeUp}>
									<h3 className='fw-bold text-success mb-3'>
										{i + 1}. {step.title}
									</h3>
									<p className='text-muted'>{step.desc}</p>
								</motion.div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* FACILITIES */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<h2 className='text-center fw-bold mb-5'>Our Facilities</h2>

					<div className='row g-4'>
						{[
							{
								title: "Modern Laboratory",
								img: "/IMG_3441.png",
							},
							{
								title: "Private Patient Room",
								img: "/IMG_3446.jpg",
							},
							{
								title: "Recovery Room",
								img: "/room.jpg",
							},
						].map((f, i) => (
							<div
								className='col-12 col-md-4'
								key={i}
							>
								<div className='border-0 shadow-sm overflow-hidden rounded-4'>
									<div
										className='position-relative'
										style={{ height: "220px" }}
									>
										<Image
											src={f.img}
											alt={f.title}
											fill
											className='object-fit-cover'
											sizes='(max-width: 768px) 100vw, 400px'
										/>
									</div>

									<div className='p-3 text-center'>
										<h6 className='fw-bold'>{f.title}</h6>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className='py-5 text-center'>
				<div className='container'>
					<h2 className='fw-bold mb-4 text-success'>Why Choose Us</h2>

					<div className='row g-4'>
						{["Specialist Medical Team", "Advanced Technology", "Fast & Efficient Service", "International Standards"].map((item, i) => (
							<div
								className='col-6 col-md-3'
								key={i}
							>
								<div className='p-3 border rounded-4 shadow-sm h-100'>
									<h6 className='mb-0'>{item}</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='py-5 bg-success text-white text-center'>
				<div className='container'>
					<h3 className='fw-bold mb-3'>Start Your Health Journey Today</h3>
					<p className='mb-4'>Book your digestive screening with our specialists</p>

					<a
						href='/contact'
						className='btn btn-light px-4'
					>
						Book Appointment
					</a>
				</div>
			</section>

			<Footer />

			{/* STYLE */}
			<style jsx>{`
				@media (min-width: 768px) {
					.img-responsive {
						height: 400px !important;
					}
				}
			`}</style>
		</>
	);
}
