<template>
	<button class="button" :class="[{'button_blue': blue}, customClass]">
		<span class="button-text">{{ text }}</span>
		<img v-if="download" class="button-icon" src="@/assets/Image/Home/.Elements/Vector.svg" alt="arrow">
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		download: {
			type: Boolean,
			default: false
		},
		blue: {
			type: Boolean,
			default: false
		},
		text: {
			type: String,
			default: "Lorem Lorem Lorem"
		},
		customClass: { String }
	},

}
</script>

<style lang="sass">
.button
	width: 180px
	height: 50px
	background-color: white
	border: 1px solid $main-color
	border-radius: 55px
	font-size: 18px
	font-weight: bold
	color: $main-color
	transition-duration: 0.35s
	font-family: $main-font-bold
	outline: none

	&:hover
		cursor: pointer
		box-shadow: 0 0 0 10px $main-color
		transition-duration: 0.35s
		transform: scale(0.9)

	&_blue
		background-color: $main-color
		color: white

		&:hover
			box-shadow: 0 0 0 10px $main-color
			border-color: white

	&-text
		margin-right: 10px

	&-icon
		transform: translateY(3px)

</style>