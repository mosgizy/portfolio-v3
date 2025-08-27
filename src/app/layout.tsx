import type { Metadata } from 'next';
import { Inter, Merriweather_Sans, Poppins, Sigmar_One } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/header';
import Profile from './components/profile';
import NavBar from './components/nav';

config.autoAddCss = false;

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['400', '500', '700'],
});

export const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '600'],
});

export const merriWeatherSans = Merriweather_Sans({
	variable: '--font-merri-weather-sans',
	subsets: ['latin'],
	weight: ['400', '600'],
});

export const sigmaOne = Sigmar_One({
	variable: '--font-sigma-one',
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Moshood | Frontend Developer',
	description:
		'Frontend Developer specializing in React, Next.js, and modern web technologies. Passionate about building responsive and interactive web apps with clean, scalable code.',
	keywords: [
		'Moshood Odugbesan',
		'Moshood Opeyemi',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'Nextjs',
		'JavaScript',
		'Web Developer Portfolio',
		'Web Developer',
		'TailwindCSS',
		'React Native',
	],
	authors: [{ name: 'Moshood Odugbesan' }],
	creator: 'Moshood Odugbesan',
	publisher: 'Moshood Odugbesan',
	openGraph: {
		title: 'Moshood | Frontend Developer Portfolio',
		description:
			'Portfolio of Moshood Odugbesan - Frontend Developer skilled in React, Next.js, TailwindCSS, and modern JavaScript frameworks.',
		url: 'https://moshood-ope.vercel.app/',
		siteName: 'Moshood Portfolio',
		images: [
			{
				url: '/images/page.png',
				width: 1200,
				height: 630,
				alt: 'Moshood Portfolio Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Moshood | Frontend Developer',
		description:
			'Building modern, responsive web apps using React, Next.js, and TailwindCSS. Passionate about clean code and great UI/UX.',
		images: ['/images/page.png'],
		creator: '@asterisk_me',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/pwa-icons/icon-16x16.png',
		apple: '/pwa-icons/icon-180x180.png',
	},
	manifest: './manifest.ts',
	themeColor: '#625839',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sigmaOne.variable} ${poppins.variable} ${inter.variable} ${merriWeatherSans.variable} antialiased bg-background`}
			>
				<Header />
				<main className="flex gap-12 max-w-[83vw] mx-auto mb-12">
					<Profile />
					<section className="flex-1 wrapper px-8 py-7">{children}</section>
					<NavBar />
				</main>
			</body>
		</html>
	);
}
