/** @format */

export const TopBar = () => {
	return (
		<div className='bg-success text-white py-2 small fw-semibold d-none d-md-block'>
			<div className='container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2'>
				<div className='text-center text-md-start'>Your health is our priority — we're here for you 24/7</div>

				<div className='d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-2'>
					<span className='d-flex align-items-center gap-2'>
						<i className='bi bi-envelope'></i>
						<span>contact@example.com</span>
					</span>

					<span className='d-flex align-items-center gap-2'>
						<i className='bi bi-telephone'></i>
						<a
							href='tel:+66944499899'
							className='text-white text-decoration-none'
						>
							+66 94 449 9899
						</a>
					</span>

					<div className='d-flex gap-3 ms-md-3 social-icon'>
						<a
							href='https://www.facebook.com/samitivejdigestive'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white fs-5'
						>
							<i className='bi bi-facebook'></i>
						</a>
						<a
							href='https://www.instagram.com/samitivejdigestivehealth'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white fs-5'
						>
							<i className='bi bi-instagram'></i>
						</a>
						<a
							href='https://www.tiktok.com/@samitivejdigestivehealth'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white fs-5'
						>
							<i className='bi bi-tiktok'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
