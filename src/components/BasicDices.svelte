<script>
	import sendRoll from "api/sendRoll";

	const clickDice = (dice) => {
		sendRoll("user", dice);
		closeHandler();
	};

	export let closeHandler;
</script>

<div class="basic-dices">
	<div class="dice" on:click={() => clickDice("d4")}>D4</div>
	<div class="dice" on:click={() => clickDice("d6")}>D6</div>
	<div class="dice" on:click={() => clickDice("d8")}>D8</div>

	<div class="dice" on:click={() => clickDice("d10")}>D10</div>
	<div class="dice" on:click={() => clickDice("d12")}>D12</div>
	<div class="dice" on:click={() => clickDice("d20")}>D20</div>
</div>

<style type="text/scss">
	.basic-dices {
		display: grid;
		grid-template-columns: 64px 64fr 64fr;
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
