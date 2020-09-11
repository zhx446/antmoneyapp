<template>
	<div class="optional">
		<div class="optional-top">
			<div class="optional-nav">
				<div>市场</div>
				<div>
					<van-tabs type="card">
						<van-tab title="股票" to="/optional/stock"></van-tab>
						<van-tab title="基金" to="/optional/fund"></van-tab>
					</van-tabs>
				</div>
				<div>
					<van-icon name="search" />
					<van-icon name="apps-o" />
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}

	};
</script>

<style>
	.optional-nav {
		position: fixed;
		top: 0;
		width: 100%;
		height: 46px;
		background-color: #2671fe;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		color: #fff;
	}

	.optional-notice-swipe {
		height: 30px;
		line-height: 30px;
	}
</style>
