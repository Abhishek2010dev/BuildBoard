"use client";
import { motion } from "motion/react";
import { Card, CardContent, CardTitle } from "./ui/card";

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
					<h1 className="text-3xl font-bold tracking-tight pb-2">
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

			<Card>
				<CardContent className="p-4">
					<h5 className="text-2xl font-semibold tracking-tight">
						Academic Details
					</h5>
					<p className="text-sm text-neutral-300 mt-2">
						<strong>School:</strong> Army Public School, ASC Center, Bangalore
					</p>
					<p className="text-sm text-neutral-300">
						<strong>Class:</strong> 9th (Scored 86% in Class 8)
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardTitle> Academic Details</CardTitle>
				<CardContent className="p-4">
					<div className="h-64 mt-4"></div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
