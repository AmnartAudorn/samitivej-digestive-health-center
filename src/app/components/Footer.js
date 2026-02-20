/** @format */
"use client";

import React from "react";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	// กำหนดโทนสีเขียวเข้มแบบ Premium
	const footerStyle = {
		backgroundColor: "#0a3d2e", // สีเขียวเข้ม (Dark Emerald)
		color: "#ffffff",
	};

	return (
		<footer
			style={footerStyle}
			className='pt-5 pb-3'
		>
			<div className='container'>
				<div className='row gx-lg-5'>
					{/* 1. Brand & Description */}
					<div className='col-lg-4 mb-4'>
						<h4 className='fw-bold text-white mb-3'>
							Bangkok <span style={{ color: "#4ade80" }}>Opticare</span>
						</h4>
						<p
							className='opacity-75 small'
							style={{ lineHeight: "1.8" }}
						>
							Your trusted center for comprehensive digestive and gastrointestinal care. We are dedicated to providing world-class medical technology and expert care to ensure your digestive health
							and overall well-being.
						</p>
						{/* Social Icons */}

						<div className='d-flex gap-3 mt-4'>
							<a
								href='#'
								className='text-white'
							>
								<i className='bi bi-facebook fs-4'></i>
							</a>
							<a
								href='#'
								className='text-white'
							>
								<i className='bi bi-line fs-4'></i>
							</a>
							<a
								href='#'
								className='text-white'
							>
								<i className='bi bi-instagram fs-4'></i>
							</a>
						</div>
					</div>

					{/* 2. Quick Links */}
					<div className='col-6 col-md-3 col-lg-2 mb-4'>
						<h6 className='fw-bold mb-3 pb-2 border-bottom border-secondary'>SERVICES</h6>
						<ul className='list-unstyled small'>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Procedures
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Packages
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Doctors
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Hospitals
								</a>
							</li>
						</ul>
					</div>

					{/* 3. Company */}
					<div className='col-6 col-md-3 col-lg-2 mb-4'>
						<h6 className='fw-bold mb-3 pb-2 border-bottom border-secondary'>COMPANY</h6>
						<ul className='list-unstyled small'>
							<li className='mb-2'>
								<a
									href='/about'
									className='text-decoration-none text-white-50 hover-white'
								>
									About Us
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Our Process
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									FAQ
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#'
									className='text-decoration-none text-white-50 hover-white'
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* 4. Contact Info */}
					<div className='col-md-6 col-lg-4 mb-4'>
						<div
							className='p-4 rounded-3'
							style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
						>
							<h6 className='fw-bold mb-3 text-white'>CONTACT US</h6>
							<ul className='list-unstyled small mb-0'>
								<li className='mb-3 d-flex gap-3'>
									<i className='bi bi-geo-alt-fill text-success'></i>
									<span className='text-white-50'>Samitivej Chinatown Hospital, Bangkok, Thailand, 10100</span>
								</li>
								<li className='mb-3 d-flex gap-3'>
									<i className='bi bi-telephone-fill text-success'></i>
									<span className='text-white-50'>094-449-9899</span>
								</li>
								<li className='mb-0 d-flex gap-3'>
									<i className='bi bi-envelope-fill text-success'></i>
									<span className='text-white-50'>info@opticare.com</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<hr className='my-4 border-secondary opacity-25' />

				{/* Bottom Footer */}
				<div className='row align-items-center opacity-75'>
					<div className='col-md-6 text-center text-md-start'>
						<p className='small mb-0'>© {currentYear} Bangkok Opticare Co.,LTD. All rights reserved.</p>
					</div>
					<div className='col-md-6 text-center text-md-end mt-2 mt-md-0'>
						<a
							href='#'
							className='small text-white-50 text-decoration-none me-3'
						>
							Privacy Policy
						</a>
						<a
							href='#'
							className='small text-white-50 text-decoration-none'
						>
							Terms
						</a>
					</div>
				</div>
			</div>

			{/* CSS สำหรับ Hover Effect */}
			<style jsx>{`
				.hover-white:hover {
					color: #ffffff !important;
					transition: 0.3s ease;
				}
			`}</style>
		</footer>
	);
};
