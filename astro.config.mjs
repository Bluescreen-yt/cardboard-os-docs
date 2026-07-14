// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({ 
	integrations: [
		starlight({
			title: 'Cardboard OS docs',
			favicon:'./src/assets/logo.svg',
			logo: {
				src: './src/assets/logo.svg'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Bluescreen-yt/CardBoard-OS-CCT' },
				{ icon: 'youtube', label: 'Youtube', href: 'https://www.youtube.com/@BlueScreenOffical88' },
				{ icon: 'discord', label: 'Youtube', href: 'https://discord.gg/BHG7FBDdjs' }
			],

			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ autogenerate: { directory: 'reference' } }
					],
				},
			],
		}),
	],
});
