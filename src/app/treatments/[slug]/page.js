/** @format */ "use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Clock, DollarSign, ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";
import { TopBar } from "../../Topbar";
import { Navbar } from "../../Navbar";
import { PatientStories } from "../../components/PatientStories";
import { AppointmentModal } from "../../components/AppointmentModal";
import { TrustedPartners } from "../../components/TrustedPartners";
import { Footer } from "../../components/Footer";
/* ========================= ANIMATION ========================= */ const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
	viewport: { once: true },
};
/* ========================= DATA ========================= */ const treatmentData = {
	colonoscopy: {
		title: "Colonoscopy Examination",
		image: "/colonoscopy.jpg",
		overview:
			"Colonoscopy is a diagnostic procedure used to examine the inner lining of the large intestine. It helps detect polyps, inflammation, bleeding sources, and early-stage colorectal cancer.",
		who: ["People aged 45+ for cancer screening", "Patients with digestive symptoms", "Family history of colon cancer"],
		steps: ["Bowel preparation with special diet and medication", "Sedation before procedure", "Insertion of colonoscope through rectum", "Inspection and removal of polyps if found"],
		duration: "30–60 minutes",
		recovery: "Most patients return home the same day and resume normal activities within 24 hours.",
		benefits: ["Early detection of colon cancer", "Prevention by removing precancerous polyps", "Minimally invasive and safe"],
		risks: ["Mild bloating or discomfort", "Rare bleeding after polyp removal", "Very rare bowel perforation"],
		priceRange: "$500 – $1,200",
		symptoms: ["Persistent abdominal pain", "Blood in stool", "Chronic constipation or diarrhea", "Unexplained weight loss"],

		highlights: ["Performed by board-certified specialists", "Advanced minimally invasive techniques", "International standard equipment", "Fast recovery with high safety"],

		faq: [
			{
				q: "Is this procedure painful?",
				a: "Most procedures are done with sedation, so patients feel minimal discomfort.",
			},
			{
				q: "Do I need to stay overnight?",
				a: "Depends on the procedure, but many are same-day treatments.",
			},
		],
	},
	surgery: {
		title: "Intestinal Surgery",
		image: "/surgery.jpg",
		overview: "Intestinal surgery is performed to treat severe bowel diseases such as obstruction, perforation, tumors, or chronic inflammatory conditions.",
		who: ["Patients with bowel obstruction", "Severe Crohn's disease", "Patients with intestinal tumors"],
		steps: ["Pre-operative evaluation", "General anesthesia", "Laparoscopic or open surgery", "Post-operative monitoring"],
		duration: "2–4 hours",
		recovery: "Hospital stay 3–10 days, full recovery in 2–6 weeks.",
		benefits: ["Relieves life-threatening conditions", "Removes diseased bowel", "Improves digestion"],
		risks: ["Infection", "Bleeding", "Temporary bowel changes"],
		priceRange: "$3,000 – $8,000",
		symptoms: ["Persistent abdominal pain", "Blood in stool", "Chronic constipation or diarrhea", "Unexplained weight loss"],

		highlights: ["Performed by board-certified specialists", "Advanced minimally invasive techniques", "International standard equipment", "Fast recovery with high safety"],

		faq: [
			{
				q: "Is this procedure painful?",
				a: "Most procedures are done with sedation, so patients feel minimal discomfort.",
			},
			{
				q: "Do I need to stay overnight?",
				a: "Depends on the procedure, but many are same-day treatments.",
			},
		],
	},
	cancer: {
		title: "Colon Cancer Surgery",
		image: "/gi-surgery.webp",
		overview: "Colon cancer surgery removes tumors and surrounding lymph nodes to prevent cancer spread.",
		who: ["Patients diagnosed with colon cancer", "Patients with tumors", "Advanced polyps cases"],
		steps: ["Imaging and staging", "Tumor removal", "Lymph node check", "Post-surgery care"],
		duration: "3–5 hours",
		recovery: "Hospital stay 5–10 days. Recovery 4–8 weeks.",
		benefits: ["Removes cancer source", "Improves survival", "Prevents spread"],
		risks: ["Infection", "Bleeding", "Bowel changes"],
		priceRange: "$6,000 – $15,000",
		symptoms: ["Persistent abdominal pain", "Blood in stool", "Chronic constipation or diarrhea", "Unexplained weight loss"],

		highlights: ["Performed by board-certified specialists", "Advanced minimally invasive techniques", "International standard equipment", "Fast recovery with high safety"],

		faq: [
			{
				q: "Is this procedure painful?",
				a: "Most procedures are done with sedation, so patients feel minimal discomfort.",
			},
			{
				q: "Do I need to stay overnight?",
				a: "Depends on the procedure, but many are same-day treatments.",
			},
		],
	},
};
/* ========================= PAGE ========================= */ export default function TreatmentDetail() {
	const params = useParams();
	const slug = params.slug;
	const data = treatmentData[slug];
	if (!data) {
		return <div className='container py-5'>Not found</div>;
	}
	return (
		<>
			{" "}
			<TopBar /> <Navbar /> <AppointmentModal /> {/* HERO */}{" "}
			<section
				className='position-relative text-white'
				style={{ height: "65vh", minHeight: "420px" }}
			>
				{" "}
				<Image
					src={data.image}
					fill
					className='object-fit-cover'
					alt={data.title}
				/>{" "}
				{/* overlay */}{" "}
				<div
					className='position-absolute w-100 h-100'
					style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9))" }}
				/>{" "}
				<div className='container position-relative h-100 d-flex flex-column justify-content-center'>
					{" "}
					<motion.div {...fadeUp}>
						{" "}
						<span className='badge bg-success mb-3 px-3 py-2'>International GI Center</span> <h1 className='display-5 fw-bold'>{data.title}</h1> <p className='lead col-lg-7'>{data.overview}</p>{" "}
						<div className='d-flex gap-3 mt-3'>
							{" "}
							<button
								className='btn btn-success px-4'
								data-bs-toggle='modal'
								data-bs-target='#appointmentModal'
							>
								{" "}
								Book Now{" "}
							</button>{" "}
							<Link
								href='/contact'
								className='btn btn-outline-light px-4'
							>
								{" "}
								Contact{" "}
							</Link>{" "}
						</div>{" "}
					</motion.div>{" "}
				</div>{" "}
			</section>{" "}
			<TrustedPartners /> {/* INFO CARDS */}{" "}
			<section className='py-5 bg-light'>
				{" "}
				<div className='container'>
					{" "}
					<div className='row g-4 text-center'>
						{" "}
						{[
							{ icon: <Clock size={28} />, title: "Duration", value: data.duration },
							{ icon: <ShieldCheck size={28} />, title: "Recovery", value: data.recovery },
							{ icon: <DollarSign size={28} />, title: "Price", value: data.priceRange },
						].map((item, i) => (
							<div
								className='col-12 col-md-4'
								key={i}
							>
								{" "}
								<motion.div
									{...fadeUp}
									className='p-4 bg-white rounded-4 shadow h-100 hover-card'
								>
									{" "}
									<div className='mb-3 text-success'>{item.icon}</div> <h6 className='text-muted'>{item.title}</h6> <h5 className='fw-bold'>{item.value}</h5>{" "}
								</motion.div>{" "}
							</div>
						))}{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			{/* CONTENT */}{" "}
			<section className='py-5'>
				{" "}
				<div className='container'>
					{" "}
					<div className='row g-5 align-items-center'>
						{" "}
						{/* TEXT */}{" "}
						<div className='col-lg-6'>
							{" "}
							<motion.div {...fadeUp}>
								{" "}
								<h2 className='text-success mb-4'>Who Needs This</h2>{" "}
								<ul className='list-group'>
									{" "}
									{data.who.map((item, i) => (
										<li
											key={i}
											className='list-group-item d-flex align-items-center gap-2'
										>
											{" "}
											<CheckCircle
												size={18}
												className='text-success'
											/>{" "}
											{item}{" "}
										</li>
									))}{" "}
								</ul>{" "}
							</motion.div>{" "}
						</div>{" "}
						{/* IMAGE */}{" "}
						<div className='col-lg-6'>
							{" "}
							<motion.div {...fadeUp}>
								{" "}
								<img
									src='/ai-intestine-doctor.png'
									width={600}
									height={400}
									alt='doctor'
									className='rounded-4 shadow-lg'
									style={{ objectFit: "cover" }}
								/>{" "}
							</motion.div>{" "}
						</div>{" "}
					</div>{" "}
					{/* STEPS */}{" "}
					<div className='mt-5'>
						{" "}
						<h2 className='text-success mb-4'>Procedure Steps</h2>{" "}
						<div className='row g-4'>
							{" "}
							{data.steps.map((step, i) => (
								<div
									key={i}
									className='col-12 col-md-6'
								>
									{" "}
									<motion.div
										{...fadeUp}
										className='p-4 border rounded-4 shadow-sm h-100 hover-card'
									>
										{" "}
										<h5 className='fw-bold text-success'>Step {i + 1}</h5> <p>{step}</p>{" "}
									</motion.div>{" "}
								</div>
							))}{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='row g-5'>
						{/* SYMPTOMS */}
						<div className='col-md-6'>
							<h3 className='text-success mb-3'>Symptoms</h3>
							<ul className='list-group'>
								{data.symptoms?.map((s, i) => (
									<li
										key={i}
										className='list-group-item d-flex gap-2'
									>
										<AlertTriangle
											className='text-warning'
											size={18}
										/>
										{s}
									</li>
								))}
							</ul>
						</div>

						{/* HIGHLIGHTS */}
						<div className='col-md-6'>
							<h3 className='text-success mb-3'>Why Choose Us</h3>
							<ul className='list-group'>
								{data.highlights?.map((h, i) => (
									<li
										key={i}
										className='list-group-item d-flex gap-2'
									>
										<CheckCircle
											className='text-success'
											size={18}
										/>
										{h}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* BENEFITS / RISKS */}{" "}
			<section className='py-5 bg-light'>
				{" "}
				<div className='container'>
					{" "}
					<div className='row g-5'>
						{" "}
						<div className='col-md-6'>
							{" "}
							<h3 className='text-success mb-3'>Benefits</h3>{" "}
							<ul>
								{" "}
								{data.benefits.map((b, i) => (
									<li
										key={i}
										className='d-flex gap-2'
									>
										{" "}
										<CheckCircle
											className='text-success'
											size={18}
										/>{" "}
										{b}{" "}
									</li>
								))}{" "}
							</ul>{" "}
						</div>{" "}
						<div className='col-md-6'>
							{" "}
							<h3 className='text-danger mb-3'>Risks</h3>{" "}
							<ul>
								{" "}
								{data.risks.map((r, i) => (
									<li
										key={i}
										className='d-flex gap-2'
									>
										{" "}
										<AlertTriangle
											className='text-danger'
											size={18}
										/>{" "}
										{r}{" "}
									</li>
								))}{" "}
							</ul>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			<section className='py-5'>
				<div className='container'>
					<h2 className='text-success mb-4'>Frequently Asked Questions</h2>

					<div
						className='accordion'
						id='faqAccordion'
					>
						{data.faq?.map((item, i) => (
							<div
								className='accordion-item'
								key={i}
							>
								<h2 className='accordion-header'>
									<button
										className='accordion-button collapsed'
										data-bs-toggle='collapse'
										data-bs-target={`#faq${i}`}
									>
										{item.q}
									</button>
								</h2>

								<div
									id={`faq${i}`}
									className='accordion-collapse collapse'
								>
									<div className='accordion-body'>{item.a}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* CTA */}{" "}
			<section className='bg-success text-white text-center py-5'>
				{" "}
				<div className='container'>
					{" "}
					<h3 className='fw-bold'>Get Consultation Within 24 Hours</h3> <p className='opacity-75'>Our specialists are ready to assist you</p>{" "}
					<Link
						href='/contact'
						className='btn btn-light btn-lg px-5'
					>
						{" "}
						Contact Now{" "}
					</Link>{" "}
				</div>{" "}
			</section>{" "}
			<PatientStories /> <Footer />{" "}
		</>
	);
}
