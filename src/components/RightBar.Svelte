<div class="right-bar">
	<slot />
</div>

<style>
	.right-bar {
		position: fixed;
		top: 0;
		left: 200px;
		width: calc(100% - 200px);
		height: 100vh;
		background: #0f7173;
		border-left: 1px solid white;
	}
</style>
