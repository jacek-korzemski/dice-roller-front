<script>
	import sendRoll from "api/sendRoll";

	const clickDice = (dice) => {
		sendRoll("user", dice);
		closeHandler();
	};

	export let closeHandler;
</script>

<div class="basic-dices">
	<div class="dice" on:click={() => clickDice("2d6")}>2D6</div>
	<div class="dice" on:click={() => clickDice("d100")}>D100</div>
</div>

<style type="text/scss">
	.basic-dices {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		border: 1px solid white;
		border-right: none;
		background: white;
	}
	.dice {
		background: green;
		line-height: 64px;
		font-size: 24px;
		color: white;
		text-align: center;
		cursor: pointer;
		&:hover {
			background: lightcoral;
		}
	}
</style>
