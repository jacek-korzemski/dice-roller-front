<script>
	import { user } from "stores/user";

	let currentUser;

	user.subscribe((value) => {
		currentUser = value;
	});

	const save = () => {
		user.set(currentUser);
		closeHandler();
	};

	export let closeHandler;
</script>

<div class="custom">
	<input class="input" bind:value={currentUser} />
	<div class="button" on:click={save}>OK</div>
	<h2>^ Enter your nickname ^</h2>
</div>

<style type="text/scss">
	.custom {
		display: grid;
		grid-template-columns: 0.75fr 0.25fr;
		.input {
			border-radius: 99px;
			background: white;
			height: 64px;
			font-size: 24px;
			color: black;
			border: 1px solid rgba(0, 0, 0, 0.37);
			margin: 0;
		}
		h2 {
			border-top: 1px solid black;
			margin: 0;
			text-align: center;
			line-height: 64px;
			grid-column-start: 1;
			grid-column-end: 3;
		}
	}

	.button {
		font-family: "Roboto", sans-serif;
		text-align: center;
		background: rgb(225, 225, 225);
		line-height: 64px;
		height: 64px;
		font-size: 20px;
		font-weight: 700;
		color: black;
		border-left: 1px solid black;
		cursor: pointer;
		&:hover {
			background: rgba(195, 195, 195, 1);
		}
	}
</style>
