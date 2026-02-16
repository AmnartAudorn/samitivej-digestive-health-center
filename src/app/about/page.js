/** @format */

"use client";

import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";

export default function AboutPage() {
	return (
		<>
			<TopBar />
			<Navbar />
			<AppointmentModal />

			{/* ===== HEADER BAR ===== */}
			<section
				className='bg-light py-4 border-bottom position-relative'
				style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
			>
				<div className='container position-relative'>
					{/* BREADCRUMB */}
					<div className='text-muted small mb-2'>
						<a
							href='/'
							className='text-muted text-decoration-none'
						>
							Home
						</a>
						<span className='mx-2'>›</span>
						<span>About Us</span>
					</div>

					{/* TITLE */}
					<h1
						className='fw-semibold text-secondary m-0 text-center'
						style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
					>
						ABOUT US
					</h1>
				</div>
			</section>

			{/* ===== CONTENT ===== */}
			<section className='py-5 py-md-6'>
				<div className='container'>
					<div className='row align-items-center g-5'>
						{/* LEFT CONTENT */}
						<div className='col-lg-6 text-center text-lg-start'>
							<h2
								className='fw-semibold text-success mb-2'
								style={{
									fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
									letterSpacing: "0.5px",
								}}
							>
								Bangkok Opticare
							</h2>

							<p
								className='text-muted mb-4'
								style={{
									fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
									letterSpacing: "0.4px",
								}}
							>
								Gastrointestinal & Digestive Care Center
							</p>

							<p
								className='text-secondary mb-3 mx-auto mx-lg-0'
								style={{
									fontSize: "clamp(0.98rem, 1.2vw, 1.15rem)",
									lineHeight: 1.85,
									textAlign: "justify",
									maxWidth: "640px",
								}}
							>
								We provide professional diagnosis, treatment, and prevention services for digestive system and intestinal diseases. Our goal is to help patients regain confidence and live healthier
								lives through accurate medical care and modern technology.
							</p>

							<p
								className='text-secondary mx-auto mx-lg-0'
								style={{
									fontSize: "clamp(0.98rem, 1.2vw, 1.15rem)",
									lineHeight: 1.85,
									textAlign: "justify",
									maxWidth: "640px",
								}}
							>
								Based in Bangkok, our center combines advanced equipment, experienced specialists, and compassionate service to ensure every patient feels safe, understood, and well cared for.
							</p>
						</div>

						{/* RIGHT IMAGE */}
						<div className='col-lg-6 text-center'>
							<img
								src='/hero2.png'
								alt='clinic'
								className='img-fluid rounded-4 shadow-sm'
								style={{
									maxHeight: "420px",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ===== CTA BANNER ===== */}
			<section className='py-5'>
				<div className='container'>
					<div
						className='text-center text-white rounded-4 p-5'
						style={{
							background: "linear-gradient(135deg, #0f9d58, #1bbd7e)",
							boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
						}}
					>
						<h3
							className='fw-semibold mb-4'
							style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)" }}
						>
							World-class care, tailored to your unique needs.
						</h3>

						<button
							className='btn btn-light fw-semibold px-4 py-2 rounded-3'
							data-bs-toggle='modal'
							data-bs-target='#appointmentModal'
						>
							ENQUIRE NOW
						</button>
					</div>
				</div>
			</section>

			{/* ===== WHY CHOOSE US ===== */}
			<section className='py-5 bg-light'>
				<div className='container'>
					{/* TITLE */}
					<div className='text-center mb-5'>
						<h2
							className='fw-semibold text-success'
							style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
						>
							Why Choose Bangkok Opticare?
						</h2>
					</div>

					{/* POINTS */}
					<div className='row g-4'>
						{/* ITEM */}
						<div className='col-md-6 col-lg-4'>
							<div className='p-4 h-100 rounded-4 bg-white shadow-sm'>
								<div className='fs-1 mb-3 text-success'>💰</div>
								<h5 className='fw-semibold mb-2'>Transparent Medical Plans</h5>
								<p className='text-muted mb-0'>
									Our treatments are clearly explained with full cost transparency. Patients understand procedures, recovery, and expected outcomes before making decisions.
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className='col-md-6 col-lg-4'>
							<div className='p-4 h-100 rounded-4 bg-white shadow-sm'>
								<div className='fs-1 mb-3 text-success'>🩺</div>
								<h5 className='fw-semibold mb-2'>Specialist Digestive Care</h5>
								<p className='text-muted mb-0'>Our gastroenterology specialists combine advanced diagnostics with personalized treatment plans tailored to each patient’s condition and lifestyle.</p>
							</div>
						</div>

						{/* ITEM */}
						<div className='col-md-6 col-lg-4'>
							<div className='p-4 h-100 rounded-4 bg-white shadow-sm'>
								<div className='fs-1 mb-3 text-success'>🏥</div>
								<h5 className='fw-semibold mb-2'>Modern Medical Technology</h5>
								<p className='text-muted mb-0'>We use advanced imaging, endoscopy, and diagnostic systems to ensure precise detection and effective treatment of digestive disorders.</p>
							</div>
						</div>

						{/* ITEM */}
						<div className='col-md-6 col-lg-6'>
							<div className='p-4 h-100 rounded-4 bg-white shadow-sm'>
								<div className='fs-1 mb-3 text-success'>🌍</div>
								<h5 className='fw-semibold mb-2'>International Patient Experience</h5>
								<p className='text-muted mb-0'>
									Located in Bangkok, we serve both local and international patients, providing clear communication, coordinated care, and a comfortable medical experience from consultation to
									recovery.
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className='col-md-6 col-lg-6'>
							<div className='p-4 h-100 rounded-4 bg-white shadow-sm'>
								<div className='fs-1 mb-3 text-success'>🤝</div>
								<h5 className='fw-semibold mb-2'>Continuous Support</h5>
								<p className='text-muted mb-0'>From first consultation to post-treatment follow-ups, our team stays connected with you to ensure recovery, comfort, and long-term health outcomes.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
