<script
	lang="ts"
	context="module"
>
	import { setupIonicBase } from 'ionic-svelte';

	import { page } from '$app/stores';
</script>


<script lang='ts'>
	/* Call Ionic's setup routine */
	setupIonicBase();

	/* Import all components - or do partial loading - see below */
	import 'ionic-svelte/components/all';

	/* Theme variables */
	import '../theme/variables.css';
</script>

<ion-app>
	<ion-tabs>
		<slot />

		<ion-tab-bar slot="bottom">
			<ion-tab-button
				href="/"
				selected={ $page.url.pathname === '/' }
			>
				Home
			</ion-tab-button>

			<ion-tab-button
				href="/apples"
				selected={ $page.url.pathname === '/apples' || $page.url.pathname.startsWith('/apples/') }
			>
				Apples
			</ion-tab-button>

			<ion-tab-button
				href="/oranges"
				selected={ $page.url.pathname === '/oranges' }
			>
				Oranges
			</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</ion-app>
