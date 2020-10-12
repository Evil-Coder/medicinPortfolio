<template>
	<section class="info-section" :class="{'info-section_right-text': rightText}">
		<div class="info-section__text">
			<h2 class="info-section__head" :class="{'info-section__head_main': mainSection}">{{ heading }}</h2>
			<hr v-if="!mainSection" class="info-section__hr">
			<p class="info-section__description" :class="{'info-section__description_main': mainSection}">
				{{ description }}
			</p>
			<Button :blue="mainSection" :download="download" :text="buttonText" customClass="info-section__button"/>
		</div>
		<img class="info-section__image" :src="require(`@/assets/Image/Home/InfoSection/${image.src}.svg`)" :alt="image.alt">
	</section>
</template>

<script>
import Button from "@/components/Elements/Button";

export default {
	name: "InfoSection",
	components: {Button},
	props: {
		mainSection: {
			type: Boolean,
			default: false
		},
		rightText: {
			type: Boolean,
			default: false
		},
		download: {
			type: Boolean,
			default: false
		},
		heading: {
			type: String,
			default: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
		},
		description: {
			type: String,
			default: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
		},
		buttonText: {
			type: String,
			default: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
		},
		image: {Object}
	}
}
</script>

<style lang="sass">
.info-section
	display: flex
	justify-content: space-between
	align-items: center
	padding: 80px 200px 0
	max-width: 1420px
	box-sizing: border-box
	margin: 0 auto 60px

	@media (max-width: 1100px)
		flex-direction: column-reverse
		padding: 80px 50px 0
		max-width: none

	@media (max-width: 620px)
		padding: 80px 10px 0

	&_right-text
		flex-direction: row-reverse

		@media (max-width: 1100px)
			flex-direction: column-reverse

	&__text
		width: 40%
		display: flex
		flex-direction: column
		font-family: $main-font

		@media (max-width: 1100px)
			width: 80%
			align-items: center

		@media (max-width: 620px)
			width: 100%

	&__head
		font-weight: bold
		font-size: 36px
		font-family: $main-font-bold
		margin: 0

		@media (max-width: 1100px)
			text-align: center

		&_main
			font-size: 48px
			font-family: $main-font

			@media (max-width: 1100px)
				text-align: center

	&__hr
		width: 66px
		height: 1px
		margin: 30px 0 0 40px
		border: none
		border-bottom: 2px solid

		@media (max-width: 1100px)
			margin: 30px auto 0

	&__description
		font-size: 18px
		color: #7D7987
		font-family: $main-font
		margin: 31px 0 40px

		@media (max-width: 1100px)
			text-align: center

		&_main
			font-size: 21px
			margin: 25px 0 45px

			@media (max-width: 1100px)
				text-align: center

	&__image
		width: 50%

		@media (max-width: 1100px)
			margin-bottom: 80px
			width: 80%

		@media (max-width: 620px)
			width: 100%


</style>