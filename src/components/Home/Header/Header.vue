<template>
	<header class="header">
		<button class="header__hamburger hamburger hamburger--collapse" :class="{'hamburger_active' : displayBurger}"
						type="button" @click="displayBurger = !displayBurger">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
		</button>
		<Logo customClass="header__logo" :black="true"/>
		<nav class="header__navigation" :class="{'header__navigation_on' : displayBurger}">
			<router-link class="header__navigation-home" to="/" exact>Home</router-link>
			<router-link class="header__navigation-find" to="/find">Find a doctor</router-link>
			<router-link class="header__navigation-apps" to="/apps">Apps</router-link>
			<router-link class="header__navigation-testimonials" to="/testimonials">Testimonials</router-link>
			<router-link class="header__navigation-about" to="/about">About us</router-link>
		</nav>
	</header>
</template>

<script>
import Logo from "@/components/Elements/Logo";

export default {
	name: "Header",
	components: {Logo},
	data() {
		return {
			displayBurger: false
		}
	},
}
</script>

<style lang="sass">
@import "burger"

.header
	display: flex
	justify-content: space-between
	flex-wrap: wrap
	width: 100%
	padding: 20px 200px 0
	max-width: 1420px
	box-sizing: border-box
	margin: 0 auto

	@media (max-width: 1100px)
		flex-direction: column
		padding: 20px 50px 0
		max-width: none

	@media (max-width: 620px)
		flex-direction: row
		align-items: center
		padding: 20px 20px 0

	&__hamburger
		display: none
		cursor: pointer
		z-index: 1
		outline: none

		@media (max-width: 620px)
			display: inline

	&__logo
		@media (max-width: 1100px)
			margin: 0 auto 20px

		@media (max-width: 620px)
			margin: 0

	&__navigation
		display: flex
		justify-content: space-between
		align-items: center

		@media (max-width: 1100px)
			margin-top: 20px

		@media (max-width: 620px)
			position: fixed
			flex-direction: column
			justify-content: space-around
			width: 100vw
			height: 100vh
			left: -100vw
			top: 0
			margin-top: 0
			opacity: 0
			transition-duration: 0.35s
			background-color: $submain-color

			&_on
				opacity: 1
				transform: translateX(100vw)
				transition-property: transform, opacity
				transition-duration: 0.35s


		a
			font-size: 16px
			text-decoration: none
			line-height: 41px
			color: black
			font-family: $main-font

			@media (max-width: 620px)
				font-size: 24px
				color: white

			&.router-link-active
				font-weight: bold
				font-family: $main-font-bold

		a:nth-child(n + 1):not(:first-child)
			margin-left: 40px

			@media (max-width: 620px)
				margin-left: 0

</style>