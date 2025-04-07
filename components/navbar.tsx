"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
	IconBrandGithub,
	IconHome,
	IconLayoutGrid,
	IconNotebook,
	IconUserCircle,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function FloatingDockDemo() {
	const iconStyle = "h-full w-full text-neutral-500 dark:text-neutral-300";

	const [time, setTime] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const options: Intl.DateTimeFormatOptions = {
				timeZone: "Asia/Kolkata",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			};
			setTime(now.toLocaleTimeString("en-IN", options));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	const links = [
		{ title: "Home", icon: <IconHome className={iconStyle} />, href: "/" },
		{
			title: "About",
			icon: <IconUserCircle className={iconStyle} />,
			href: "/about",
		},
		{
			title: "Work",
			icon: <IconLayoutGrid className={iconStyle} />,
			href: "/work",
		},
		{
			title: "Blog",
			icon: <IconNotebook className={iconStyle} />,
			href: "/blog",
		},
		{
			title: "Github",
			icon: <IconBrandGithub className={iconStyle} />,
			href: "https://github.com/Abhishek2010dev",
		},
	];

	return (
		<>
			{/* Left - Time */}
			<motion.div
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="fixed top-6 left-4 z-50 text-sm font-mono text-neutral-500 dark:text-neutral-300"
			>
				{time}
			</motion.div>

			{/* Center - Floating Dock */}
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
			>
				<FloatingDock items={links} mobileClassName="" />
			</motion.div>

			{/* Right - Label */}
			<motion.div
				initial={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				className="fixed top-6 right-4 z-50 text-sm font-mono text-neutral-500 dark:text-neutral-300"
			>
				Asia/Kolkata
			</motion.div>
		</>
	);
}
