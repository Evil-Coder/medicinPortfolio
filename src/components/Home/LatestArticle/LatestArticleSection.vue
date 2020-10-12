<template>
	<section class="latest-article-section">
		<h2 class="latest-article-section__head">{{ heading }}</h2>
		<hr class="latest-article-section__hr">
		<div class="latest-article-section__cards-container">
			<ArticleCard
					v-for="(card, index) of cards"
					:key="index"
					:image="{src: card.image.src, alt: card.image.alt}"
					:heading="card.heading"
					:description="card.description"
			/>
		</div>
		<Button text="View all" customClass="latest-article-section__button"/>
	</section>
</template>

<script>
import ArticleCard from "@/components/Home/LatestArticle/ArticaleCard";
import Button from "@/components/Elements/Button";

export default {
	name: "LatestArticleSection",
	components: {Button, ArticleCard},
	props: {
		heading: {String},
		description: {String},
		cards: {
			type: Array,
			default: [{
				image: {src: 'Disease', alt: 'Disease image'},
				heading: "Lorem Lorem",
				description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
			}]
		},
	},
}
</script>

<style lang="sass">
.latest-article-section
	display: flex
	flex-direction: column
	align-items: center
	padding: 80px 200px 0
	max-width: 1420px
	box-sizing: border-box
	margin: 0 auto 50px

	@media (max-width: 1100px)
		padding: 80px 50px 0
		max-width: none

	@media (max-width: 620px)
		padding: 80px 10px 0

	&__head
		margin: 0
		font-size: 36px
		font-weight: bold
		font-family: $main-font-bold

	&__hr
		width: 66px
		height: 1px
		margin: 25px 0 70px
		border: none
		border-bottom: 2px solid

	&__cards-container
		display: grid
		width: 100%
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))
		grid-template-rows: repeat(auto-fit, minmax(220px, 1fr))
		grid-gap: 20px
		margin-bottom: 50px

</style>