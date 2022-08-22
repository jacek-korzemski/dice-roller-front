<script>
	export let rolls = [];

	const parseRoll = (roll) => {
		if (Array.isArray(roll)) {
			if (roll[0] > roll[1]) {
				return `<span class="green">${roll[0]}</span> lub <span class="red">${roll[1]}</span>`;
			} else if (roll[1] > roll[0]) {
				return `<span class="red">${roll[0]}</span> lub <span class="green">${roll[1]}</span>`;
			} else {
				return `<span class="black">${roll[0]}</span> lub <span class="black">${roll[1]}</span>`;
			}
		}
		return `<span class="black">${roll}</span>`;
	};

	const parseDetails = (details) => {
		if (!Array.isArray(details[0])) {
			return `<span class="detail">${details.join(", ")}</span>`;
		}
		return `<span class="detail">${details[0].join(", ")}</span> <span class="or">lub</span> <span class="detail">${details[1].join(
			", "
		)}</span>`;
	};
</script>

<div>
	<style>
		.result span {
			display: inline;
			font-weight: 600;
			font-size: 20px;
		}
		.red {
			color: red;
		}
		.green {
			color: green;
		}
		.detail {
			font-size: 20px;
		}
		.or {
			color: black;
		}
	</style>
	{#each rolls as roll}
		<div class="roll">
			<div class="data id">Id: <span>{roll.id}</span></div>
			<div class="data user">Gracz: <span>{roll.user}</span></div>
			<div class="data dices">Rzucił: <span class="red">{roll.dices}</span></div>
			<div class="data result">Uzyskując: {@html parseRoll(roll.result)}</div>
			<div class="data details">Szczegółowo: {@html parseDetails(roll.details)}</div>
		</div>
	{/each}
</div>

<style type="text/scss">
	.roll {
		display: grid;
		grid-template-columns: 52px 1fr 140px;
		grid-template-rows: auto auto auto;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		max-width: 640px;
		width: calc(100% - 16px);
		gap: 1px;
		background: black;
		max-height: calc(100vh - 64px);
		margin: 8px auto;
	}

	.data {
		background: rgba(255, 255, 255, 0.94);
		padding-left: 8px;
		padding-right: 8px;
		font-size: 12px;
		line-height: 28px;
		white-space: pre-line;
	}

	.id {
		grid-area: 1 / 1 / 2 / 2;
		line-height: 34px;
		span {
			font-size: 12px;
			color: black;
			font-weight: 100;
		}
	}
	.user {
		grid-area: 1 / 2 / 2 / 3;
		span {
			font-size: 20px;
		}
	}
	.dices {
		grid-area: 1 / 3 / 2 / 4;
	}
	.result {
		grid-area: 2 / 1 / 3 / 4;
	}
	.details {
		grid-area: 3 / 1 / 4 / 4;
	}
</style>
