import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Wrapper from '../components/wrapper';

const Projects = () => {
	const projects = [
		{
			image: '/images/dashboard.png',
			title: 'user dashboard',
			link: 'https://user-dashboard-lyart-chi.vercel.app/dashboard',
		},
		{
			image: '/images/nft-marketplace.png',
			title: 'NFT marketplace',
			link: 'https://nft-marketplace-cyan-mu.vercel.app/',
		},
		{
			image: '/images/get-linked.png',
			title: 'Get Linked',
			link: 'https://get-linked-eta-snowy.vercel.app/',
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
			image: '/images/fabulous.png',
			title: 'laundry service',
			link: 'https://fabulous-laundry.vercel.app/',
		},
	];

	return (
		<Wrapper>
			<>
				<h2 className="font-bold text-2.6xl mb-3">Projects</h2>
				<div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 items-stretch">
					{projects.map((project, index) => {
						const { link, image, title } = project;
						return (
							<div key={index}>
								<Link
									href={link}
									target="_blank"
									className="block relative bg-tertiary-800 max-h-max border-[1.5px] border-tertiary-300 px-5 pt-5 pb-2 rounded-lg"
								>
									<Image
										src={image}
										alt={title}
										width={920}
										height={177}
										className="rounded-sm w-full md:h-[380px] lg:h-[250px]"
									/>
									<div className="text-lg font-bold text-neutral-200 mt-3 capitalize">{title}</div>
								</Link>
							</div>
						);
					})}
				</div>
			</>
		</Wrapper>
	);
};

export default Projects;
