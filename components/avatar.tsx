"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComponent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="flex flex-col items-center sm:items-start justify-center gap-4 p-6 sm:p-8 md:p-10"
		>
			<Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-xl border-2 border-neutral-700">
				<AvatarImage
					src="/images/profile.png"
					alt="Abhishek Kumar Singh's profile"
					className="object-cover"
				/>
				<AvatarFallback className="text-xl sm:text-2xl md:text-3xl font-semibold">
					AKS
				</AvatarFallback>
			</Avatar>
			<p className="text-center sm:text-left text-base sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
				Abhishek Kumar Singh
			</p>
		</motion.div>
	);
}
