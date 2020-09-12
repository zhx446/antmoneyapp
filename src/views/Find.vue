<template>
	<div class="find">
		<!-- 顶部导航栏 -->
		<div class="find-nav-bg">
			<div class="find-nav-search">
				<van-search v-model="value" background="#188AFA" shape="round" show-action placeholder="我能帮你诊断风险">
					<template #action>
						<div class="find-nav-right">搜索</div>
					</template>
				</van-search>
			</div>
			<div class="find-nav-icon">
				<van-grid :column-num="5" :border="false">
					<van-grid-item v-for="value in navList" :key="value" icon="photo-o" :text="value.iconText" />
				</van-grid>
			</div>
			<div class="find-nav-icon fund-flex">
				<div class="fund-top">
					<div class="text-bold">A股</div>|
					<div class="text-bold">创业板指</div>
					<div class="text-color">2536.62</div>
					<div class="text-color">+53.59</div>
					<div class="text-color">+2.16%</div>
					<van-tag type="primary" color="#F1F1F1" text-color="#B9B9B9">周末休市</van-tag>
				</div>
				<div class="fund-bottom">
					<van-tag type="primary" color="#F95027" :round="true">标签</van-tag>
					<div>#楼市调控</div>
					<div>#特拉斯出口</div>
					<div>#8月金融数据</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				navList: [{
						iconText: '余额宝'
					},
					{
						iconText: '理财'
					},
					{
						iconText: '黄金'
					},
					{
						iconText: '基金'
					},
					{
						iconText: '尊享'
					},
					{
						iconText: '股票'
					},
					{
						iconText: '财富号'
					},
					{
						iconText: '年金险'
					},
					{
						iconText: '帮你投'
					}
				]
			};
		},
		methods: {
			// onSearch(val) {
			// 	// Toast(val);
			// }
		}
	};
</script>

<style>
	/*********************** 顶部导航栏 start ***********************/
	.find-nav-bg {
		width: 100%;
		height: 150px;
		background-color: #188AFA;
	}

	.find-nav-right {
		color: #fff;
	}

	.find-nav-icon {
		margin: 20px 10px;
		border-radius: 8px;
		box-shadow: 0px 3px 5px 1px #F3F4F6;
		overflow: hidden;
	}
	
	.fund-flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 14px;
	}
	
	.fund-top {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 12px 0;
		font-size: 14px;
	}
	
	.fund-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: #F8F8F8;
		padding: 12px 0;
	}
	
	.text-bold {
		font-weight: bold;
	}
	
	.text-color {
		color: #DB8C85;
		font-weight: bold;
	}
	
	.fund-bottom div {
		color: #5CAAED;
	}

	/*********************** 顶部导航栏 end ***********************/
</style>
