<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<!-- navbar items, navbar burger... -->
			<router-link v-for="(item, index) in items" :key="item.id" tag='a' :to= item.url class="navbar-item">{{item.name}}</router-link>
		</div>
		<div class="navbar-menu">
			<!-- navbar start, navbar end -->
		</div>

	</nav>
</template>

<script>
export default {
	name: 'topMenu',
	data() {
		return {
			items: [
				{	
					id: 0,
					url: '/',
					name: 'Home'
				},
				{
					id: 1,
					url: '/gallery',
					name: 'Gallery'
				},
				{
					id: 2,
					url: '/video',
					name: 'Videos'
				},
				{
					id: 3,
					url: '/about',
					name: 'About'
				},
				{
					id: 4,
					url: '/chat',
					name: 'Chat'
				},
			]
		}
	}
}

</script>

<style lang="stylus" scoped>
</style>
