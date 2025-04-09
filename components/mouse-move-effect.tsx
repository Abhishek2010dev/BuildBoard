"use client";

import { useEffect, useRef, useState } from "react";

const GRADIENT_RADIUS = 600;
const GRADIENT_COLOR = "rgba(37, 99, 235, 0.35)"; // Tailwind's blue-600 with opacity

export default function MouseMoveEffect() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		const isTouchDevice = matchMedia("(pointer: coarse)").matches;
		if (isTouchDevice) return; // Skip effect on mobile/tablet

		const handleMouseMove = (event: MouseEvent) => {
			if (rafId.current) cancelAnimationFrame(rafId.current);

			rafId.current = requestAnimationFrame(() => {
				setPosition({ x: event.clientX, y: event.clientY });
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 blur-sm"
			style={{
				background: `radial-gradient(${GRADIENT_RADIUS}px at ${position.x}px ${position.y}px, ${GRADIENT_COLOR}, transparent 80%)`,
			}}
		/>
	);
}
