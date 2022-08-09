<script>
	export let rolls = [];
</script>

{#each rolls as roll}
	<div class="roll">
		<div class="data id">Id: <span>{roll.id}</span></div>
		<div class="data user">Gracz: <span>{roll.user}</span></div>
		<div class="data dices">Rzucił: <span>{roll.dices}</span></div>
		<div class="data result">Uzyskując: <span>{roll.result}</span></div>
		<div class="data details">Szczegółowo: <span>{roll.details.join(", ")}</span></div>
	</div>
{/each}

<style type="text/scss">
	.roll {
		display: grid;
		grid-template-columns: 52px 1fr 140px;
		grid-template-rows: auto repeat(2, 1fr);
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
		span {
			font-size: 20px;
			font-weight: 600;
			color: green;
		}
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
	}
	.dices {
		grid-area: 1 / 3 / 2 / 4;
	}
	.result {
		grid-area: 2 / 1 / 3 / 4;
	}
	.details {
		grid-area: 3 / 1 / 4 / 4;
		span {
			color: black;
			font-weight: 100;
		}
	}
</style>
