/** @format */

export const Hero = () => {
	return (
		<section className='hero-section position-relative d-flex align-items-center text-white'>
			{/* Overlay */}
			<div
				className='position-absolute w-100 h-100 bg-dark'
				style={{ opacity: 0.35 }}
			></div>

			<div className='container containertop position-relative'>
				<div className='col-lg-12'>
					<h1 className='hero-title fw-bold mb-3'>Samitivej Digestive Health Center</h1>

					<p className='hero-sub mb-4'>Trust Samitivej Digestive Health Center for expertise in the digestive system and intestinal health.</p>

					<button
						className='btn btn-success fw-bold px-6 py-2 rounded-1 shadow-sm hero-btn'
						data-bs-toggle='modal'
						data-bs-target='#appointmentModal'
					>
						GET IN TOUCH
					</button>
				</div>
			</div>
		</section>
	);
};
