/** @format */

export const Hero = () => {
	return (
		<section
			className='position-relative d-flex align-items-center text-white'
			style={{
				minHeight: "clamp(420px, 70vh, 820px)", // ⭐ ความสูงยืดหยุ่น
				backgroundImage: "url('/hero2.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div
				className='position-absolute w-100 h-100 bg-dark'
				style={{ opacity: 0.35 }}
			></div>

			<div className='container position-relative'>
				<div className='col-lg-6'>
					<h1
						className='fw-bold mb-3'
						style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }} // ⭐ ฟอนต์ responsive
					>
						Bangkok Opticare Co.,LTD
					</h1>

					<p
						className='mb-4'
						style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
					>
						Trust Bangkok Opticare Co.,LTD for expertise in the digestive system and intestinal health.
					</p>

					<button className='btn btn-success px-4 py-2 rounded-2 fw-semibold'>Read More</button>
				</div>
			</div>
		</section>
	);
};
