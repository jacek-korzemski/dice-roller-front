<script>
	// APIs
	import sendRoll from "api/sendRoll";

	const clickDice = (dice) => {
		sendRoll(dice);
		closeHandler();
	};

	export let closeHandler;
</script>

<div class="basic-dices">
	<div class="dice" on:click={() => clickDice("2d6")}>2D6</div>
	<div class="dice" on:click={() => clickDice("2d20")}>2D20</div>
	<div class="dice" on:click={() => clickDice("d100")}>D100</div>
</div>

<style type="text/scss">
	.basic-dices {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1px;
		border: 1px solid black;
		border-right: none;
		border-left: none;
		background: black;
	}
	.dice {
		background: rgb(225, 225, 225);
		line-height: 64px;
		font-size: 24px;
		color: black;
		text-align: center;
		cursor: pointer;
		&:hover {
			background: rgba(195, 195, 195, 1);
		}
	}
</style>
