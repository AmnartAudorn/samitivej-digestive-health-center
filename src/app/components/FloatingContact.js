/** @format */

"use client";
import { useState } from "react";

export default function FloatingContact() {
	const [open, setOpen] = useState(false);

	return (
		<div
			className='position-fixed bottom-0 end-0 p-4'
			style={{ zIndex: 9999 }}
		>
			{/* เมนู */}
			<div className={`d-flex flex-column align-items-end gap-2 mb-2 transition ${open ? "opacity-100 translate-show" : "opacity-0 translate-hide"}`}>
				<a
					href='https://www.facebook.com/samitivejdigestive'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-btn fb'
				>
					<i className='bi bi-facebook'></i>
				</a>

				<a
					href='https://www.instagram.com/samitivejdigestivehealth'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-btn ig'
				>
					<i className='bi bi-instagram'></i>
				</a>

				<a
					href='https://www.tiktok.com/@samitivejdigestivehealth'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-btn tk'
				>
					<i className='bi bi-tiktok'></i>
				</a>

				<a
					href='/contact'
					className='contact-btn call'
				>
					<i className='bi bi-telephone-fill'></i>
				</a>
			</div>

			{/* ปุ่มหลัก */}
			<button
				onClick={() => setOpen(!open)}
				className='main-contact-btn'
			>
				<i className={`bi ${open ? "bi-x-lg" : "bi-three-dots"} fs-4`}></i>
			</button>
		</div>
	);
}
