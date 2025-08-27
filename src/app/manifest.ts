import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moshood Portfolio',
    short_name: 'Moshood',
    description:
      'Portfolio of Moshood Odugbesan - Frontend Developer specializing in React, Next.js, and modern web technologies. Building responsive and interactive web apps with clean, scalable code.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#625839', 
    icons: [
      { src: '/pwa-icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { src: '/pwa-icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/pwa-icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { src: '/pwa-icons/icon-64x64.png', sizes: '64x64', type: 'image/png' },
      { src: '/pwa-icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { src:  '/pwa-icons/icon-180x180.png', sizes: '180x180', type: 'image/png' }, // Apple Touch Icon
      { src: '/pwa-icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }, // PWA
      { src: '/pwa-icons/icon-256x256.png', sizes: '256x256', type: 'image/png' },
      { src: '/pwa-icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }, // Splash Screen
    ],
  };
}
