'use client';

import { useStore } from '@/store/store';
import {
	faEnvelope,
	faFileDownload,
	faLocationArrow,
	faMobile,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Profile = () => {
	const { hamburger, setHamburger } = useStore();
	const [download, setDownload] = useState(false);

	useEffect(() => {
		if (hamburger) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [hamburger]);

	return (
		<div
			className={` ${
				hamburger ? 'translate-y-0' : '-translate-y-full'
			} bg-bg absolute z-40 lg:top-0 inset-0 lg:bg-transparent lg:z-0 lg:relative font-inter -translate-y-full lg:translate-y-0 transition delay-150 duration-200 ease-in-out`}
		>
			<div className="p-8 md:p-10 lg:hidden" onClick={() => setHamburger()}>
				<FontAwesomeIcon icon={faXmark} className="text-xl text-primary-200 cursor-pointer" />
			</div>
			<aside className="mt-20 md:mt-26 relative text-primary-300">
				<div className="max-w-[90%] mx-auto xl:max-w-full bg-neutral-100 border-3 border-tertiary-300 rounded-xl p-8">
					<div className="flex justify-center absolute -top-16 w-full left-0">
						<Image src="/images/avatar.png" alt="avatar" width={200} height={200} />
					</div>
					<div className="mt-28">
						<div className="text-2.5xl text-center font-bold">Moshood Opeyemi</div>
						<div className="bg-tertiary-200 font-medium text-center px-6 py-2 rounded-sm border border-tertiary-300 max-w-max mx-auto mt-1">
							Front-End Developer <span className="text-xs">(WEB + MOBILE)</span>
						</div>
						<div className="flex items-center justify-center gap-4 mt-6">
							<Image src="/icons/instagram.png" alt="" width={34} height={34} />
							<Link
								href={'https://www.github.com/mosgizy'}
								aria-label="github profile"
								target="_blank"
							>
								<Image src="/icons/github.png" alt="" width={34} height={34} />
							</Link>
							<Link
								href={'https://www.linkedin.com/in/hasterisk'}
								aria-label="linkedin profile"
								target="_blank"
							>
								<Image src="/icons/linkedin.png" alt="" width={34} height={34} />
							</Link>
						</div>
						<div className="bg-tertiary-400 px-5 py-4 rounded-xl mt-9">
							<Link
								href={'tel:+2348148801472'}
								className="flex items-center gap-4 border-b border-black/10 pb-3 my-3"
							>
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faMobile} className="text-xl" />
								</div>
								<span className="font-medium text-[15px]">+234 8148801472</span>
							</Link>
							<Link
								href={'mailto:moshood521@gmail.com.com'}
								className="flex items-center gap-4 border-b border-black/10 pb-3 my-3"
							>
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
								</div>
								<span className="font-medium text-[15px]">moshood521@gmail.com</span>
							</Link>
							<div className="flex items-center gap-4 my-3">
								<div className="bg-neutral-100 w-[35px] h-[35px] p-2 flex justify-center items-center rounded-sm">
									<FontAwesomeIcon icon={faLocationArrow} className="text-xl" />
								</div>
								<span className="font-medium text-[15px]">Lagos, Nigeria</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<a
							href="/Moshood_Odugbesan_Resume.pdf"
							download
							onMouseLeave={() => setDownload(false)}
							onMouseOver={() => setDownload(true)}
							className="font-bold font-merri-waether-sans text-xl text-tertiary-400 px-6 py-2 bg-secondary-700 border-2 border-tertiary-300 outline-none rounded-lg max-w-max mx-auto mt-7 cursor-pointer"
						>
							View Resume {download && <FontAwesomeIcon icon={faFileDownload} />}
						</a>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Profile;
