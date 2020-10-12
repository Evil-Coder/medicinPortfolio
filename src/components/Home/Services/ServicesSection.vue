<template>
	<section class="service-section">
		<h2 class="service-section__head">{{ heading }}</h2>
		<hr class="service-section__hr">
		<p class="service-section__description">{{ description }}</p>
		<div class="service-section__cards-container">
			<ServicesCard v-for="(card, index) of cards"
										:key="index"
										:image="{src: card.image.src, alt: card.image.alt}"
										:heading="card.heading"
										:description="card.description"
			/>
		</div>
		<Button text="Learn more" customClass="service-section__button"/>
	</section>
</template>

<script>
import ServicesCard from "@/components/Home/Services/ServicesCard";
import Button from "@/components/Elements/Button";

export default {
	name: "ServicesSection",
	components: {Button, ServicesCard},
	props: {
		heading: {String},
		description: {String},
		cards: {
			type: Array,
			default: [{
				image: {src: 'Search', alt: 'search image'},
				heading: "Lorem Lorem",
				description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
			}]
		},
	},
}
</script>

<style lang="sass">
.service-section
	display: flex
	flex-direction: column
	align-items: center
	padding: 80px 200px 0
	max-width: 1420px
	box-sizing: border-box
	margin: 0 auto 60px

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
		margin: 25px 0 25px
		border: none
		border-bottom: 2px solid

	&__description
		text-align: center
		margin-bottom: 60px
		font-size: 18px
		font-family: $main-font

	&__cards-container
		display: grid
		width: 100%
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))
		grid-template-rows: repeat(auto-fit, minmax(220px, 1fr))
		grid-gap: 20px
		margin-bottom: 60px

</style>