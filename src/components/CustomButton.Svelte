<script>
	const buttonProps = (isActive, disabled) => {
		let className = "button";
		if (isActive) {
			className += " active";
		}
		if (disabled) {
			className += " disabled";
		}
		return className;
	};

	export let clickHandler = () => {};
	export let isActive = false;
	export let disabled = false;
</script>

<div class={buttonProps(isActive, disabled)} on:click={clickHandler}>
	<slot />
</div>

<style>
	.button {
		width: 100%;
		text-align: center;
		color: white;
		margin-bottom: -1px;
		cursor: pointer;
		border-right: 1px solid black;
	}
	.button:last-child {
		border-right: none;
	}
	.button:hover,
	.button.active {
		background: #0f7173;
	}
	.button.disabled {
		opacity: 0.5;
		cursor: default;
	}
</style>
