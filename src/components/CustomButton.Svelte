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
		padding: 16px 0;
		text-align: center;
		color: white;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
		margin-bottom: -1px;
		cursor: pointer;
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
