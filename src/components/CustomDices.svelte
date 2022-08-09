<script>
	import sendRoll from "api/sendRoll";

	const clickDice = (dice) => {
		sendRoll("user", dice);
		closeHandler();
	};

	let formula = "2d6 + d4 + 1";

	export let closeHandler;
</script>

<div class="custom">
	<input class="input" bind:value={formula} />
	<div class="button" on:click={() => clickDice(formula)}>Rzucam!</div>
</div>

<style type="text/scss">
	.custom .input {
		text-align: center;
		background: white;
		color: black;
		margin-bottom: 0;
	}

	.button {
		text-align: center;
		background: green;
		line-height: 64px;
		height: 64px;
		color: white;
		border-bottom: 1px solid white;
	}
</style>
