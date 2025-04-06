"use client";
import { motion } from "motion/react";
import Image from "next/image";

const headline = "Hi, I'm Abhishek — building fast, accessible web experiences";

const AnimatedHeadline = () => (
	<h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold leading-tight text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
		{headline.split(" ").map((word, index) => (
			<motion.span
				key={index}
				initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
				animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
				transition={{
					duration: 0.4,
					delay: index * 0.08,
					ease: "easeInOut",
				}}
				className="mr-2 inline-block"
			>
				{word}
			</motion.span>
		))}
	</h1>
);

export default function Hero() {
	return (
		<section className="px-4 py-16 md:py-24">
			<AnimatedHeadline />

			<motion.p
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="relative z-10 mx-auto mt-6 max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-400"
			>
				{`I'm a full-stack developer specializing in TypeScript, Rust, and
				building performant, delightful user interfaces.`}
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1 }}
				className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
			>
				<button
					aria-label="View my projects"
					className="w-60 transform rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
				>
					View Projects
				</button>
				<button
					aria-label="Contact me"
					className="w-60 transform rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
				>
					Contact Me
				</button>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1.3 }}
				className="relative z-10 mx-auto mt-12 max-w-4xl rounded-3xl border border-gray-200 p-2 shadow-lg dark:border-gray-700"
			>
				<div className="overflow-hidden rounded-2xl">
					<Image
						src="/images/hero.png"
						alt="Portfolio preview"
						className="aspect-[16/9] w-full object-cover"
						width={1200}
						height={675}
						priority
					/>
				</div>
			</motion.div>
		</section>
	);
}
