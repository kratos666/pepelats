<template>
	<div class="box has-primary">
		<auth-form></auth-form>
	</div>
</template>

<script>
	import authForm from "../components/authForm.vue";
	export default {
		components: {
			authForm
		}
	};
</script>

<style lang="stylus" scoped>
$box-background-color = #000000;

.box {
	margin: 20% auto;
	width: 50%;
}
</style>
