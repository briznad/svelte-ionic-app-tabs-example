<script
	lang="ts"
	context="module"
>
	import { page } from '$app/stores';
</script>


<script lang="ts"></script>


<style lang="scss"></style>


<ion-content class="ion-padding">
	<h1>{ $page.params.variety.replace('-', ' ') }</h1>

	<ion-img
		src={ `/images/apples/${ $page.params.variety }.jpg` }
		alt={ $page.params.variety.replace('-', ' ') }
	></ion-img>
</ion-content>
