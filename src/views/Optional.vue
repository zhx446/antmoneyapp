<template>
	<div class="optional">
		<div class="optional-top">
			<div class="optional-nav">
				<div>市场</div>
				<div>
					<van-tabs type="card" v-model="activeTab">
						<van-tab title="股票" to="/optional/cut/stock"></van-tab>
						<van-tab title="基金" to="/optional/cut/fund"></van-tab>
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
				activeTab:0,
				optionalStock: [{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					},
					{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					},
					{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					},
					{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					},
					{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					}
				]
			};
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
