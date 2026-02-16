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

export default function Home() {
	return (
		<main className='min-h-screen '>
			<TopBar />
			<Navbar />
			<AppointmentModal />
			<Hero />

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
			<PatientStories />
			<TrustedPartners />
			<Footer />
		</main>
	);
}
