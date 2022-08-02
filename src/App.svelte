<script>
	const host = "https://dice-roller-node.herokuapp.com";
	// const host = "http://localhost:5000";
	let status = "Gotowy do rzutu";
	let uiActive = true;
	let name = "Gal Anonim";
	let customRoll = "";
	let rolls = [];
	let opened = "";

	const sendRoll = (user, dices) => {
		uiActive = false;
		status = "Rzucam...";
		fetch(host + "/api/new-roll", {
			method: "POST",
			cache: "no-cache",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ user: user, dices: dices }),
		})
			.then(() => {
				status = "Rzucono!";
				updateLastRolls();
				setTimeout(() => {
					status = "Gotowy do rzutu";
					uiActive = true;
				});
			})
			.catch(() => {
				status = "Wystąpił błąd podczas rzucania 🔥";
			});
	};

	const updateLastRolls = () => {
		fetch(host + "/api/last-rolls", {
			method: "GET",
			cache: "no-cache",
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((res) => {
				rolls = res;
			})
			.catch(() => {
				status = "Wystąpił błąd podczas wczytywania rzutów 🔥";
			});
	};

	setInterval(() => {
		updateLastRolls();
	}, 1000);
</script>

<main>
	<div class="main">
		<div class="top-part-of-the-app">
			<h3>Gracz:</h3>
			<input type="text" bind:value={name} />
			<hr />
			<h3>Status: {status}</h3>
			<hr />
			<h4>Kostki:</h4>
			<div class={uiActive ? "ready" : "not-ready"}>
				<div style="display: flex; justify-content: space-between; gap: 15px;">
					<p
						class="clickable"
						on:click={() => {
							opened === "basic" ? (opened = "") : (opened = "basic");
						}}
					>
						Podstawowe {#if opened === "basic"} 🔽 {:else} 🔼 {/if}
					</p>

					<p
						class="clickable"
						on:click={() => {
							opened === "popular" ? (opened = "") : (opened = "popular");
						}}
					>
						Często używane {#if opened === "popular"} 🔽 {:else} 🔼 {/if}
					</p>

					<p
						class="clickable"
						on:click={() => {
							opened === "custom" ? (opened = "") : (opened = "custom");
						}}
					>
						Własna formuła {#if opened === "custom"} 🔽 {:else} 🔼 {/if}
					</p>
				</div>

				{#if opened === "basic"}
					<div class="grid-row">
						<button on:click={() => sendRoll(name, "d4")}>d4</button>
						<button on:click={() => sendRoll(name, "d6")}>d6</button>
						<button on:click={() => sendRoll(name, "d8")}>d8</button>
						<button on:click={() => sendRoll(name, "d10")}>d10</button>
						<button on:click={() => sendRoll(name, "d12")}>d12</button>
						<button on:click={() => sendRoll(name, "d20")} class="main">d20</button>
						<button on:click={() => sendRoll(name, "d100")}>d100</button>
					</div>
				{/if}

				{#if opened === "popular"}
					<div class="grid-row">
						<button on:click={() => sendRoll(name, "2d6")}>2d6</button>
					</div>
				{/if}

				{#if opened === "custom"}
					<p>
						<small>Np.: 2d6 + d4 + 1</small>
					</p>
					<div class="input-grid">
						<input type="text" bind:value={customRoll} />
						<button on:click={() => sendRoll(name, customRoll)}>Rzuć!</button>
					</div>
				{/if}
			</div>
		</div>
		<div class="bottom-part-of-the-app">
			<h3>Rzuty:</h3>

			<ul>
				{#each rolls as roll}
					<li>
						<div class="roll">
							<div class="top">
								<span>rzut numer <strong class="green">{roll.id}</strong>: </span>
								<span>gracz: <strong>{roll.user}</strong></span>
							</div>
							<div class="middle">
								<span>wyrzucił: <strong>{roll.result}</strong></span>
								<span>używając: <strong>{roll.dices}</strong></span>
							</div>
							<div class="bottom">
								<span>
									Szczegółowo:
									{#each roll.details as detail}
										{detail},
									{/each}
								</span>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style>
	.top-part-of-the-app {
		height: 100%;
		border-bottom: 1px solid rgba(0, 0, 0, 0.12);
		padding-bottom: 15px;
	}
	.bottom-part-of-the-app {
		padding: 15px;
		width: calc(100% - 30px);
		height: 100%;
		overflow-y: auto;
	}

	.clickable {
		cursor: pointer;
	}
	.main {
		max-width: calc(100% - 15px);
		margin: 0 auto;
		width: 640px;
		max-height: 100vh;
		gap: 15px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.green {
		color: green;
	}
	.roll {
		width: 100%;
		border: 1px solid rgba(0, 0, 0, 0.25);
		margin-bottom: 16px;
	}
	.roll .top,
	.roll .middle {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	}
	.roll .top span,
	.roll .middle span {
		width: 100%;
	}
	.roll .top span:last-child,
	.roll .middle span:last-child {
		border-left: 1px solid rgba(0, 0, 0, 0.25);
	}
	input[type="text"] {
		width: 300px;
		height: 32px;
		font-size: 16px;
		color: red;
		border-radius: 99px;
		padding: 0 16px;
		line-height: 32px;
	}
	.not-ready {
		opacity: 0.5;
		pointer-events: none;
	}
	main {
		background: rgba(0, 0, 0, 0.12);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		max-width: 100%;
		min-height: 100%;
	}
	ul {
		width: 100%;
		max-width: 700px;
		margin: 32px auto;
		padding: 0;
	}
	ul li {
		width: 100%;
		max-width: 700px;
		list-style-type: none;
		padding: 0;
	}
	ul li span {
		display: block;
		text-align: left;
		padding: 0 8px;
	}
	.grid-row {
		width: 100%;
		max-width: 480px;
		display: grid;
		margin: 10px auto;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 10px;
		text-transform: uppercase;
	}
	button {
		text-transform: uppercase;
		font-size: 16px;
		width: 100%;
	}
	button.main {
		width: 100%;
		background: rgba(16, 255, 15, 0.8);
	}
	.input-grid {
		margin: 0 auto;
		width: 100%;
		max-width: 760px;
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
	}
	.input-grid input {
		display: block;
		width: 100%;
		height: 36px;
	}
	.input-grid button {
		border: 1px solid black;
	}
</style>
