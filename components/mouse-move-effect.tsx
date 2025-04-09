"use client";

import { useEffect, useState } from "react";

export default function MouseMoveEffect() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
			style={{
				background: `radial-gradient(1000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.35), transparent 80%)`,
			}}
		/>
	);
}
