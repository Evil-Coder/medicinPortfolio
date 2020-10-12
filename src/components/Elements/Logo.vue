<template>
	<div class="logo" :class="customClass">
		<router-link class="logo-link" to="/">
			<span class="logo-icon">T</span>
			<h1
					class="logo-text"
					:class="[{'logo-text_black' : black}, {'logo-text_white': white}]">Trafalgar</h1>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Logo",
	props: ['customClass', 'black', 'white'],
}
</script>

<style lang="sass">

.logo
	margin: 0

	&-link
		text-decoration: none
		line-height: 41px

	&-icon
		display: inline-block
		margin-right: 12px
		border-radius: 50%
		width: 41px
		height: 41px
		text-align: center
		background-color: $main-color
		border: 1px solid $main-color
		font-weight: bold
		font-size: 26px
		color: white
		font-family: $main-font-bold
		transition-duration: 0.35s

		&:hover
			transform: scale(1.4)
			transition-duration: 0.35s

	&-text
		display: inline
		font-weight: bold
		font-size: 24px
		font-family: $main-font-bold

		&_black
			color: black

		&_white
			color: white
</style>