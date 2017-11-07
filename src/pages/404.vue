<template>
	<div class="container">
		<img src="../assets/images/logo.png" alt="logo">
		
		<section class="ku-text">
			<h3>404 - три раза</h3>
			<p class="ku"><a @click="kuShow2 = true">Ку</a></p>

			<transition name='kuanimation'  enter-active-class="animated flip" leave-active-class="animated bounceOutRight">
				<p class="ku" v-show="kuShow2"><a @click="kuShowLast = true">Ку</a></p>
			</transition>
 
			<transition name='kuanimation'   enter-active-class="animated flip" leave-active-class="animated bounceOutRight">
				<p class="ku" v-show="kuShowLast"><router-link tag='a' to='/about'>Ку</router-link></p>
			</transition>
			
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				kuShow2: false,
				kuShowLast: false
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '../assets/style/system'
.container
	margin auto
	display flex
	justify-content center
	flex-wrap wrap
	flex-direction column
	align-items center
	.ku-text
		display block
		text-align center
		.ku
			a
				font-size 32px
				font-weight bold
				cursor pointer
				
			
/*  .kuanimation-enter-active
	animation ku-anim 5s
.kuanimation-leave-active
	animation ku-anim 5s reverse
@keyframes ku-anim
	0%
		transform scale(0)
	50%
		transform scale(2)
	100%
		transform scale(1)  */
</style>
