<template>
	<div class="not-found">
		<h1 class="not-found__heading">Sorry but this page not found. May be go on <router-link class="not-found__link" to="/">mane</router-link> page? </h1>
	</div>
</template>

<script>
export default {
	name: "NotFound",

}
</script>

<style lang="sass">
.not-found
	margin: 200px auto

	&__link
		text-decoration: none
		font-family: $main-font-bold
		font-weight: bold
		color: $main-color

</style>