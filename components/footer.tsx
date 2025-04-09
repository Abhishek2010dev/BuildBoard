import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";

export default function Footer() {
	return (
		<div className="text-white bg-black py-4">
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center space-x-4">
					<Link
						href="https://github.com/Abhishek2010dev"
						className="text-white hover:text-gray-300"
						prefetch={false}
					>
						<Github className="h-5 w-5" />
						<span className="sr-only">GitHub</span>
					</Link>
				</div>
				<p className="mt-4 md:mt-0 text-sm text-gray-300">
					&copy; 2024 Abhishek Hub. All rights reserved.
				</p>
			</div>
		</div>
	);
}
