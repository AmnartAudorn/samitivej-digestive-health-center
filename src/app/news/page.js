/** @format */

import Image from "next/image";
import Link from "next/link";
import { articles } from "./data";

// Components
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";

export default function NewsPage() {
	return (
		<main className='min-h-screen'>
			<TopBar />
			<Navbar />
			<AppointmentModal />

			{/* ===== HEADER ===== */}
			<section className='py-5 text-center bg-light'>
				<div
					className='container'
					style={{ maxWidth: "800px" }}
				>
					<h1 className='fw-bold mb-3'>Latest Health Articles</h1>
					<p className='text-muted'>Stay updated with expert insights on digestive health</p>
				</div>
			</section>

			{/* ===== GRID NEWS ===== */}
			<section className='container py-5'>
				<div className='row g-4'>
					{articles.map((item) => (
						<div
							className='col-md-4'
							key={item.slug}
						>
							<Link
								href={`/news/${item.slug}`}
								className='text-decoration-none'
							>
								<div className='card border-0 shadow-sm rounded-4 h-100 overflow-hidden'>
									{/* Image */}
									<div className='news-image'>
										<Image
											src={item.image}
											alt={item.title}
											fill
											className='object-fit-contain'
										/>
									</div>

									{/* Content */}
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
			</section>

			{/* ===== CTA ===== */}
			<section className='py-5'>
				<div className='container'>
					<div
						className='text-center text-white rounded-4 p-5'
						style={{
							background: "linear-gradient(135deg, #198754, #20c997)",
						}}
					>
						<h3 className='fw-semibold mb-3'>Your Health Starts Here</h3>

						<Link
							href='/contact'
							className='btn btn-light fw-semibold px-4 py-2'
						>
							Book Appointment
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
