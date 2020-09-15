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
								<div class="text-bold">{{ item.stock }}</div>
								<div class="text-bold">|</div>
								<div class="text-bold">{{ item.title }}</div>
								<div class="text-color text-margin">{{ item.stockNum }}</div>
								<div class="text-color ">{{ item.stockNum2 }}</div>
								<div class="text-color text-margin">{{ item.stockNum3 }}</div>
								<van-tag type="primary" color="#F1F1F1" text-color="#B9B9B9">{{ item.stockTag }}</van-tag>
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
			<div class="showBox" @touchstart="start" @touchmove="move" @touchend="end">
				<div :class="['showItem animate__animated animate__fadeIn', 'show' + item.id]" v-for="item in list" :key="item.id" ref="showItem">
					<div>
						<div class="sroll-card-title">{{ item.cardTitle }}</div>
						<div class="card">
							<div class="card-left">
								<div>{{ item.cardLeftTitle }}</div>
								<div class="card-text">{{ item.bottomText }}</div>
								<div class="card-text-2">{{ item.conText }}</div>
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
				</div>
			</div>
		</div>

		<!-- 财富直通车 -->
		<div class="money-car">
			<div class="car-top">
				<div>财富直通车</div>
				<div>最近使用</div>
			</div>
			<div>
				<van-swipe :loop="false" :width="300">
					<van-swipe-item>1</van-swipe-item>
					<van-swipe-item>2</van-swipe-item>
					<van-swipe-item>3</van-swipe-item>
					<van-swipe-item>4</van-swipe-item>
				</van-swipe>
			</div>
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
			noticeSwipe: [
				{
					stock: 'A股',
					title: '创业板指',
					stockNum: '2536.62',
					stockNum2: '+53.59',
					stockNum3: '+53.59',
					stockTag: '周末休市'
				},
				{
					stock: 'A股',
					title: '深证成指',
					stockNum: '1302199',
					stockNum2: '+79.04',
					stockNum3: '+0.61%',
					stockTag: '已收盘'
				},
				{
					stock: 'A股',
					title: '创业板指',
					stockNum: '2536.62',
					stockNum2: '+53.59',
					stockNum3: '+53.59',
					stockTag: '周末休市'
				},
				{
					stock: 'A股',
					title: '创业板指',
					stockNum: '2536.62',
					stockNum2: '+53.59',
					stockNum3: '+53.59',
					stockTag: '周末休市'
				}
			],
			list: [
				{
					id: 1,
					cardTitle: '内需消费',
					cardLeftTitle: '投资潜力',
					bottomText: '富国消费主题混合',
					conText: '投资机会，就在你身边'
				},
				{
					id: 2,
					cardTitle: '黄金',
					cardLeftTitle: '超值黄金',
					bottomText: '华安黄金',
					conText: '1元就能买黄金'
				},
				{
					id: 3,
					cardTitle: '投资组合',
					cardLeftTitle: '零钱佳',
					bottomText: '富国消费主题混合',
					conText: '余额理财新选择'
				},
				{
					id: 4,
					cardTitle: '业绩优异',
					cardLeftTitle: '景顺长城优选混合',
					bottomText: '爆款老基10尝鲜',
					conText: '近三年涨幅+58.10%'
				}
			],
			clientX: 0,
			curIndex: 0
		};
	},
	methods: {
		onSearch() {
			this.$router.push('/search');
		},

		start(event) {
			this.clientX = event.touches[0].clientX;
		},
		move() {},
		end(event) {
			console.log(event);
			const endX = event.changedTouches[0].clientX;
			// console.log('结束时的X坐标：'+endX+'，开始时的坐标：'+this.clientX)
			// 开始时坐标超过结束时20以上 向左滑动
			if (this.clientX - endX > 20) {
				this.toLeft();
			}
			// 结束时坐标超过开始时20以上 向右滑动
			else if (endX - this.clientX > 20) {
				this.toRight();
			}
		},
		// 左滑事件
		toLeft() {
			const beforeIndex = this.curIndex == 0 ? 3 : this.curIndex - 1;
			const nextIndex = this.curIndex == 3 ? 0 : this.curIndex + 1;
			this.$refs.showItem[this.curIndex].classList.add('animate__fadeOutLeft');
			this.curIndex = nextIndex;
			console.log('向左滑动事件');
			// 把第一项存起来
			const firstItem = this.list[0];
			// 删除第一项
			this.list.splice(0, 1);
			// 把删掉的第一项加在最后一项
			this.$set(this.list, this.list.length, firstItem);
			// 异步删除slideOutLeft类
			setTimeout(() => {
				this.$refs.showItem[beforeIndex].classList.remove('animate__fadeOutLeft');
			}, 100);
		},
		// 右滑事件
		toRight() {
			console.log('向右滑动事件');
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
	color: #f56040;
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
	text-align: left;
	padding-left: 13px;
	padding-top: 5px;
}

.card {
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 10px;
	width: 265px;
	margin: 0 auto;
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
	margin: 8px 14px;
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

/*********************** 滑动卡片 start ***********************/
.test {
	margin-top: 100px;
	width: 300px;
	height: 180px;
	background: antiquewhite;
}

.showBox {
	position: relative;
	margin-top: 30px;
	width: 100%;
	height: 180px;
}

.showItem {
	position: absolute;
	width: 300px;
	margin-left: -150px;
	border-radius: 5px;
	height: 225px;
	width: 300px;
	text-align: left;
	margin-top: 15px;
}

.showItem:nth-child(1) {
	left: 50%;
	z-index: 6;
}

.show1 {
	background-color: #69a2ff;
}

.showItem:nth-child(2) {
	z-index: 5;
	left: calc(50% + 10px);
	transform: scale(0.98);
}

.show2 {
	background: antiquewhite;
}

.showItem:nth-child(3) {
	z-index: 4;
	left: calc(50% + 20px);
	transform: scale(0.96);
}

.show3 {
	background: aquamarine;
}

.showItem:nth-child(4) {
	z-index: 3;
	left: calc(50% + 30px);
	transform: scale(0.94);
}

.show4 {
	background: cadetblue;
}

/*********************** 滑动卡片 end ***********************/

/*********************** 财富直通车 start ***********************/
.money-car {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.car-top {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 80px;
}

.car-top div:first-child {
	font-size: 16px;
	font-weight: bold;
}

.car-top div:last-child {
	font-size: 14px;
	color: #ccc;
}

/*********************** 财富直通车 end ***********************/
</style>
