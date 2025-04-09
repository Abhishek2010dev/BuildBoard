"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Code, School, Cpu, LibraryBig } from "lucide-react";
import { MarksChart } from "./marks-chart";

export const MotionCard = motion(Card);

const TechBadge = ({ children }: { children: string }) => (
	<motion.span
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		className="inline-block bg-neutral-800 px-3 py-1 rounded-full text-sm text-white mr-2 mb-2"
	>
		{children}
	</motion.span>
);

export default function Information() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="md:col-span-2 space-y-8"
		>
			<MotionCard whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
				<CardHeader className="flex flex-row items-start gap-4">
					<Cpu className="w-7 h-7 text-primary mt-1" />
					<div>
						<CardTitle className="text-4xl font-bold">
							Abhishek Kumar Singh
						</CardTitle>
						<CardDescription className="text-base text-neutral-400 mt-1">
							Rustacean. TypeScript fan. Minimalist dev on a mission.
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="text-[15px] text-neutral-300 leading-relaxed mt-2">
					<p>
						I build fast, reliable backends with <strong>Rust + Axum</strong>{" "}
						and craft beautiful, responsive frontends using{" "}
						<strong>SvelteKit</strong> and <strong>Tailwind CSS</strong>.
					</p>
					<p className="mt-3">
						Terminal over GUI. Fully keyboard-driven. Powered by{" "}
						<strong>Arch Linux</strong>.
					</p>
				</CardContent>
			</MotionCard>

			<MotionCard whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
				<CardHeader className="flex flex-row items-start gap-4">
					<School className="w-7 h-7 text-primary mt-1" />
					<div>
						<CardTitle className="text-2xl font-semibold">
							Academic Details
						</CardTitle>
						<CardDescription className="text-base text-neutral-400 mt-1">
							Where I grow (beyond just code).
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="text-[15px] text-neutral-300 space-y-2 mt-2">
					<p>
						<strong>School:</strong> Army Public School, ASC Centre, Bangalore
					</p>
					<p>
						<strong>Class:</strong> 9th — Scored <strong>86%</strong> in Class 8
					</p>
				</CardContent>
			</MotionCard>
			<MarksChart />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<MotionCard whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
					<CardHeader className="flex flex-row items-start gap-4">
						<Code className="w-7 h-7 text-primary mt-1" />
						<div>
							<CardTitle className="text-2xl font-semibold">
								Languages I Speak
							</CardTitle>
							<CardDescription className="text-base text-neutral-400 mt-1">
								From low-level systems to expressive web UIs
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent className="text-[15px] text-neutral-300 mt-2 flex flex-wrap">
						<TechBadge>Rust</TechBadge>
						<TechBadge>TypeScript</TechBadge>
						<TechBadge>Go</TechBadge>
						<TechBadge>Java</TechBadge>
						<TechBadge>Python</TechBadge>
					</CardContent>
				</MotionCard>

				<MotionCard whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
					<CardHeader className="flex flex-row items-start gap-4">
						<LibraryBig className="w-7 h-7 text-primary mt-1" />
						<div>
							<CardTitle className="text-2xl font-semibold">
								Tech Stack
							</CardTitle>
							<CardDescription className="text-base text-neutral-400 mt-1">
								Frameworks, tools & ecosystems I work with
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent className="text-[15px] text-neutral-300 mt-2 flex flex-wrap">
						<TechBadge>SvelteKit</TechBadge>
						<TechBadge>Next.js</TechBadge>
						<TechBadge>Axum</TechBadge>
						<TechBadge>Tailwind CSS</TechBadge>
						<TechBadge>Gin</TechBadge>
					</CardContent>
				</MotionCard>
			</div>
		</motion.div>
	);
}
