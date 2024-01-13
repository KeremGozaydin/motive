<script lang="ts">
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot='header'>
		<Header/>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot='footer'>
		<Footer/>
	</svelte:fragment>
</AppShell>
