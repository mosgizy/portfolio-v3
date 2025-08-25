import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
	return (
		<header className="flex items-center justify-between py-12 w-full max-w-[65%] mx-auto">
			<h1 className="text-[38px] text-primary-200 font-sigma-one">PortFolio</h1>
			<div className="w-[59px] h-[59px] rounded-full bg-secondary-100 flex justify-center items-center cursor-pointer">
				<FontAwesomeIcon icon={faMoon} className="text-3xl" />
			</div>
		</header>
	);
};

export default Header;
