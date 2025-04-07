"use client";

import React from "react";
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
	const links = [
		{
			title: "Home",
			icon: <IconHome className={iconStyle} />,
			href: "/",
		},
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
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
		>
			<FloatingDock items={links} />
		</motion.div>
	);
}
