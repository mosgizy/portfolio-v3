import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Experience = () => {
	const experiences = [
		{
			company: 'caretrace',
			role: 'frontend developer (contract)',
			duration: '2024 - till present',
			image: '/images/caretrace.jpg',
			link: 'https://www.caretrace.co/',
		},
		{
			company: 'mynth',
			role: 'frontend developer (contract)',
			duration: 'june 2023 - december 2023',
			image: '/images/mynth.jpg',
			link: 'https://www.mynth.ai/',
		},
		{
			company: 'hideoutLabs',
			role: 'frontend developer (contract)',
			duration: 'may 2022 - february 2023',
			image: '/images/skvllpvnkz.jpg',
			link: 'https://skvllpvnkz.com/',
		},
	];

	return (
		<section className="text-tertiary-700">
			<h2 className="font-bold text-2.6xl mb-3">Experience</h2>
			<div className="flex flex-col gap-6 text-base lg:text-lg mt-2">
				{experiences.map((exp, index) => {
					const { company, image, role, duration, link } = exp;
					return (
						<Link
							href={link}
							target="_blank"
							key={index}
							className="wrapper px-6 py-4 flex flex-col md:flex-row gap-5 text-tertiary-700 text-wrap"
						>
							<div className="block border-2 border-tertiary-300 max-h-max max-w-max rounded-lg overflow-hidden cursor-pointer">
								<Image src={image} alt="caretrace" width={88} height={88} />
							</div>
							<div className="flex flex-col justify-between capitalize [&>div]:flex [&>div]:gap-1">
								<div>
									<span>Company:</span> <span>{company}</span>
								</div>
								<div>
									<span>Role:</span> <p>{role}</p>
								</div>
								<div>
									<span>Duration</span> <p>{duration}</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Experience;
