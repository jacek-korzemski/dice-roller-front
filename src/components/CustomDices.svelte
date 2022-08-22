<script>
	// APIs
	import sendRoll from "api/sendRoll";

	// COMPONENTS
	import Advantage from "components/Advantage.svelte";

	// STORES
	import { customRoll } from "stores/customRoll";

	let formula;

	customRoll.subscribe((value) => {
		formula = value;
	});

	const clickDice = (dice) => {
		sendRoll(dice);
		closeHandler();
	};

	const updateInput = (e) => {
		formula = e.target.value;
		customRoll.set(e.target.value);
	};

	export let closeHandler;
</script>

<div class="custom">
	<div class="advantage">
		<Advantage />
	</div>
	<input class="input" on:change={(e) => updateInput(e)} bind:value={formula} />
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
			margin-bottom: 0;
		}
		.advantage {
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
