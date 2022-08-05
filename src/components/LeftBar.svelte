<div class="left-bar">
	<slot />
</div>

<style type="text/scss">
	.left-bar {
		position: fixed;
		left: 0;
		top: 0;
		width: 200px;
		background: #f05d5e;
		border-right: 1px solid white;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding-top: 15px;
		max-height: 100vh;
		height: 100vh;
		z-index: 3;
	}
</style>
