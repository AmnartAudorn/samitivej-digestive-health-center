/** @format */

import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TopBar } from "../app/Topbar";
import { Navbar } from "../app/Navbar";
import { Hero } from "../app/Hero";
import { AppointmentModal } from "./components/AppointmentModal";
import { PatientStories } from "./components/PatientStories";
import { TrustedPartners } from "./components/TrustedPartners";
import { Footer } from "./components/Footer";
import Link from "next/link";
import { articles } from "./news/data";

export default function Home() {
	return (
		<main className='min-h-screen '>
			<TopBar />
			<Navbar />
			<AppointmentModal />
			<Hero />
			<PatientStories />
			{/* ===== LATEST ARTICLES ===== */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='d-flex justify-content-between align-items-center mb-4'>
						<h2 className='text-center fw-semibold text-success mb-5'>Latest Articles</h2>

						<Link
							href='/news'
							className='text-success fw-semibold'
						>
							View All →
						</Link>
					</div>

					<div className='row g-4'>
						{articles.slice(0, 3).map((item) => (
							<div
								className='col-md-4'
								key={item.slug}
							>
								<Link
									href={`/news/${item.slug}`}
									className='text-decoration-none'
								>
									<div className='card border-0 shadow-sm rounded-4 h-100 overflow-hidden'>
										<Image
											src={item.image}
											alt={item.title}
											width={400}
											height={250}
											className='w-100 object-fit-cover'
										/>

										<div className='card-body'>
											<span className='badge bg-success mb-2'>{item.category}</span>

											<h6 className='fw-semibold text-dark'>{item.title}</h6>

											<p className='text-muted small mb-0'>{item.date}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* ===== TOP CTA BANNER ===== */}
			<section className='py-5'>
				<div className='container'>
					<div
						className='text-center text-white rounded-4 p-5'
						style={{
							background: "linear-gradient(135deg, #198754, #20c997)",
							boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
						}}
					>
						<h2
							className='fw-semibold mb-4'
							style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
						>
							<span className='d-inline-block'>Your Confidence.</span> <span className='d-inline-block'>Your Health.</span> <span className='d-inline-block'>Your Journey.</span>
						</h2>
						<button
							className='btn btn-light fw-semibold px-4 py-2 rounded-3'
							data-bs-toggle='modal'
							data-bs-target='#appointmentModal'
						>
							Get Started Today
						</button>
					</div>
				</div>
			</section>

			<TrustedPartners />
			<Footer />
		</main>
	);
}
