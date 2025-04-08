"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";

export default function Information() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="md:col-span-2 space-y-6"
		>
			<Card>
				<CardContent className="p-4">
					<h1 className="text-3xl font-bold tracking-tight">
						Abhishek Kumar Singh
					</h1>
					<p className="text-sm text-neutral-400">
						A passionate and curious programmer who loves to build with Rust and
						TypeScript. Enjoys crafting fast backends with Axum and elegant
						frontends using SvelteKit and Tailwind CSS. Keyboard-focused,
						minimal, and prefers Arch Linux for full control.
					</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
