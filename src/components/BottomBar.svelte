<div class="bottom-bar">
	<slot />
</div>

<style type="text/scss">
	.bottom-bar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: rgba(225, 225, 225, 1);
		border-top: 1px solid black;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		height: 64px;
		z-index: 3;
	}
</style>
