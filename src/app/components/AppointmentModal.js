/** @format */
import React from "react";

export const AppointmentModal = () => {
	return (
		<div
			className='modal fade'
			id='appointmentModal'
			tabIndex='-1'
			aria-hidden='true'
		>
			{/* ปรับ modal-dialog ให้มีความกว้างที่เหมาะสมในแต่ละจอ */}
			<div className='modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down'>
				<div
					className='modal-content border-0'
					style={{ backgroundColor: "#198754", color: "white" }}
				>
					{/* Header: ปุ่มปิด X - เพิ่ม Padding ให้เหมาะกับนิ้วมือ */}
					<div className='modal-header border-0 justify-content-end p-3 pb-0'>
						<button
							type='button'
							className='btn-close btn-close-white shadow-none'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>

					<div className='modal-body px-4 px-md-5 pb-5'>
						{/* ปรับขนาดหัวข้อให้เล็กลงอัตโนมัติบนมือถือด้วย fs-x */}
						<h2 className='text-center fw-normal mb-4 display-6'>GET IN TOUCH</h2>

						<form>
							<div className='row g-3'>
								{/* Name: บนมือถือ (col-12) เรียงแถวเดียว, บนไอแพต/คอม (col-md-6) แบ่งครึ่ง */}
								<div className='col-12 col-md-6 text-start'>
									<label className='form-label small'>Name*</label>
									<input
										type='text'
										className='form-control rounded-2 border-0 py-2'
										placeholder='First Name'
										required
									/>
								</div>
								<div className='col-12 col-md-6 text-start'>
									{/* ซ่อน label เว้นวรรคบนมือถือ เพราะฟิลด์เรียงต่อกันแล้ว */}
									<label className='form-label d-none d-md-block'>&nbsp;</label>
									<input
										type='text'
										className='form-control rounded-2 border-0 py-2'
										placeholder='Last Name'
										required
									/>
								</div>

								{/* Email */}
								<div className='col-12 text-start'>
									<label className='form-label small'>Email Address*</label>
									<input
										type='email'
										className='form-control rounded-2 border-0 py-2'
										placeholder='Email'
										required
									/>
								</div>

								{/* Phone */}
								<div className='col-12 text-start'>
									<label className='form-label small'>Phone</label>
									<input
										type='tel'
										className='form-control rounded-2 border-0 py-2'
										placeholder='+66 456 35449115'
									/>
								</div>

								{/* Subject */}
								<div className='col-12 text-start'>
									<label className='form-label small'>Subject</label>
									<select className='form-select rounded-2 border-0 py-2'>
										<option>All Inclusive</option>
										<option>Consultation</option>
										<option>Surgery</option>
									</select>
								</div>

								{/* Message */}
								<div className='col-12 text-start'>
									<label className='form-label small'>How can we assist you?</label>
									<textarea
										className='form-control rounded-2 border-0'
										rows='4'
										placeholder='enter your message'
									></textarea>
								</div>

								{/* Submit Button: ปรับให้กว้างเต็มจอ (d-grid) บนมือถือเพื่อให้กดง่าย */}
								<div className='col-12 text-center mt-4 d-grid d-md-block'>
									<button
										type='submit'
										className='btn btn-outline-light px-5 py-2 rounded-2 fw-semibold'
									>
										Start Your Journey
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
