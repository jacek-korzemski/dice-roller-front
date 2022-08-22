<script>
	// APIs
	import updateLastRolls from "api/updateLastRolls";

	// STORES
	import { rolls } from "stores/rolls";

	// COMPONENTS
	import BottomBar from "components/BottomBar.svelte";
	import CustomButton from "components/CustomButton.svelte";
	import SubBottomBar from "components/SubBottomBar.svelte";
	import BasicDices from "components/BasicDices.svelte";
	import PopularDices from "components/PopularDices.svelte";
	import CustomDices from "components/CustomDices.svelte";
	import User from "components/User.svelte";
	import Rolls from "components/Rolls.svelte";

	// ICONS
	import d4 from "icons/d4.svg";
	import d6 from "icons/d6.svg";
	import d8 from "icons/d8.svg";
	import d10 from "icons/d10.svg";
	import d20 from "icons/d20.svg";
	import user from "icons/user.svg";
	import pencil from "icons/pencil.svg";

	// Variables to read from stores
	let currentRolls;
	let disabled = false;

	// Subscriptions
	rolls.subscribe((value) => {
		currentRolls = value;
	});

	// Initial function to update data
	const isEnabled = true;

	if (isEnabled) {
		setInterval(() => {
			updateLastRolls();
		}, 1000);
	}

	// UI logic
	let subBarIsActive = false;
	let subBarContent = "";

	const toggleSubBar = (option) => {
		if (subBarContent === "") {
			subBarIsActive = true;
			subBarContent = option;
			return;
		}
		if (subBarContent === option) {
			subBarIsActive = false;
			subBarContent = "";
			return;
		}
		disabled = true;
		subBarIsActive = false;
		setTimeout(() => {
			subBarIsActive = true;
			subBarContent = option;
			disabled = false;
		}, 300);
		return;
	};

	const closeSubBar = () => {
		subBarIsActive = false;
		subBarContent = "";
	};
</script>

<main class={disabled ? "disabled" : "active"}>
	<BottomBar>
		<CustomButton clickHandler={() => toggleSubBar("user")} isActive={false}
			><img class="user-icon" src={user} alt="user" /></CustomButton
		>
		<CustomButton clickHandler={() => toggleSubBar("basicDices")} isActive={false}
			><img class="single-dice" src={d20} alt="user" /></CustomButton
		>
		<CustomButton clickHandler={() => toggleSubBar("popularDices")} isActive={false}>
			<div class="dice-set">
				<img src={d4} alt="d4" />
				<img src={d8} alt="d8" />
				<img src={d10} alt="d10" />
				<img src={d6} alt="d6" />
			</div>
		</CustomButton>
		<CustomButton clickHandler={() => toggleSubBar("customDices")} isActive={false}
			><img class="pencil" src={pencil} alt="pencil" /></CustomButton
		>
	</BottomBar>
	<SubBottomBar isActive={subBarIsActive}>
		{#if subBarContent === "user"}
			<User closeHandler={closeSubBar} />
		{/if}
		{#if subBarContent === "basicDices"}
			<BasicDices closeHandler={closeSubBar} />
		{/if}
		{#if subBarContent === "popularDices"}
			<PopularDices closeHandler={closeSubBar} />
		{/if}
		{#if subBarContent === "customDices"}
			<CustomDices closeHandler={closeSubBar} />
		{/if}
	</SubBottomBar>
	<div class="rolls">
		<Rolls rolls={currentRolls} />
	</div>
</main>

<style type="text/scss">
	main {
		background: rgba(30, 30, 39, 1);
		width: 100%;
		height: 100vh;
		img {
			max-height: 64px;
			width: auto;
			display: block;
			margin: 0 auto;
		}
		&.disabled {
			pointer-events: none;
		}
	}
	.user-icon {
		transform: scale(0.8);
	}
	.single-dice {
		transform: scale(1.4);
	}
	.dice-set {
		display: grid;
		width: 64px;
		height: 64px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		text-align: center;
		margin: 0 auto;
		img {
			width: 32px;
			height: auto;
			transform: scale(1.5);
		}
	}
	.pencil {
		transform: scale(0.7);
	}
	.rolls {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100vh - 192px);
		overflow-y: scroll;
	}
</style>
