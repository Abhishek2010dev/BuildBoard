"use client";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { MarksChart } from "./marks-chart";

export default function Information() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="md:col-span-2 space-y-6"
		>
			<Card>
				<CardHeader>
					<CardTitle>Abhishek Kumar Singh</CardTitle>
					<CardDescription>
						Rustacean & TypeScript developer with a deep love for minimalism.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						A curious and passionate programmer who enjoys building fast,
						reliable backends with <strong>Rust + Axum</strong> and crafting
						elegant frontends using <strong>SvelteKit</strong> and{" "}
						<strong>Tailwind CSS</strong>. Fully keyboard-driven, minimal by
						nature, and powered by <strong>Arch Linux</strong> for full system
						control.
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Academic Details</CardTitle>
					<CardDescription>
						Current academic standing and recent achievements.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-neutral-300 mt-2">
						<strong>School:</strong> Army Public School, ASC Centre, Bangalore
					</p>
					<p className="text-sm text-neutral-300">
						<strong>Class:</strong> 9th &mdash; Scored <strong>86%</strong> in
						Class 8
					</p>
				</CardContent>
			</Card>
			<MarksChart />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Languages</CardTitle>
						<CardDescription>Languages I can speak and write</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Hindi, English</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Programming Languages</CardTitle>
						<CardDescription>Languages I use to build software</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Java, Rust, Go, TypeScript, Python</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Skills / Tech Stack</CardTitle>
						<CardDescription>
							Technologies and frameworks I use regularly
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Next.js, SvelteKit, Axum, Tailwind CSS, Gin</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Operating System</CardTitle>
						<CardDescription>
							What I use daily to build and work
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Arch Linux</p>
					</CardContent>
				</Card>
			</div>
		</motion.div>
	);
}
