/** @format */

import Image from "next/image";
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";

export default function Hospitals() {
	const hospital = {
		name: "Samitivej Chinatown Hospital",
		location: "Bangkok, Thailand",
		img: "/his-about-1.jpg",
		desc: "International-standard hospital specializing in digestive care and modern diagnostics.",
	};

	const packages = [
		{
			title: "Colonoscopy Screening",
			price: "Starting 18,000 THB",
			desc: "ตรวจลำไส้ใหญ่ด้วยกล้อง คัดกรองมะเร็งลำไส้",
		},
		{
			title: "Gastroscopy Package",
			price: "Starting 12,000 THB",
			desc: "ตรวจหลอดอาหารและกระเพาะอาหาร",
		},
		{
			title: "Digestive Health Check",
			price: "Starting 9,500 THB",
			desc: "แพ็กเกจตรวจระบบทางเดินอาหารครบชุด",
		},
	];

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
						<span>Hospitals</span>
					</div>
					<h1 className='fw-bold text-success text-center'>Recommended Hospital</h1>
					<p className='text-muted text-center'>Trusted digestive healthcare with international standards</p>
				</div>
			</section>

			{/* HOSPITAL PROFILE */}
			<section className='py-5'>
				<div className='container'>
					<div className='row align-items-center g-5'>
						<div className='col-lg-6'>
							<div
								className='position-relative w-100 rounded shadow overflow-hidden'
								style={{ aspectRatio: "16/10" }}
							>
								<Image
									src={hospital.img}
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-fit-cover'
									alt={hospital.name}
								/>
							</div>
						</div>

						<div className='col-lg-6'>
							<h2 className='fw-bold mb-3'>{hospital.name}</h2>
							<p className='text-muted'>📍 {hospital.location}</p>
							<p>{hospital.desc}</p>

							<a
								href='/contact'
								className='btn btn-success mt-3'
							>
								Contact Hospital
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* GOOGLE MAP */}
			<section className='pb-5'>
				<div className='container'>
					<h3 className='fw-bold mb-4 text-center'>Hospital Location</h3>

					<div className='rounded overflow-hidden shadow'>
						<iframe
							src='https://maps.google.com/maps?q=Samitivej%20Chinatown%20Hospital&t=&z=15&ie=UTF8&iwloc=&output=embed'
							width='100%'
							height='420'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			{/* PACKAGES */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<h3 className='fw-bold text-center mb-5'>Digestive Check Packages</h3>

					<div className='row g-4'>
						{packages.map((p, i) => (
							<div
								className='col-md-4'
								key={i}
							>
								<div className='card border-0 shadow-sm h-100 p-4'>
									<h5 className='fw-bold'>{p.title}</h5>
									<p className='text-success fw-semibold'>{p.price}</p>
									<p className='text-muted small'>{p.desc}</p>

									<a
										href='/contact'
										className='btn btn-outline-success mt-auto'
									>
										Book Package
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
