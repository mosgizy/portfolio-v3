'use client';

import {
	faContactBook,
	faLaptopCode,
	faNewspaper,
	faPenNib,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
	const pathname = usePathname();

	const navInfo = [
		{
			title: 'about',
			icon: faUser,
			route: '/',
		},
		{
			title: 'experience',
			icon: faNewspaper,
			route: '/experience',
		},
		{
			title: 'projects',
			icon: faLaptopCode,
			route: '/projects',
		},
		{
			title: 'skills',
			icon: faPenNib,
			route: '/skills',
		},
		{
			title: 'contact',
			icon: faContactBook,
			route: '/contact',
		},
	];

	return (
		<nav className="font-poppins bg-neutral-100 border-3 border-tertiary-300 rounded-xl max-h-max mt-36 px-6 py-7 flex flex-col gap-5">
			{navInfo.map((info) => {
				return (
					<Link
						key={info.title}
						href={info.route}
						className={`${
							pathname === info.route
								? 'bg-secondary-100 text-neutral-100'
								: 'bg-secondary-800 text-secondary-900'
						} px-2 py-2 flex flex-col gap-1 items-center rounded-sm`}
					>
						<FontAwesomeIcon icon={info.icon} className="text-2xl" />
						<span className="text-xs font-medium mt-1">{info.title}</span>
					</Link>
				);
			})}
		</nav>
	);
};

export default NavBar;
