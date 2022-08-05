<script>
	import CustomButton from "components/CustomButton.svelte";

	export let isActive = false;
	export let closeHandler = () => {};
</script>

<div class={isActive ? "sub-left-bar active" : "sub-left-bar"}>
	<CustomButton isActive={false} clickHandler={closeHandler}>Zamknij</CustomButton>
	<slot />
</div>

<style type="text/scss">
	.sub-left-bar {
		position: fixed;
		top: 0;
		left: -200px;
		width: 200px;
		background: #b34545;
		transition: all 0.3s;
		z-index: 2;
		padding-top: 15px;
		border-right: 1px solid white;
		&.active {
			left: 200px;
		}
	}
</style>
