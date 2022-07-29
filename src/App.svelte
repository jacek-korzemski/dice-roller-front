<script>
	import { Router } from "svelte-navigator";

	const host = "https://dice-roller-node.herokuapp.com";
	let status = "Gotowy do rzutu";
	let uiActive = true;
	let name = "Gal Anonim";
	let rolls = [];

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
	<h2>Gracz:</h2>
	<input type="text" bind:value={name} />
	<hr />
	<h2>Status: <br />{status}</h2>
	<hr />
	<h2>Kostki:</h2>
	<div class={uiActive ? "ready" : "not-ready"}>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d4")}>d4</button>
			<button on:click={() => sendRoll(name, "2d4")}>2d4</button>
			<button on:click={() => sendRoll(name, "3d4")}>3d4</button>
			<button on:click={() => sendRoll(name, "4d4")}>4d4</button>
			<button on:click={() => sendRoll(name, "5d4")}>5d4</button>
		</div>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d6")}>d6</button>
			<button class="main" on:click={() => sendRoll(name, "2d6")}>2d6</button>
			<button on:click={() => sendRoll(name, "3d6")}>3d6</button>
			<button on:click={() => sendRoll(name, "4d6")}>3d6</button>
			<button on:click={() => sendRoll(name, "5d6")}>3d6</button>
		</div>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d8")}>d8</button>
			<button on:click={() => sendRoll(name, "2d8")}>2d8</button>
			<button on:click={() => sendRoll(name, "3d8")}>3d8</button>
			<button on:click={() => sendRoll(name, "4d8")}>4d8</button>
			<button on:click={() => sendRoll(name, "5d8")}>5d8</button>
		</div>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d10")}>d10</button>
			<button on:click={() => sendRoll(name, "2d10")}>2d10</button>
			<button on:click={() => sendRoll(name, "3d10")}>3d10</button>
			<button on:click={() => sendRoll(name, "4d10")}>4d10</button>
			<button on:click={() => sendRoll(name, "5d10")}>5d10</button>
		</div>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d12")}>d12</button>
			<button on:click={() => sendRoll(name, "2d12")}>2d12</button>
			<button on:click={() => sendRoll(name, "3d12")}>3d12</button>
			<button on:click={() => sendRoll(name, "4d12")}>4d12</button>
			<button on:click={() => sendRoll(name, "5d12")}>5d12</button>
		</div>
		<div class="grid-row">
			<button on:click={() => sendRoll(name, "d20")}>d20</button>
			<button on:click={() => sendRoll(name, "2d20")}>2d20</button>
			<button on:click={() => sendRoll(name, "3d20")}>3d20</button>
			<button on:click={() => sendRoll(name, "4d20")}>4d20</button>
			<button on:click={() => sendRoll(name, "5d20")}>5d20</button>
		</div>
	</div>

	<h3>Rzuty:</h3>

	<ul>
		{#each rolls as roll}
			<li>
				<span>rzut numer {roll.id}: </span>
				<span>gracz: <strong>{roll.user}</strong></span>
				<span>wyrzucił: <strong>{roll.result}</strong></span>
				<span>używając: <strong>{roll.dices}</strong></span>
			</li>
		{/each}
	</ul>
</main>

<style>
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
		height: 100vh;
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
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
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
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 10px;
		text-transform: uppercase;
	}
	button {
		text-transform: uppercase;
		font-size: 16px;
		width: 100%;
	}
	button.main {
		background: rgba(16, 255, 15, 0.8);
	}
</style>
