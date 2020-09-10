<template>
	<div class="optional">
		<div class="optional-top">
			<div class="optional-nav">
				<div>市场</div>
				<div>
					<van-tabs type="card">
						<van-tab title="标签 1" to="/optional"></van-tab>
						<van-tab title="标签 2" to="/optional"></van-tab>
					</van-tabs>
					
				</div>
				<div>
					<van-icon name="search" />
					<van-icon name="apps-o" />
				</div>
			</div>
			<div class="optional-bar">
				<van-sticky :offset-top="46">
					<van-notice-bar left-icon="volume-o" :scrollable="false" color="#AEAEAE" background="#fff">
						<van-swipe vertical class="optional-notice-swipe" :autoplay="3000" :show-indicators="false">
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
		</div>
		<div class="optional-content">
			<div v-for="item in optionalStock" :key="item.id" class="optional-stock">
				<van-row>
					<van-col span="6">
						{{item.stockName}}
						<div class="optional-address">{{item.address}}</div>
					</van-col>
					<van-col span="3" offset="6">{{item.stockPirce}}</van-col>
					<van-col offset="4" span="5" class="optional-increase">{{item.stockIncrease}}</van-col>
				</van-row>
			</div>
			<div class="add-stock">+添加股票</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			optionalStock: [{
				stockName:'农夫山泉',
				address:'09633.HK',
				stockPirce:'33.200',
				stockIncrease:'+0.30%'
			},
			{
				stockName:'农夫山泉',
				address:'09633.HK',
				stockPirce:'33.200',
				stockIncrease:'+0.30%'
			},
			{
				stockName:'农夫山泉',
				address:'09633.HK',
				stockPirce:'33.200',
				stockIncrease:'+0.30%'
			},
			{
				stockName:'农夫山泉',
				address:'09633.HK',
				stockPirce:'33.200',
				stockIncrease:'+0.30%'
			},
			{
				stockName:'农夫山泉',
				address:'09633.HK',
				stockPirce:'33.200',
				stockIncrease:'+0.30%'
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
	font-size: 21px;
	font-weight: bold;
}

.optional-increase {
	background-color: #f54622;
	font-size: 18px;
	color: #fff;
	font-weight: 100;
	margin-left: 46px;
	height: 28px;
	line-height: 28px;
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
}

.add-stock {
	border-top: 2px solid #F6F7F7;
	padding-top: 10px;
	font-size: 16px;
}
</style>
