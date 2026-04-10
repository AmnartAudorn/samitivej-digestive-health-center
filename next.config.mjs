/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		domains: ["images.unsplash.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "samitivejthonburi.com",
			},
			{
				protocol: "https",
				hostname: "cdn.prod.website-files.com",
			},
		],
	},
};

export default nextConfig;
