/** @format */
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";

import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";
export default function PackagesPage() {
	return (
		<main>
			<TopBar />
			<Navbar />
			<AppointmentModal />
			{/* HERO */}
			<section className='hero-pk-section position-relative d-flex align-items-center text-white'>
				{/* overlay */}
				<div className='hero-overlay'></div>

				<div className='container containertop text-center position-relative'>
					<h1 className='hero-title fw-bold'>Digestive Health Packages</h1>

					<p className='hero-subtitle'>Choose the right screening package for your digestive health.</p>
				</div>
			</section>

			{/* PACKAGES */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='row g-4'>
						{/* Package 1 */}
						<div className='col-md-6 col-lg-4'>
							<div className='card h-100 shadow-sm border-0'>
								<img
									src='/colonoscopy.jpg'
									className='card-img-top'
									style={{ height: "260px" }}
								/>
								<div className='card-body d-flex flex-column'>
									<h5 className='fw-bold'>Basic Digestive Screening</h5>
									<p className='text-muted'>Suitable for general health check and early screening.</p>

									<ul className='small'>
										<li>Doctor consultation</li>
										<li>Blood test</li>
										<li>Abdominal ultrasound</li>
									</ul>

									<div className='mt-auto'>
										<p className='fw-bold text-success fs-5'>฿4,900</p>
										<button className='btn btn-success w-100'>Book Package</button>
									</div>
								</div>
							</div>
						</div>

						{/* Package 2 */}
						<div className='col-md-6 col-lg-4'>
							<div className='card h-100 shadow-sm border-0'>
								<img
									src='/surgery.jpg'
									className='card-img-top'
									style={{ height: "260px" }}
								/>
								<div className='card-body d-flex flex-column'>
									<h5 className='fw-bold'>Advanced Endoscopy Package</h5>
									<p className='text-muted'>For patients with symptoms or high risk.</p>

									<ul className='small'>
										<li>Specialist consultation</li>
										<li>Gastroscopy</li>
										<li>Colonoscopy</li>
									</ul>

									<div className='mt-auto'>
										<p className='fw-bold text-success fs-5'>฿18,900</p>
										<button className='btn btn-success w-100'>Book Package</button>
									</div>
								</div>
							</div>
						</div>

						{/* Package 3 */}
						<div className='col-md-6 col-lg-4'>
							<div className='card h-100 shadow-sm border-0'>
								<img
									src='/gi-surgery.webp'
									className='card-img-top'
									style={{ height: "260px" }}
								/>
								<div className='card-body d-flex flex-column'>
									<h5 className='fw-bold'>Complete Digestive Checkup</h5>
									<p className='text-muted'>Full screening for long-term digestive health.</p>

									<ul className='small'>
										<li>Full lab tests</li>
										<li>Endoscopy</li>
										<li>Nutrition consultation</li>
									</ul>

									<div className='mt-auto'>
										<p className='fw-bold text-success fs-5'>฿29,900</p>
										<button className='btn btn-success w-100'>Book Package</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
