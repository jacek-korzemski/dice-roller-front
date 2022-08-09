<script>
	import sendRoll from "api/sendRoll";

	const clickDice = (dice) => {
		sendRoll(dice);
		closeHandler();
	};

	let formula = "2d6 + d4 + 1";

	export let closeHandler;
</script>

<div class="custom">
	<input class="input" bind:value={formula} />
	<div class="button" on:click={() => clickDice(formula)}>OK</div>
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
