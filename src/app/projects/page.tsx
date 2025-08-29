import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
	const projects = [
		{
			image: '/images/dashboard.png',
			title: 'user dashboard',
			link: 'https://user-dashboard-lyart-chi.vercel.app/dashboard',
		},

		{
			image: '/images/portfolio.png',
			title: 'portfolio v2',
			link: 'https://moshood.vercel.app/portfolio',
		},
		{
			image: '/images/photo.jpg',
			title: 'photo studio',
			link: 'https://photography-rust.vercel.app/',
		},
		{
			image: '/images/fabulous.jpg',
			title: 'laundry service',
			link: 'https://fabulous-laundry.vercel.app/',
		},
		// {
		// 	image: '/images/skvllpvnk.png',
		// 	title: 'skvllPvnkz',
		// 	link: 'https://skvllpvnkz.com',
		// },
	];

	return (
		<section>
			<h2 className="font-bold text-2.6xl mb-3">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 -gap-y-12 md:px-9">
				{projects.map((project, index) => {
					const { link, image, title } = project;
					return (
						<Link
							href={link}
							key={index}
							target="_blank"
							className="relative bg-tertiary-800 max-h-max border-[1.5px] border-tertiary-300 px-5 pt-5 pb-2 rounded-lg"
						>
							<Image
								src={image}
								alt={title}
								width={920}
								height={177}
								className="rounded-sm w-full h-2/3"
							/>
							<div className="text-lg font-bold text-neutral-200 mt-3 capitalize">{title}</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
