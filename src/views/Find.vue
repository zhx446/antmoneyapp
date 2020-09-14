<template>
	<div class="find">
		<!-- 顶部导航栏 -->
		<div class="find-nav-bg">
			<div class="find-nav-search">
				<van-search v-model="value" background="#188AFA" shape="round" show-action placeholder="我能帮你诊断风险">
					<template #action>
						<div class="find-nav-right" @click="onSearch">搜索</div>
					</template>
				</van-search>
			</div>
			<div class="find-nav-icon">
				<van-grid :column-num="5" :border="false"><van-grid-item v-for="value in navList" :key="value.id" icon="photo-o" :text="value.iconText" /></van-grid>
			</div>
			<div class="find-nav-icon fund-flex">
				<div>
					<van-notice-bar background="#fff" :scrollable="false" class="find-notice">
						<van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
							<van-swipe-item class="fund-top" v-for="item in noticeSwipe" :key="item.id">
								<div class="text-bold">{{item.stock}}</div>
								<div class="text-bold">|</div>
								<div class="text-bold">{{item.title}}</div>
								<div class="text-color text-margin">{{item.stockNum}}</div>
								<div class="text-color ">{{item.stockNum2}}</div>
								<div class="text-color text-margin">{{item.stockNum3}}</div>
								<van-tag type="primary" color="#F1F1F1" text-color="#B9B9B9">{{item.stockTag}}</van-tag>
							</van-swipe-item>
						</van-swipe>
					</van-notice-bar>
				</div>
				<div class="fund-bottom">
					<van-tag type="primary" color="#F95027" :round="true">热点</van-tag>
					<div>#楼市调控</div>
					<div>#特拉斯出口</div>
					<div>#8月金融数据</div>
				</div>
			</div>
		</div>
		<!-- 滚动导航栏 -->
		<div class="sroll-nav">
			<van-tabs v-model="active" :swipeable="true" title-active-color="#316CF9" color="#316CF9">
				<!-- <van-tab :title="item.navTitle" v-for="item in srollNav" :key="item.id"> -->
				<van-tab title="投资顺风车">
					<div class="sroll-card">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
				<van-tab title="攒点金子">
					<div class="sroll-card" style="background-color: #FDF4D5;">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
				<van-tab title="稳健理财">
					<div class="sroll-card" style="background-color: #DBF0FE;">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
				<van-tab title="精选组合">
					<div class="sroll-card" style="background-color: #F7E2F3;">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
				<van-tab title="保险优选">
					<div class="sroll-card" style="background-color: #D2E2FC;">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
				<van-tab title="进攻优势">
					<div class="sroll-card" style="background-color: #D2E2FC;">
						<div class="sroll-card-title">内需消费</div>
						<div class="card">
							<div class="card-left">
								<div>投资潜力</div>
								<div class="card-text">富国消费主题混合</div>
								<div class="card-text-2">投资机会，就在你身边</div>
								<div>
									<van-tag plain type="primary" class="card-tag">消费旺季</van-tag>
									<van-tag plain type="primary" class="card-tag">聚焦龙头</van-tag>
								</div>
							</div>
							<div class="card-right">10元上车</div>
						</div>
						<div class="sroll-card-bottom">
							<van-icon name="balance-list-o" size="17" />
							<div>选品还要看配置，来看看【三笔钱】</div>
							<van-icon name="arrow" />
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<app-tabbar></app-tabbar>
	</div>
</template>

<script>
import AppTabbar from '@/components/AppTabbar.vue';
export default {
	data() {
		return {
			active: 0,
			value: '',
			navList: [
				{
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
			],
			noticeSwipe:[
				{
					stock:'A股',
					title:'创业板指',
					stockNum:'2536.62',
					stockNum2:'+53.59',
					stockNum3:'+53.59',
					stockTag:'周末休市'
				},{
					stock:'A股',
					title:'深证成指',
					stockNum:'1302199',
					stockNum2:'+79.04',
					stockNum3:'+0.61%',
					stockTag:'已收盘'
				},{
					stock:'A股',
					title:'创业板指',
					stockNum:'2536.62',
					stockNum2:'+53.59',
					stockNum3:'+53.59',
					stockTag:'周末休市'
				},{
					stock:'A股',
					title:'创业板指',
					stockNum:'2536.62',
					stockNum2:'+53.59',
					stockNum3:'+53.59',
					stockTag:'周末休市'
				}
			]
			// srollNav: [{
			// 		navTitle: '投资顺风车'
			// 	}, {
			// 		navTitle: '攒点金子'
			// 	},
			// 	{
			// 		navTitle: '稳健理财'
			// 	}, {
			// 		navTitle: '精选组合'
			// 	}, {
			// 		navTitle: '保险优选'
			// 	}, {
			// 		navTitle: '进攻优选'
			// 	}
			// ]
			
		};
	},
	methods: {
		onSearch() {
			this.$router.push('/search');
		}
	},
	components: {
		AppTabbar
	}
};
</script>

<style>
/*********************** 顶部导航栏 start ***********************/
.find-nav-bg {
	width: 100%;
	height: 150px;
	background-color: #188afa;
}

.find-nav-right {
	color: #fff;
}

.find-nav-icon {
	margin: 20px 10px;
	border-radius: 8px;
	box-shadow: 0px 3px 5px 1px #f3f4f6;
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
	justify-content: space-between;
	align-items: center;
	font-size: 13px;
	
}

.fund-top div {
	margin-left: 5px;
}

.fund-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #f8f8f8;
	padding: 12px 0;
}

.text-bold {
	color: #000000;
	font-weight: bold;
	margin-left: 3px;
}

.text-color {
	color: #F56040;
	margin-right: 3px;
}

.fund-bottom div {
	color: #5caaed;
}

.notice-swipe {
	height: 40px;
	line-height: 40px;
}

.find-notice {
	padding: 0;
}

.text-margin {
	margin-right: 12px;
}

/*********************** 顶部导航栏 end ***********************/

/*********************** 滚动导航栏 start ***********************/
.sroll-nav {
	margin-top: 200px;
}

.sroll-card {
	background-color: #69a2ff;
	height: 220px;
	width: 300px;
	margin: 0 auto;
	border-radius: 5px;
	text-align: left;
	padding: 10px;
	margin-top: 15px;
}

.sroll-card-title {
	font-size: 16px;
	color: #fff;
	margin-bottom: 10px;
	font-weight: bold;
}

.card {
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 10px;
}

.card-left div:first-child {
	color: #fcc713;
	font-size: 16px;
	padding: 8px;
	border-bottom: 1px solid #f8f7f7;
	font-weight: bold;
}

.card-text {
	font-size: 14px;
	color: #000;
	font-weight: bold;
	padding: 8px;
}

.card-text-2 {
	color: #939393;
	padding: 0 8px 12px;
	font-size: 12px;
}

.card-left div:last-child {
	padding: 0 0 15px;
}

.card-tag {
	margin-left: 8px;
}

.sroll-card-bottom {
	background-color: #b6d6fd;
	color: #5f8ada;
	border-radius: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	padding: 5px 5px;
	margin: 9px 0;
}

.card-right {
	width: 100px;
	height: 30px;
	background-color: #2071fa;
	color: #fff;
	border-radius: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 13px;
	margin-top: 30px;
}

/*********************** 滚动导航栏 end ***********************/
</style>
