/** @format */

import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "../data";
import Link from "next/link";

// Components
import { TopBar } from "../../Topbar";
import { Navbar } from "../../Navbar";
import { AppointmentModal } from "../../components/AppointmentModal";
import { Footer } from "../../components/Footer";

// 🔥 ปิด cache
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
	return articles.map((item) => ({
		slug: item.slug,
	}));
}

export default async function NewsDetailPage({ params }) {
	const { slug } = await params;

	const article = articles.find((item) => item.slug === slug);
	if (!article) return notFound();

	return (
		<main className='min-h-screen bg-white'>
			<TopBar />
			<Navbar />
			<AppointmentModal />

			{/* ===== HEADER + IMAGE SIDE ===== */}
			<section className='container py-5'>
				<div className='row align-items-center g-5'>
					{/* TEXT */}
					<div className='col-lg-6'>
						<span className='badge bg-success mb-3'>{article.category}</span>

						<h1
							className='fw-bold mb-3'
							style={{
								fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
								lineHeight: "1.3",
							}}
						>
							{article.title}
						</h1>

						<p className='text-muted mb-4'>{article.date} • 5 min read</p>

						<div
							className='mb-4'
							style={{
								width: "60px",
								height: "3px",
								background: "#198754",
								borderRadius: "2px",
							}}
						/>

						{/* CONTENT */}
						<article
							style={{
								lineHeight: "1.9",
								fontSize: "1.05rem",
								color: "#333",
							}}
						>
							{article.content}
						</article>
					</div>

					{/* IMAGE */}
					<div className='col-lg-6'>
						<div className='image-wrapper'>
							<Image
								src={article.image}
								alt={article.title}
								fill
								className='object-fit-contain'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ===== LATEST ARTICLES ===== */}
			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='d-flex justify-content-between align-items-center mb-4'>
						<h3 className='fw-bold mb-0'>Latest Articles</h3>

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

			{/* ===== CTA ===== */}
			<section className='py-5'>
				<div className='container'>
					<div
						className='text-center text-white rounded-4 p-5'
						style={{
							background: "linear-gradient(135deg, #198754, #20c997)",
						}}
					>
						<h3 className='fw-semibold mb-3'>Take the Next Step in Your Health Journey</h3>

						<button
							className='btn btn-light fw-semibold px-4 py-2'
							data-bs-toggle='modal'
							data-bs-target='#appointmentModal'
						>
							Book Appointment
						</button>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
