import Image from 'next/image';
import React from 'react';
import Wrapper from '../components/wrapper';

const Skills = () => {
	const skills = [
		{
			image: '/icons/react.webp',
			title: 'react',
		},
		{
			image: '/icons/next.png',
			title: 'nextJs',
		},
		{
			image: '/icons/tailwind.png',
			title: 'tailwind CSS',
		},
		{
			image: '/icons/mongodb.png',
			title: 'mongoDB',
		},
		{
			image: '/icons/react.webp',
			title: 'react-Native',
		},
		{
			image: '/icons/firebase.png',
			title: 'firebase',
		},
		{
			image: '/icons/supabase.jpeg',
			title: 'supabase',
		},
	];

	const tools = [
		{
			image: '/icons/github.png',
			title: 'github',
		},
		{
			image: '/icons/trello.jpg',
			title: 'trello',
		},
	];

	return (
		<Wrapper>
			<section className="text-neutral-200">
				<h2 className="font-bold text-2.6xl mb-3">Skills</h2>
				<div className="grid grid-cols-3 md:flex gap-7 flex-wrap mt-7 lg:px-6">
					{skills.map((skill, index) => {
						const { image, title } = skill;
						return (
							<div key={index} className="max-w-max">
								<div className="border border-tertiary-300 max-w-max mx-auto rounded-lg p-3 shadow-[0px_0px_5.5px_1px_#EFE0B2]">
									<Image src={image} alt={title} width={60} height={60} className="h-16 w-16" />
								</div>
								<p className="text-lg text-center font-medium capitalize mt-1">{title}</p>
							</div>
						);
					})}
				</div>
				<h2 className="font-bold text-2.6xl mb-3 mt-10">Tools & Software</h2>
				<div className="grid grid-cols-3 md:flex gap-7 flex-wrap mt-7 lg:px-6">
					{tools.map((tool, index) => {
						const { image, title } = tool;
						return (
							<div key={index} className="max-w-max">
								<div className="border border-tertiary-300 max-w-max mx-auto rounded-lg p-3 shadow-[0px_0px_5.5px_1px_#EFE0B2]">
									<Image src={image} alt={title} width={60} height={60} className="h-16 w-16" />
								</div>
								<p className="text-lg text-center font-medium capitalize mt-1">{title}</p>
							</div>
						);
					})}
				</div>
			</section>
		</Wrapper>
	);
};

export default Skills;
