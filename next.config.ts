import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pizza-shop.oneentry.cloud/",
			},
		],
	},
};

export default nextConfig;
