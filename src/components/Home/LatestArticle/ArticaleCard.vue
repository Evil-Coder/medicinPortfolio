<template>
	<div class="article-card">
		<img class="article-card__image"
				 :src="require(`@/assets/Image/Home/ArticleCard/${image.src}.png`)"
				 :alt="image.alt">
		<div class="article-card__text">
			<h3 class="article-card__heading">{{ heading }}</h3>
			<p class="article-card__description">{{ description }}</p>
			<a class="article-card__link" href="#"> Read more →</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "ArticleCard",
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
.article-card
	display: flex
	flex-direction: column
	box-sizing: border-box
	min-width: 200px
	border: 1px solid white
	border-radius: 7%
	box-shadow: 0 0 50px rgba(229, 233, 246, 0.4)
	transition-duration: 0.35s

	&:hover

		@media (min-width: 620px)
			transition-duration: 0.35s
			transform: scale(1.1)
			box-shadow: 0 0 30px rgba(121, 167, 238, 0.4)

	&__image
		margin: 0 auto
		width: 100%

	&__text
		display: flex
		flex-direction: column
		padding: 20px
		font-family: $main-font

	&__heading
		margin: 20px 0 10px
		font-size: 21px
		font-weight: bold
		font-family: $main-font-bold

	&__description
		margin-bottom: 20px
		font-size: 16px
		color: #7D7987
		font-family: $main-font

	&__link
		font-size: 17px
		text-decoration: none
		color: $submain-color
		font-family: $main-font
</style>