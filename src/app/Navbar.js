/** @format */
"use client";

import React, { useEffect } from "react";

export const Navbar = () => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<nav className='navbar navbar-expand-md navbar-light navbar-home py-3'>
			<div className='container'>
				{/* 1. LOGO */}
				<a
					className='navbar-brand d-flex align-items-center gap-2'
					href='#'
				>
					<div className='d-flex flex-column lh-1'>
						<span className='fw-bold fs-4 text-success mb-0'>Bangkok Opticare Co.,LTD</span>
					</div>
				</a>

				{/* 2. Hamburger Button - ปรับ target ไปที่ offcanvasNavbar */}
				<button
					className='navbar-toggler border-0 shadow-none'
					type='button'
					data-bs-toggle='offcanvas'
					data-bs-target='#offcanvasNavbar'
					aria-controls='offcanvasNavbar'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='offcanvas offcanvas-end fullscreen-menu'
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'
				>
					{/* Header ของเมนูตอนเปิด (แสดงบนมือถือ) */}
					<div className='offcanvas-header border-bottom'>
						<h5
							className='offcanvas-title fw-bold text-success'
							id='offcanvasNavbarLabel'
						>
							Bangkok Opticare Co.,LTD
						</h5>
						<button
							type='button'
							className='btn-close shadow-none'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
						></button>
					</div>

					{/* Body ของเมนู */}
					<div className='offcanvas-body'>
						<ul className='navbar-nav mx-auto gap-xl-4 fw-semibold py-2 py-xl-0'>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/'
								>
									HOME
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='#'
									data-bs-toggle='dropdown'
								>
									PROCEDURES
								</a>
								<ul className='dropdown-menu border-0 shadow-sm'>
									<li>
										<a
											className='dropdown-item'
											href='#'
										>
											PACKAGES
										</a>
									</li>
								</ul>
							</li>

							<li className='nav-item'>
								<a
									className='nav-link'
									href='about'
								>
									ABOUT US
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='#'
									data-bs-toggle='dropdown'
								>
									RESOURCES
								</a>
								<ul className='dropdown-menu border-0 shadow-sm'>
									<li>
										<a
											className='dropdown-item'
											href='#'
										>
											DOCTORS
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='#'
										>
											HOSPITALS
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='#'
										>
											OUR PROCESS
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='#'
										>
											FAQ
										</a>
									</li>
								</ul>
							</li>
						</ul>

						{/* 4. ปุ่ม Book Appointment ในเมนูซ้าย */}
						<div className='d-grid d-xl-block mt-2 mt-xl-0'>
							<a
								href='/contact'
								className='btn btn-success fw-bold px-4 py-2 rounded-1 shadow-sm'
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
