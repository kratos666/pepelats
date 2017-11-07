<template>
	<div>
		<notifications
						group="auth-notification"
						position="bottom right"
						:speed = '500'
			>
		</notifications>
		<section>
			<div class="tabs is-centered is-boxed">
				<ul>
					<li v-bind:class="{active: showSignInForm }">
						<a @click="showForm(1)">
							<span class="icon is-small"><i class="fa fa-user"></i></span>
							<span>Sign Up</span>
						</a>
					</li>
					<li v-bind:class="{ active: showSignUpForm }">
						<a @click="showForm(2)">
							<span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
							<span>Register</span>
						</a>
					</li>
				</ul>
			</div>
			<transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
				<form v-if="showSignInForm" class="sign-in-form" @submit.prevent="submit()">
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model.lazy="model.email">
						</div>
					</div>
					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input class="input" type="password" placeholder="e.g. alexsmith@gmail.com" v-model.lazy="model.password">
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button class="button is-link" type="submit">Submit</button>
						</div>
						<div class="control">
							<button class="button is-text">Cancel</button>
						</div>
					</div>
				</form>
			</transition>
			<transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
				<form v-if="showSignUpForm" class="sign-up-form" @submit.prevent="submit('reg')">
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model.lazy="model.email">
						</div>
					</div>
					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input class="input" type="password" placeholder="e.g. alexsmith@gmail.com" v-model.lazy="model.password">
						</div>
					</div>
					<div class="field">
						<label class="label">Confirm </label>
						<div class="control">
							<input class="input" type="password" placeholder="e.g. alexsmith@gmail.com" v-model.lazy="model.repassword">
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button class="button is-link" type="submit">Submit</button>
						</div>
						<div class="control">
							<button class="button is-text">Cancel</button>
						</div>
					</div>
				</form>
			</transition>
		</section>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import valid from '../system/validators'

	export default {
		data() {
			return {
				showSignInForm: true,
				showSignUpForm: false,
				model: {
					email: '',
					password: '',
					repassword: ''
				}
			};
		},
		methods: {
			...mapActions(['auth']),
			showForm(num) {
				switch (num) {
					case 1:
						this.showSignUpForm = false;
						this.showSignInForm = true;
						break;
					case 2:
						this.showSignUpForm = true;
						this.showSignInForm = false;
						break;
				}
			},
			submit(key) {
				if (valid(this.model, key).isValid){
					this.auth(this.model)
				}else{
					let group = 'auth-notification';
					let type = 'error';
					let title = 'Ошибка ввода данных'
					let text = valid(this.model, key).errors
					this.$notify({group, title, text, type});
				
				}
			}
		}
	};
</script>

<style>
.tabs.is-boxed li.active a {
    background-color: white;
    border-color: #dbdbdb;
    border-bottom-color: transparent !important;
}
.tabs li.active a{
	color: #3273dc;
}
</style>
