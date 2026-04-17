/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Clock, DollarSign, ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";

// Components
import { TopBar } from "../../Topbar";
import { Navbar } from "../../Navbar";
import { PatientStories } from "../../components/PatientStories";
import { AppointmentModal } from "../../components/AppointmentModal";
import { TrustedPartners } from "../../components/TrustedPartners";
import { Footer } from "../../components/Footer";
import { treatmentData } from "../../data/treatment";

/* ========================= ANIMATION ========================= */
const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
	viewport: { once: true },
};

/* ========================= PAGE ========================= */
export default function TreatmentDetail() {
	const params = useParams();
	const data = treatmentData[params.slug];

	if (!data) {
		return <div className='container py-5'>Not found</div>;
	}

	return (
		<>
			<TopBar />
			<Navbar />
			<AppointmentModal />

			{/* ================= HERO ================= */}
			<section
				className='position-relative text-white'
				style={{ height: "65vh", minHeight: "420px" }}
			>
				<Image
					src={data.image}
					fill
					alt={data.title}
					className='object-fit-cover'
				/>

				{/* Overlay */}
				<div
					className='position-absolute w-100 h-100'
					style={{
						background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
					}}
				/>

				<div className='container position-relative h-100 d-flex flex-column justify-content-center'>
					<motion.div {...fadeUp}>
						<span className='badge bg-success mb-3 px-3 py-2'>International GI Center</span>

						<h1 className='display-5 fw-bold'>{data.title}</h1>

						<p className='lead col-lg-7'>{data.overview}</p>

						<div className='d-flex gap-3 mt-3'>
							<button
								className='btn btn-success px-4'
								data-bs-toggle='modal'
								data-bs-target='#appointmentModal'
							>
								Book Now
							</button>

							<Link
								href='/contact'
								className='btn btn-outline-light px-4'
							>
								Contact
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			<TrustedPartners />

			{/* ================= INFO CARDS ================= */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='row g-4 text-center'>
						{[
							{
								icon: <Clock size={28} />,
								title: "Duration",
								value: data.duration,
							},
							{
								icon: <ShieldCheck size={28} />,
								title: "Recovery",
								value: data.recovery,
							},
							{
								icon: <DollarSign size={28} />,
								title: "Price",
								value: data.priceRange,
							},
						].map((item, i) => (
							<div
								className='col-12 col-md-4'
								key={i}
							>
								<motion.div
									{...fadeUp}
									className='p-4 bg-white rounded-4 shadow h-100'
								>
									<div className='mb-3 text-success'>{item.icon}</div>

									<h6 className='text-muted'>{item.title}</h6>

									<h5 className='fw-bold'>{item.value}</h5>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ================= CONTENT ================= */}
			<section className='py-5'>
				<div className='container'>
					<div className='row g-5 align-items-center'>
						{/* TEXT */}
						<div className='col-lg-6'>
							<motion.div {...fadeUp}>
								<h2 className='text-success mb-4'>Who Needs This</h2>

								<ul className='list-group'>
									{data.who.map((item, i) => (
										<li
											key={i}
											className='list-group-item d-flex align-items-center gap-2'
										>
											<CheckCircle
												size={18}
												className='text-success'
											/>
											{item}
										</li>
									))}
								</ul>
							</motion.div>
						</div>

						{/* IMAGE */}
						<div className='col-lg-6'>
							<motion.div {...fadeUp}>
								<div className='image-box'>
									<Image
										src='/ai-intestine-doctor.png'
										alt='doctor'
										fill
										className='object-fit-cover'
									/>
								</div>
							</motion.div>
						</div>
					</div>

					{/* STEPS */}
					<div className='mt-5'>
						<h2 className='text-success mb-4'>Procedure Steps</h2>

						<div className='row g-4'>
							{data.steps.map((step, i) => (
								<div
									key={i}
									className='col-12 col-md-6'
								>
									<motion.div
										{...fadeUp}
										className='p-4 border rounded-4 shadow-sm h-100'
									>
										<h5 className='fw-bold text-success'>Step {i + 1}</h5>
										<p>{step}</p>
									</motion.div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ================= CTA ================= */}
			<section className='bg-success text-white text-center py-5'>
				<div className='container'>
					<h3 className='fw-bold'>Get Consultation Within 24 Hours</h3>

					<p className='opacity-75'>Our specialists are ready to assist you</p>

					<Link
						href='/contact'
						className='btn btn-light btn-lg px-5'
					>
						Contact Now
					</Link>
				</div>
			</section>

			<PatientStories />
			<Footer />
		</>
	);
}
