<script>
	export let isActive = false;
</script>

<div class={isActive ? "sub-left-bar active" : "sub-left-bar"}>
	<slot />
</div>

<style type="text/scss">
	.sub-left-bar {
		position: fixed;
		bottom: -64px;
		left: 0;
		width: 100%;
		height: 128px;
		background: rgba(210, 210, 210, 1);
		border-top: 1px solid black;
		transition: all 0.3s;
		z-index: 2;
		border-right: 1px solid white;
		&.active {
			bottom: 64px;
		}
	}
</style>
