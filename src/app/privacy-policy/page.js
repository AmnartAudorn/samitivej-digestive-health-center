/** @format */
import { TopBar } from "../Topbar";
import { Navbar } from "../Navbar";
import { AppointmentModal } from "../components/AppointmentModal";
import { Footer } from "../components/Footer";
export default function PrivacyPolicy() {
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

					<h1 className='fw-semibold text-secondary text-center m-0'>Privacy Policy</h1>
				</div>
			</section>

			<section className='py-5'>
				<div className='container'>
					<p>
						Samitivej Digestive Health Center ("we", "our", "us") values your privacy and is committed to protecting your personal data in accordance with applicable laws including the Personal Data
						Protection Act (PDPA) of Thailand and international data protection standards.
					</p>

					<h4 className='mt-4'>1. Information We Collect</h4>
					<p>We may collect the following types of information:</p>
					<ul>
						<li>Personal identification information (name, email, phone number)</li>
						<li>Medical inquiry details submitted via forms</li>
						<li>Appointment booking information</li>
						<li>Website usage data and cookies</li>
					</ul>

					<h4 className='mt-4'>2. How We Use Your Information</h4>
					<p>Your data may be used to:</p>
					<ul>
						<li>Respond to inquiries and provide medical information</li>
						<li>Schedule appointments or consultations</li>
						<li>Improve our website and services</li>
						<li>Comply with legal and regulatory requirements</li>
					</ul>

					<h4 className='mt-4'>3. Data Protection</h4>
					<p>We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.</p>

					<h4 className='mt-4'>4. Data Sharing</h4>
					<p>We do not sell or rent your personal data. Information may only be shared with authorized medical staff, service providers, or regulators when required.</p>

					<h4 className='mt-4'>5. Cookies</h4>
					<p>Our website may use cookies to enhance user experience and analyze traffic. You can disable cookies via your browser settings.</p>

					<h4 className='mt-4'>6. Your Rights</h4>
					<p>You have the right to:</p>
					<ul>
						<li>Request access to your personal data</li>
						<li>Request correction or deletion</li>
						<li>Withdraw consent at any time</li>
						<li>Lodge a complaint with a regulatory authority</li>
					</ul>

					<h4 className='mt-4'>7. Data Retention</h4>
					<p>We retain personal data only as long as necessary for medical, legal, or operational purposes.</p>

					<h4 className='mt-4'>8. Third-Party Links</h4>
					<p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>

					<h4 className='mt-4'>9. Policy Updates</h4>
					<p>We may update this Privacy Policy periodically. Changes will be posted on this page with the updated date.</p>

					<h4 className='mt-4'>10. Contact Us</h4>
					<p>If you have any questions about this Privacy Policy or your data, please contact us via the Contact page.</p>

					<p className='text-muted mt-5'>Last updated: {new Date().toLocaleDateString()}</p>
				</div>
			</section>
			<AppointmentModal />
			<Footer />
		</>
	);
}
