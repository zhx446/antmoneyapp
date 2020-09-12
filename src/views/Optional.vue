<template>
	<div class="optional">
		<div class="optional-top">
			<div class="optional-nav">
				<div>市场</div>
				<div>
					<van-tabs type="card" title-inactive-color="#70A5FC" :ellipsis="false" color="#0558E8" background="#276DFE"
					:border="true">
						<van-tab title="股票" to="/optional/stock"></van-tab>
						<van-tab title="基金" to="/optional/fund"></van-tab>
					</van-tabs>
				</div>
				<div style="font-size: 22px;">
					<van-icon name="search" class="nav-icon" />
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
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}

	.optional-nav div:first-child {
		font-size: 16px;
		padding-left: 10px;
	}

	.optional-nav div:last-child {
		padding-right: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
	}

	.nav-icon {
		margin-right: 5px;
	}

	.optional-notice-swipe {
		height: 30px;
		line-height: 30px;
	}
</style>
