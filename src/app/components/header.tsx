'use client';

import { useStore } from '@/store/store';
import { faHamburger, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
	const { setHamburger, hamburger } = useStore();
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [active, setActive] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (boxRef.current && textRef.current) {
			const rect = boxRef.current.getBoundingClientRect();
			const textRect = textRef.current.getBoundingClientRect();
			const centerX = rect.width / 2 - textRect.width / 2;
			const centerY = rect.height / 2 - textRect.height / 2;
			setMousePosition({ x: centerX, y: centerY });
		}
	}, []);

	return (
		<header className="flex items-center justify-between py-6 px-4 lg:py-12 w-full lg:max-w-[65%] mx-auto">
			<div className="text-primary-200 text-2xl lg:text-[38px] flex gap-4 items-center">
				<div className="lg:hidden">
					<FontAwesomeIcon
						onClick={() => setHamburger()}
						icon={hamburger ? faXmark : faHamburger}
						className="cursor-pointer"
					/>
				</div>
				<div
					ref={boxRef}
					className="relative flex justify-center items-center w-[300px] h-[70px] overflow-hidden"
				>
					<h1
						ref={textRef}
						onMouseEnter={() => setActive(true)}
						onMouseLeave={() => {
							setActive(false);

							setMousePosition({ x: 0, y: 0 });
						}}
						onMouseMove={(e) => {
							if (active && boxRef.current && textRef.current) {
								const rect = boxRef.current.getBoundingClientRect();
								const textRect = textRef.current.getBoundingClientRect();

								let x = e.clientX - rect.left - textRect.width / 2;
								let y = e.clientY - rect.top - textRect.height / 2;

								const margin = 8;

								x = Math.max(margin, Math.min(x, rect.width - textRect.width - margin));
								y = Math.max(margin, Math.min(y, rect.height - textRect.height - margin));

								setMousePosition({ x, y });
							}
						}}
						style={{
							transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
						}}
						className={`absolute font-sigma-one transition-all duration-200 cursor-none ${
							active ? 'bg-secondary-700 rounded-3xl px-6' : ''
						}`}
					>
						Asterisk
					</h1>
				</div>
			</div>
			<div className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] rounded-full bg-secondary-100 flex justify-center items-center cursor-pointer">
				<FontAwesomeIcon icon={faMoon} className="text-xl lg:text-3xl" />
			</div>
		</header>
	);
};

export default Header;
