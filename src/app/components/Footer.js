/** @format */

"use client";

import Image from "next/image";

export const Footer = () => {
	return (
		<footer className='bg-dark text-light pt-5'>
			<div className='container'>
				{/* TOP LINE */}
				<hr className='border-secondary opacity-50' />

				{/* SOCIAL */}
				<div className='text-center mb-4'>
					<div className='d-flex justify-content-center gap-3'>
						<a
							href='#'
							target='_blank'
						>
							<Image
								src='https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/6816dcf5173ad8578db244f9_a12684c2871fa86c1b800c595c2ef58f_FB_Icon.webp'
								width={36}
								height={36}
								alt='facebook'
							/>
						</a>

						<a
							href='#'
							target='_blank'
						>
							<Image
								src='https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/6816dcf51e7e0d623345aa9e_3626e9d95af5735228bdfc936a199696_IG_Icon.webp'
								width={36}
								height={36}
								alt='instagram'
							/>
						</a>

						<a
							href='#'
							target='_blank'
						>
							<Image
								src='https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/6816dcf5e3a672f015b3cfc1_b16d0a97c1b89c0519d01ea12ac9c292_TikTok_Icon.webp'
								width={36}
								height={36}
								alt='tiktok'
							/>
						</a>

						<a
							href='#'
							target='_blank'
						>
							<Image
								src='https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/6816dcf52b10b43b94fd3cfa_0e229c6ec26e444d30b791157f2a62f9_Youtube_Icon.webp'
								width={36}
								height={36}
								alt='youtube'
							/>
						</a>
					</div>
				</div>

				{/* CONTENT GRID */}
				<div className='row text-center text-md-start gy-4'>
					{/* COMPANY */}
					<div className='col-md-3'>
						<h6 className='fw-bold text-success'>Bangkok Opticare Co., LTD</h6>
						<p className='small text-secondary mb-1'>283/39 Homeplace Office Building</p>
						<p className='small text-secondary mb-1'>Thong Lo 13 Alley</p>
						<p className='small text-secondary mb-1'>Bangkok 10110</p>
						<p className='small text-secondary'>Thailand</p>
					</div>

					{/* RESOURCES */}
					<div className='col-md-3'>
						<h6 className='fw-bold text-success'>Resources</h6>
						<ul className='list-unstyled small'>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Treatments
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Clinics
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Payment Plans
								</a>
							</li>
						</ul>
					</div>

					{/* ABOUT */}
					<div className='col-md-3'>
						<h6 className='fw-bold text-success'>About</h6>
						<ul className='list-unstyled small'>
							<li>
								<a
									href='/about'
									className='text-secondary text-decoration-none'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='text-secondary text-decoration-none'
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* POLICY */}
					<div className='col-md-3'>
						<h6 className='fw-bold text-success'>Policy</h6>
						<ul className='list-unstyled small'>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Terms
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-secondary text-decoration-none'
								>
									Disclaimer
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* BOTTOM */}
				<hr className='border-secondary opacity-50 mt-4' />

				<p className='text-center small text-secondary pb-4 mb-0'>© {new Date().getFullYear()} Bangkok Opticare Co., LTD — All Rights Reserved</p>
			</div>
		</footer>
	);
};
