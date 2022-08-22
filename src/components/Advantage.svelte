<script>
	import { advantage } from "stores/advantage";
	import d20 from "icons/d20.svg";

	let hasAdvantage;

	advantage.subscribe((value) => {
		hasAdvantage = value;
	});

	const toggleAdvantage = () => {
		hasAdvantage = !hasAdvantage;
		advantage.set(hasAdvantage);
	};
</script>

<div class="advantage">
	<div class="wrapper">
		<div class="single">
			<img src={d20} alt="d20" />
		</div>
		<div class="slider" on:click={toggleAdvantage}>
			<div class={hasAdvantage ? "ball right" : "ball left"} />
		</div>
		<div class="multiple">
			<img src={d20} alt="d20" />
			<img src={d20} alt="d20" />
		</div>
	</div>
</div>

<style type="text/scss">
	.advantage {
		width: 100%;
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid black;
		.wrapper {
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 300px;
			img {
				max-width: 64px;
				max-height: 64px;
			}
		}
		.slider {
			width: 76px;
			height: 32px;
			background: #1e1e27;
			border: 1px solid white;
			border-radius: 99px;
			position: relative;
			transition: all 0.3s;
			cursor: pointer;
			&:hover {
				.ball {
					background: #f2f2f2;
					box-shadow: 1px 1px 1px gray;
				}
			}
			.ball {
				background: white;
				width: 42px;
				height: 42px;
				position: absolute;
				top: -5px;
				left: 0;
				border-radius: 99px;
				box-shadow: 1px 2px 3px black;
				transition: all 0.3s;
				&.left {
					left: 0;
				}
				&.right {
					left: calc(100% - 42px);
				}
			}
		}
		.multiple {
			img {
				&:nth-child(2) {
					transform: translateX(-24px) rotate(90deg);
				}
			}
		}
	}
</style>
