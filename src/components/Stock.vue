<template>
	<div class="stock">
		<div class="optional-bar">
			<van-sticky :offset-top="46">
				<van-notice-bar :scrollable="false" color="#AEAEAE" background="#fff">
					<template #left-icon>
						<img src="../assets/notie.png" width="75px" height="30px" />
					</template>
					<van-swipe vertical :autoplay="3000" :show-indicators="false" class="optional-notice-swipe">
						<van-swipe-item>突发黑天鹅！千亿疫苗巨头逼近20%</van-swipe-item>
						<van-swipe-item>惊呆了！200亿军工半导体大牛股</van-swipe-item>
						<van-swipe-item>今日财经头条|国常会五大措施带动</van-swipe-item>
					</van-swipe>
				</van-notice-bar>
			</van-sticky>
		</div>
		<div class="optional-choice">
			<van-sticky :offset-top="86">
				<van-row class="optional-row">
					<van-col span="4">全部</van-col>
					<van-col span="4" offset="8">最新价</van-col>
					<van-col offset="4" span="4" class="choice-tab">跌涨幅</van-col>
				</van-row>
			</van-sticky>
		</div>
		<div class="optional-content">
			<div v-for="item in optionalStock" :key="item.id" class="optional-stock">
				<van-row>
					<van-col span="7">
						{{item.stockName}}
						<div class="optional-address">{{item.address}}</div>
					</van-col>
					<van-col span="3" offset="5">{{item.stockPirce}}</van-col>
					<van-col offset="4" span="5" class="optional-increase">{{item.stockIncrease}}</van-col>
				</van-row>
			</div>
			<div class="add-stock">+添加股票</div>
		</div>
		<div class="tip-module">行情由第三方提供，详见使用声明</div>
		<!-- 下方滚动通知栏 -->
		<van-notice-bar :scrollable="false" color="#000" background="#fff" class="bottom-notice" style="position: fixed;
bottom: 56px;width: 100%;">
			<van-swipe vertical :autoplay="3000" :show-indicators="false" class="optional-notice-swipe">
				<van-swipe-item class="notice-text">
					<div>上证指数</div>
					<div>2580.99 +25.44 +0.20%</div>
				</van-swipe-item>
				<van-swipe-item class="notice-text">
					<div>深证成指</div>
					<div>3274.22 +33.01 +0.50%</div>
				</van-swipe-item>
				<van-swipe-item class="notice-text">
					<div>创业指板</div>
					<div>13051.5 +0.04 +0.60%</div>
				</van-swipe-item>
			</van-swipe>
		</van-notice-bar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				optionalStock: [{
						stockName: '农夫山泉',
						address: '09633.HK',
						stockPirce: '33.200',
						stockIncrease: '+0.30%'
					},
					{
						stockName: '天山生物',
						address: '300313.SZ',
						stockPirce: '25.41',
						stockIncrease: '+0.90%'
					},
					{
						stockName: '华虹半导体',
						address: '01347.HK',
						stockPirce: '29.000',
						stockIncrease: '+0.60%'
					},
					{
						stockName: '道琼斯',
						address: 'DJI.USI',
						stockPirce: '27288.18',
						stockIncrease: '+0.05%'
					},
					{
						stockName: '贵州茅台',
						address: '600519.SH',
						stockPirce: '1657.99',
						stockIncrease: '+0.72%'
					}
				]
			};
		}

	};
</script>

<style>
	.optional-choice {
		color: #aeaeae;
		font-size: 14px;
		line-height: 42px;
		margin-bottom: 55px;
	}

	.choice-tab {
		margin-left: 55px;
	}

	.optional-row {
		background-color: #f8f8fa;
	}

	.optional-content {
		font-size: 18px;
		margin: 0 10px;
	}

	.optional-increase {
		background-color: #f54622;
		font-size: 18px;
		color: #fff;
		font-weight: 100;
		margin-left: 46px;
		height: 28px;
		line-height: 28px;
		text-align: center;
	}

	.optional-address {
		font-size: 10px;
		text-align: left;
		color: #aeaeae;
		margin-left: 6px;
		margin-top: 1px;
	}

	.optional-stock {
		margin: 10px 0;
		text-align: left;
	}

	.add-stock {
		border-top: 2px solid #F6F7F7;
		padding-top: 15px;
		font-size: 16px;
	}

	.bottom-notice {
		border-top: 1px solid #F1F1F1;
		border-bottom: 1px solid #F1F1F1;
	}

	.notice-text {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.notice-text div:last-child {
		margin-left: 145px;
		color: #30B2A6;
	}

	.tip-module {
		background: #F5F4F9;
		height: 170px;
		color: #C7C7C9;
		font-size: 14px;
		margin-top: 15px;
		padding-top: 13px;
		border-top: 1px solid #FAF9FC;
	}
</style>
