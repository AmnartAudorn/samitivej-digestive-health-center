/** @format */

import Image from "next/image";

export const TrustedPartners = () => {
	const brands = [
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/6858d26eb7616d51495b7281_f09e7ef2da80a0b737b757ddc2ee20ec_Frame%20739.webp",
			name: "Vimut Hospital",
		},
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/687101d384b37ad4785c0353_914e9e96fa76f6f597288b06986d6256_Kasemrad%20Logo.webp",
			name: "Kasemrad",
		},
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/695c9adf4266e00b264d862a_world-mediacal-log150dpi_vertical.webp",
			name: "World Medical",
		},
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/671c85d235fd096f23b9f805_art%20svg.svg",
			name: "ART Hospital",
		},
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/695c9a7bc8f6cd2ad4150a39_DSRB_Black_cmyk%201.webp",
			name: "Dusit Suites",
		},
		{
			src: "https://cdn.prod.website-files.com/66e0766f4abff17e8c4707e5/670b72ad0f65495dc94eac51_logo_450px.png.webp",
			name: "Wansiri Hospital",
		},
	];

	return (
		<section className='py-5 bg-white'>
			<div className='container text-center'>
				<h2 className='fw-semibold text-success mb-5'>Our Trusted Partners</h2>

				<div className='row g-4 align-items-center justify-content-center'>
					{brands.map((brand, index) => (
						<div
							key={index}
							className='col-6 col-md-4 col-lg-2 d-flex justify-content-center'
						>
							<div
								style={{
									position: "relative",
									height: "70px",
									width: "140px",
								}}
							>
								<Image
									src={brand.src}
									alt={brand.name}
									fill
									style={{ objectFit: "contain" }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
