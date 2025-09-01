import Image from 'next/image';
import Wrapper from './components/wrapper';

export default function Home() {
	return (
		<Wrapper>
			<>
				<h2 className="font-bold text-2.6xl mb-3 text-tertiary-700">About</h2>
				<article className="flex flex-col gap-6 text-justify">
					<p>
						I am a <span>Frontend Developer</span> with over 3 years of experience building
						scalable, responsive, and user-centric web applications using{' '}
						<span>ReactJS, NextJS, Redux, zustand, and TailwindCSS</span>. My work spans high-impact
						projects across health tech, AI platforms, and Web3 integrations, where I’ve delivered
						seamless UI/UX experiences, optimized performance, and implemented secure data flows.
					</p>
					<div>
						<p>
							At <span>CareTrace</span>, I developed{' '}
							<span>real-time glucose monitoring dashboards</span> using ReactJS and Redux Toolkit,
							ensuring secure API integrations and improving patient data accessibility for
							healthcare providers. While working with <span>Cryptigo LLC</span>, I built a
							responsive swap UI interface and integrated the API for converting other coin on to{' '}
							<span>MNT</span>
							with NextJS, implemented code-splitting and lazy loading for faster load times, and
							optimized performance for mobile-first experiences. During my time at{' '}
							<span>HideoutLabs</span>, I created a scalable frontend platform leveraging ReactJS
							and Styled-Components, integrated Firebase for backend data management, and
							implemented Web3 connectivity for a seamless blockchain experience.
						</p>
						<p>
							At <span>YupJobs</span>, I redesigned UI components, improved cross-device
							responsiveness, and contributed to enhancing overall user engagement.
						</p>
					</div>
					<p>
						Currently, I am expanding into{' '}
						<span className="font-bold">mobile development with React Native</span>, driven by a
						passion for creating cross-platform applications that deliver smooth, native-like
						experiences. My goal is to leverage my strong foundation in modern JavaScript,
						component-driven architectures, and state management to build intuitive, performant
						mobile apps for real-world use cases.
					</p>
				</article>
				<h2 className="font-bold text-2.6xl capitalize mt-6 text-tertiary-700">What i do</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
					<div className="bg-tertiary-500 border-3 border-tertiary-600 rounded-lg overflow-hidden flex gap-5">
						<Image src="/images/frontend.png" alt="frontend" width={116} height={311} />
						<div className="py-4">
							<h3 className="font-inter font-bold text-neutral-200">Web Front-End Development</h3>
							<p className="font-medium text-1sm text-primary-100 mt-3">
								With a robust proficiency in <span>Frontend tools</span>. I excel at transforming
								design concepts into dynamic, user-friendly websites.
							</p>
						</div>
					</div>
					<div className="bg-tertiary-500 border-3 border-tertiary-600 rounded-lg overflow-hidden flex gap-5">
						<Image
							src="/images/mobile.png"
							alt="React Native"
							aria-label="React Native"
							width={116}
							height={311}
						/>
						<div className="py-4">
							<h3 className="font-inter font-bold text-neutral-200">
								React-Native App Development
							</h3>
							<p className="font-medium text-1sm text-primary-100 mt-3">
								Proficient in <span>React-Native and (Firebase/supabase)</span>, I build
								cross-platform, high-performance mobile apps with real-time data and seamless
								backend integration.
							</p>
						</div>
					</div>
				</div>
			</>
		</Wrapper>
	);
}
