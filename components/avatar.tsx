"use client";

import { motion } from "framer-motion";
import {
	IconBrandLinkedin,
	IconBrandGithub,
	IconMail,
	IconBrandGmail,
} from "@tabler/icons-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Adjust this path based on your structure

export default function AvatarComponent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8 md:p-10"
		>
			<div className="relative">
				<Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-xl border-2 border-neutral-700 hover:scale-105 transition-transform">
					<AvatarImage
						src="/images/profile.png"
						alt="Abhishek Kumar Singh's profile"
						className="object-cover"
					/>
					<AvatarFallback className="text-xl sm:text-2xl md:text-3xl font-semibold">
						AKS
					</AvatarFallback>
				</Avatar>
			</div>

			{/* Name */}
			<p className="text-center text-base sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
				Abhishek Kumar Singh
			</p>

			{/* Tagline */}
			<p className="text-center text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
				Rustacean • TypeScript Dev • Vim Lover
			</p>

			{/* Language Tags */}
			<div className="flex gap-2 flex-wrap justify-center">
				<span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100">
					🇮🇳 Hindi
				</span>
				<span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100">
					🇬🇧 English
				</span>
			</div>

			{/* Social Links */}

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
		</motion.div>
	);
}
