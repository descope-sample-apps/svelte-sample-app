<script>
	import descope_logo from '$lib/images/descope-logo.png';
	import svelte_logo from '$lib/images/svelte-logo.svg';

	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	import './styles.css';
</script>


<div class="col layout">
	<div class="col wrapper">
		<div class="row nav navbar">
			<a href="/"><img class="logo" src={svelte_logo} alt="svelte-logo"></a>
			<div class="col">
				{#if Object.keys($page.data.session || {}).length}
					<button class="row signin-btn signout"on:click={() => signOut()}>
						<span class="signout">Sign out</span>
						<img class="descope pfp" src={$page.data.session?.user?.image} alt="descope">
					</button>
				{:else}
					<button class="row signin-btn" on:click={() => signIn('descope')}>
						Sign in with Descope
						<img class="descope" src={descope_logo} alt="descope">
					</button>
				{/if}
			</div>
		</div>
		<slot />
		<div class="row nav bottomnav">
			<a class="credits" target="_blank" href="https://www.vecteezy.com/free-png/3d-shape">3d Shape PNGs by Vecteezy</a>
			<div>
				<a class="link first" target="_blank" href="https://docs.descope.com/">Docs</a>
				<a class="link" target="_blank" href="https://www.descope.com/blog">Blog</a>
				<a class="link" target="_blank" href="https://www.descope.com/for-startups">Startups</a>
				<a class="link last" target="_blank" href="https://careers.descope.com/">Careers</a>
			</div>
		</div>
	</div>
</div>


<style>
	.wrapper {
		width: 80%;
	}
	.nav {
		position: absolute;
	}
	.navbar {
		top: 0;
		margin-top: 3vh;
		width: 95%;
		justify-content: space-between;
	}
	.bottomnav {
		border-top: 1px solid rgb(211, 211, 211);
		bottom: 0;
		width: 95%;
		padding: 3px 0;
		justify-content: space-between;
		font-family: 'Golos Text', sans-serif;
	}
	.bottomnav a {
		color: rgb(31, 31, 31);
	}
	.logo {
		width: 6vh;
		height: auto;
	}
	.descope {
		width: 4vh;
		height: 4vh;
		padding: 1vh;
		object-fit: cover;
		margin: 0;
		margin-left: 2vh;
		background-color: rgb(30, 36, 40);
	}
	.signin-btn {
		padding: 0;
		padding-left: 3vh;
		padding-right: 0;
		border: none;
		font-size: 1em;
		color: #222222;
		background-color: #f6f6f6;
		font-family: 'Golos Text', sans-serif;
	}
	.pfp {
		padding: 0;
		height: 6vh;
		width: auto;
		margin-left: 5vh;
	}
	.signout {
		padding-left: 2.5vh;
		color: #f6f6f6;
		background-color: rgb(227, 66, 7);
	}
	.credits {
		margin: 2vh 0;
	}
	.link {
		margin: 0 1vh;
	}
	.last {
		margin-right: 0;
	}
	@media only screen and (max-width: 768px) {
		.nav {
			width: 100%;
			position: inherit;
			margin-bottom: 3vh;
		}
		.first {
			margin-left: 0;
		}
		.bottomnav {
			margin-bottom: 3vh;
		}
	}
</style>