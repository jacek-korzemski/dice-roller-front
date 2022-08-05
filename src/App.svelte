<script>
	// APIs
	import sendRoll from "api/sendRoll";
	import updateLastRolls from "api/updateLastRolls";

	// STORES
	import { status, uiActive } from "stores/status";
	import { rolls } from "stores/rolls";

	// COMPONENTS
	import LeftBar from "components/LeftBar.svelte";
	import RightBar from "components/RightBar.svelte";
	import CustomButton from "components/CustomButton.svelte";
	import SubLeftBar from "components/SubLeftBar.svelte";
	import BasicDices from "components/BasicDices.svelte";
	import PopularDices from "components/PopularDices.svelte";

	// Variables to read from stores
	let currentStatus;
	let currentUiStatus;
	let currentRolls;

	// Subscriptions
	status.subscribe((value) => {
		currentStatus = value;
	});

	uiActive.subscribe((value) => {
		currentUiStatus = value;
	});

	rolls.subscribe((value) => {
		currentRolls = value;
	});

	// App states
	let name = "Gal Anonim";
	let customRoll = "";
	let opened = "";

	// Initial function to update data
	// setInterval(() => {
	// 	updateLastRolls();
	// }, 1000);

	// UI logic
	let subBarIsActive = false;
	let subBarContent = "";

	const toogleSubBar = () => {
		console.log("click");
		subBarIsActive = !subBarIsActive;
	};

	const openDefaultDices = () => {
		toogleSubBar();
		subBarContent = "basicDices";
	};

	const openPopularDices = () => {
		toogleSubBar();
		subBarContent = "popularDices";
	};
</script>

<main>
	<LeftBar>
		<CustomButton clickHandler={toogleSubBar} isActive={false}>Gracz</CustomButton>
		<CustomButton clickHandler={openDefaultDices} isActive={false}>Podstawowe kości</CustomButton>
		<CustomButton clickHandler={openPopularDices} isActive={false}>Często używane</CustomButton>
		<CustomButton clickHandler={() => {}} isActive={false}>Własna formuła</CustomButton>
	</LeftBar>
	<SubLeftBar isActive={subBarIsActive} closeHandler={toogleSubBar}>
		{#if subBarContent === "basicDices"}
			<BasicDices
				closeHandler={() => {
					subBarIsActive = false;
				}}
			/>
		{/if}
		{#if subBarContent === "popularDices"}
			<PopularDices
				closeHandler={() => {
					subBarIsActive = false;
				}}
			/>{/if}
	</SubLeftBar>
	<RightBar />
</main>
