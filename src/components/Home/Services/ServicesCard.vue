<template>
	<div class="services-card">
		<img class="services-card__image"
				 :src="require(`@/assets/Image/Home/ServicesCard/${image.src}.svg`)"
				 :alt="image.alt">
		<h3 class="services-card__heading">{{ heading }}</h3>
		<p class="services-card__description">{{ description }}</p>
	</div>
</template>

<script>
export default {
	name: "ServicesCard",
	props: {
		image: {Object},
		heading: {
			type: String,
			default: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
		},
		description: {
			type: String,
			default: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
		},
	},

}
</script>

<style lang="sass">
.services-card
	display: flex
	flex-direction: column
	box-sizing: border-box
	min-width: 200px
	padding: 10px
	border: 1px solid white
	border-radius: 7%
	box-shadow: 0 0 50px rgba(229, 233, 246, 0.4)
	transition-duration: 0.35s

	&:hover
		@media (min-width: 620px)
			transition-duration: 0.35s
			transform: scale(0.95)
			box-shadow: 0 0 30px rgba(121, 167, 238, 0.4)

	&__image
		margin: 20px auto 0
		width: 30%
		height: 40%
		min-width: 80px
		max-width: 120px

	&__heading
		margin: 20px 0 10px
		font-size: 24px
		font-weight: bold
		text-align: center
		font-family: $main-font-bold

	&__description
		font-size: 16px
		color: #7D7987
		text-align: center
		font-family: $main-font


</style>