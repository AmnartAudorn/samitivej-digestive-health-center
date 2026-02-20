/** @format */
"use client";

import { useState } from "react";
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";

export default function ContactPage() {
	const [sent, setSent] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const payload = {
			name: `${formData.get("firstName")} ${formData.get("lastName")}`,
			email: formData.get("email"),
			phone: formData.get("phone"),
			subject: formData.get("subject"),
			message: formData.get("message"),
		};

		console.log("Submitting contact form with:", payload);

		try {
			const res = await fetch("/api/sendmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			const data = await res.json();

			if (data.success) {
				alert("ส่งข้อความสำเร็จ!");
				setSent(true);
			} else {
				alert("ส่งไม่สำเร็จ");
			}
		} catch (err) {
			console.error(err);
			alert("เกิดข้อผิดพลาดในการส่ง");
		}
	};

	return (
		<>
			<TopBar />
			<Navbar />

			{/* HEADER */}
			<section className='bg-light py-4 border-bottom'>
				<div className='container'>
					<div className='text-muted small mb-2'>
						<a
							href='/'
							className='text-muted text-decoration-none'
						>
							Home
						</a>
						<span className='mx-2'>›</span>
						<span>Contact</span>
					</div>

					<h1 className='fw-semibold text-secondary text-center m-0'>CONTACT US</h1>
				</div>
			</section>

			{/* CONTACT SECTION */}
			<section className='py-5'>
				<div className='container'>
					<div className='row g-4'>
						{/* LEFT INFO */}
						<div className='col-lg-5'>
							<div className='contact-card h-100'>
								<h4 className='fw-bold mb-4'>Samitivej Digestive Health Center</h4>

								<p>📍 624 Yaowarat Rd, Bangkok 10100</p>
								<p>📞 02-438-9000</p>
								<p>✉️ contact@bangkokopticare.com</p>

								<iframe
									src='https://www.google.com/maps?q=13.7378,100.5100&z=15&output=embed'
									width='100%'
									height='420'
									style={{ border: 0, borderRadius: 18 }}
									loading='lazy'
								/>
							</div>
						</div>

						{/* RIGHT FORM */}
						<div className='col-lg-7'>
							<div className='contact-card'>
								<h4 className='fw-bold mb-4'>Send us a message</h4>

								{sent ? (
									<div className='alert alert-success'>ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับเร็วที่สุด</div>
								) : (
									<form onSubmit={handleSubmit}>
										<div className='row g-3'>
											<div className='col-md-6'>
												<label className='form-label small'>First Name*</label>
												<input
													name='firstName'
													className='form-control contact-input'
													required
												/>
											</div>

											<div className='col-md-6'>
												<label className='form-label small'>Last Name*</label>
												<input
													name='lastName'
													className='form-control contact-input'
													required
												/>
											</div>

											<div className='col-12'>
												<label className='form-label small'>Email*</label>
												<input
													name='email'
													type='email'
													className='form-control contact-input'
													required
												/>
											</div>

											<div className='col-12'>
												<label className='form-label small'>Phone</label>
												<input
													name='phone'
													className='form-control contact-input'
												/>
											</div>

											<div className='col-12'>
												<label className='form-label small'>Subject</label>
												<select
													name='subject'
													className='form-select contact-input'
												>
													<option>General Inquiry</option>
													<option>Consultation</option>
													<option>Treatment</option>
												</select>
											</div>

											<div className='col-12'>
												<label className='form-label small'>Message*</label>
												<textarea
													name='message'
													rows={5}
													className='form-control contact-input'
													required
												/>
											</div>

											<div className='col-12 text-end'>
												<button className='btn btn-success px-4 py-2 rounded-pill'>Send Message</button>
											</div>
										</div>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			<AppointmentModal />
			<Footer />
		</>
	);
}
