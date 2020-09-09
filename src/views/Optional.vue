<template>
	<div class="optional">
		<div class="optional-top">
			<div class="optional-nav">
				<div>市场</div>
				<div>
					<van-tabs type="card">
						<van-tab title="标签 1" to="/"></van-tab>
						<van-tab title="标签 2" to="/"></van-tab>
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
							<van-swipe-item>内容 1</van-swipe-item>
							<van-swipe-item>内容 2</van-swipe-item>
							<van-swipe-item>内容 3</van-swipe-item>
						</van-swipe>
					</van-notice-bar>
				</van-sticky>
			</div>
			<div class="optional-choice">
				<van-sticky :offset-top="86">
					<van-row>
						<van-col span="4">全部</van-col>
						<van-col span="4" offset="8">最新价</van-col>
						<van-col offset="4" span="4" class="choice-tab">跌涨幅</van-col>
					</van-row>
				</van-sticky>
			</div>
		</div>
	</div>
</template>

<script></script>

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
	color:#AEAEAE;
	font-size: 16px;
	background-color: #F8F8FA;
	line-height: 42px;
}

.choice-tab {
	margin-left: 55px;
}

.optional-choice {
	background-color: #F8F8FA;
}
</style>
