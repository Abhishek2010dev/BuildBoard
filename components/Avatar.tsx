"use client";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComponent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="flex flex-col items-center gap-4 p-4"
		>
			<Avatar className="w-48 h-48 rounded-full shadow-2xl border-2 border-neutral-700">
				<AvatarImage
					src="/images/profile.png"
					alt="Abhishek Kumar Singh"
					className="object-cover"
				/>
				<AvatarFallback className="text-3xl font-semibold">AKS</AvatarFallback>
			</Avatar>
		</motion.div>
	);
}
