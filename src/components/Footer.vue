<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__copyright">
				<Logo customClass="footer__copyright-logo" :white="true"/>
				<p class="footer__copyright-text">Trafalgar provides progressive, and affordable healthcare, accessible on
					mobile and online for everyone</p>
				<p class="footer__copyright-license">©Trafalgar PTY LTD 2020. All rights reserved</p>
			</div>
			<div class="footer__company">
				<h4 class="footer__heading">Company</h4>
				<ul class="footer__elements-container">
					<li><router-link class="footer__company-about" to="/about">About</router-link></li>
					<li><router-link class="footer__company-testimonials" to="/testimonials">Testimonials</router-link></li>
					<li><router-link class="footer__company-find" to="/find">Find a doctor</router-link></li>
					<li><router-link class="footer__company-apps" to="/apps">Apps</router-link></li>
				</ul>
			</div>
			<div class="footer__region">
				<h4 class="footer__heading">Region</h4>
				<ul class="footer__elements-container">
					<li><a class="footer__region-indonesia" href="#">Indonesia</a></li>
					<li><a class="footer__region-singapore" href="#">Singapore</a></li>
					<li><a class="footer__region-hongkong" href="#">Hongkong</a></li>
					<li><a class="footer__region-canada" href="#">Canada</a></li>
				</ul>
			</div>
			<div class="footer__help">
				<h4 class="footer__heading">Help</h4>
				<ul class="footer__elements-container">
					<li><a class="footer__help-center" href="#">Help center</a></li>
					<li><a class="footer__help-contact" href="#">Contact support</a></li>
					<li><a class="footer__help-instructions" href="#">Instructions</a></li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
import Logo from "@/components/Elements/Logo";

export default {
	name: "Footer",
	components: {Logo},
}
</script>

<style lang="sass">
.footer
	width: 100%
	background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)

	&__container
		display: flex
		justify-content: space-between
		align-items: baseline
		padding: 70px 200px 60px
		max-width: 1420px
		box-sizing: border-box
		margin: 0 auto

		@media (max-width: 1100px)
			padding: 70px 20px 60px
			max-width: none

		@media (max-width: 620px)
			display: grid
			grid-template: 1fr 1fr / repeat(3, 1fr)
			grid-row-gap: 30px
			justify-items: center
			padding: 40px 30px 30px

		@media (max-width: 420px)
			padding: 40px 10px 30px

	&__heading
		margin: 0
		font-size: 20px
		font-weight: bold
		font-family: $main-font-bold

		@media (max-width: 420px)
			font-size: 18px

	&__elements-container
		list-style: none
		margin: 0
		padding: 0

		& li
			margin-top: 15px

		& a
			text-decoration: none
			font-size: 18px
			color: white

			@media (max-width: 420px)
				font-size: 16px

	&__copyright
		display: flex
		flex-direction: column
		width: 40%
		color: white
		font-size: 18px
		font-family: $main-font

		@media (max-width: 620px)
			width: 100%
			grid-area: 1 / 1 / 2 / 4
			align-items: center

		&-text
			margin: 20px 0 10px

			@media (max-width: 620px)
				text-align: center

		&-license
			font-size: 16px

			@media (max-width: 620px)
				text-align: center

	&__company
		display: flex
		flex-direction: column
		color: white

	&__region
		display: flex
		flex-direction: column
		color: white

	&__help
		display: flex
		flex-direction: column
		color: white

</style>