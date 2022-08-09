<script>
	// APIs
	import sendRoll from "api/sendRoll";

	// ICONS
	import d4 from "icons/d4.svg";
	import d6 from "icons/d6.svg";
	import d8 from "icons/d8.svg";
	import d10 from "icons/d10.svg";
	import d12 from "icons/d12.svg";
	import d20 from "icons/d20.svg";

	// Component functionality
	const clickDice = (dice) => {
		sendRoll("user", dice);
		closeHandler();
	};

	export let closeHandler;
</script>

<div class="basic-dices">
	<div class="dice" on:click={() => clickDice("d4")}><img src={d4} alt="d4" /></div>
	<div class="dice" on:click={() => clickDice("d6")}><img src={d6} alt="d6" /></div>
	<div class="dice" on:click={() => clickDice("d8")}><img src={d8} alt="d8" /></div>

	<div class="dice" on:click={() => clickDice("d10")}><img src={d10} alt="d10" /></div>
	<div class="dice" on:click={() => clickDice("d12")}><img src={d12} alt="d12" /></div>
	<div class="dice" on:click={() => clickDice("d20")}><img src={d20} alt="d20" /></div>
</div>

<style type="text/scss">
	.basic-dices {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 1px;
		border: 1px solid black;
		border-left: none;
		border-right: none;
		background: black;
	}
	.dice {
		background: rgb(225, 225, 225);
		color: white;
		text-align: center;
		cursor: pointer;
		&:hover {
			background: rgba(195, 195, 195, 1);
		}
		img {
			width: 64px;
			height: auto;
			transform: scale(1.3);
		}
	}
</style>
