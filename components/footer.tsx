import React from "react";
import { Github } from "lucide-react";
import {
	IconBrandGithub,
	IconBrandGmail,
	IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
	return (
		<div className="text-white bg-black py-4">
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
				<div className="flex gap-4 mt-2">
					<a
						href="https://github.com/Abhishek2010dev"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
					>
						<IconBrandGithub className="w-5 h-5 sm:w-6 sm:h-6" />
					</a>
					<a
						href="https://www.linkedin.com/in/abhishek-kumar-singh-3b5a612b9/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-700 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
					>
						<IconBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
					</a>
					<a
						href="mailto:abhishekkumar2010dev@gmail.com"
						className="text-neutral-700 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
					>
						<IconBrandGmail className="w-5 h-5 sm:w-6 sm:h-6" />
					</a>
				</div>
				<p className="mt-4 md:mt-0 text-sm text-gray-300">
					&copy; 2024 Abhishek Hub. All rights reserved.
				</p>
			</div>
		</div>
	);
}
