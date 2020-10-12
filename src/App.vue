<template>
	<div id="app" class="main-app">
		<Header/>
		<router-view/>
	</div>
</template>

<style lang="sass">
.main-app
	display: flex
	flex-direction: column

body
	margin: 0

</style>

<script>

import Header from "@/components/Home/Header/Header";

export default {
	components: {Header}
}
</script>