'use client';

import { useStore } from '@/store/store';
import { faHamburger, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
	const { setHamburger, hamburger } = useStore();

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
				<h1 className="font-sigma-one">PortFolio</h1>
			</div>
			<div className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] rounded-full bg-secondary-100 flex justify-center items-center cursor-pointer">
				<FontAwesomeIcon icon={faMoon} className="text-xl lg:text-3xl" />
			</div>
		</header>
	);
};

export default Header;
