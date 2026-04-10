/** @format */

import Image from "next/image";
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";

export default function Doctors() {
	const doctors = [
		{
			name: "DR. Note",
			specialty: "Gastroenterologist",
			img: "/DSCF1101.png",
		},
		{
			name: "DR. Him",
			specialty: "Digestive Specialist",
			img: "/DSCF1119.png",
		},
	];

	return (
		<>
			<TopBar />
			<Navbar />

			{/* HEADER */}
			<section className='bg-light py-5 border-bottom doctor-header'>
				<div className='container '>
					<div className='text-muted small mb-2'>
						<a
							href='/'
							className='text-muted text-decoration-none'
						>
							Resource
						</a>
						<span className='mx-2'>›</span>
						<span>Doctors</span>
					</div>

					<h1 className='fw-bold text-success text-center mb-2'>Our Specialists</h1>
					<p className='text-muted text-center'>Meet our experienced digestive health doctors</p>
				</div>
			</section>

			{/* GRID */}
			<section className='py-5'>
				<div className='container'>
					<div className='row g-4 justify-content-center'>
						{doctors.map((d, i) => (
							<div
								className='col-sm-6 col-lg-4'
								key={i}
							>
								<div className='card border-0 shadow-sm h-100 doctor-card'>
									<div className='overflow-hidden doctor-img-wrapper'>
										<Image
											src={d.img}
											width={500}
											height={420}
											className='card-img-top doctor-img'
											alt={d.name}
										/>
									</div>

									<div className='card-body text-center p-4'>
										<h5 className='fw-bold mb-1'>{d.name}</h5>
										<p className='text-muted small mb-3'>{d.specialty}</p>

										<a
											href='/contact'
											className='btn btn-success px-4 py-2 fw-semibold'
										>
											Book Appointment
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<AppointmentModal />
			<Footer />
		</>
	);
}
