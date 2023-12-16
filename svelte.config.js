import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit : {
		adapter : staticAdapter({
			pages : 'dist',
			assets : 'dist',
			fallback : 'index.html',
		}),
	}
};

export default config;
