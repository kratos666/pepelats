<template>
	<div class="container">

		<top-menu v-show="currentRouter !== '/'"></top-menu>
		<router-view></router-view>
	</div>
</template>

<script>
import topMenu from './components/topMenu.vue'
import { router } from './main'
export default {
	name: 'app',
	components: {
		topMenu
	},
	data() {
		return {
			currentRouter: router.currentRoute.path
		}
	},
	watch: {
		'$route'(to, from) {
			this.currentRouter = to.path

		}
	}
}
</script>

<style>

</style>
