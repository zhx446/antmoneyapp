<template>
	<div class="find">
		<!-- 顶部导航栏 -->
		<div class="find-nav-bg">
			<div class="find-nav-search">
				<van-search v-model="value" background="#188AFA" shape="round" show-action placeholder="我能帮你诊断风险" @focus="onSearch">
					<template #action>
						<div class="find-nav-right" @click="onSearch">搜索</div>
					</template>
				</van-search>
			</div>
			<div class="find-nav-icon">
				<van-grid :column-num="5" :border="false">
					<van-grid-item v-for="value in navList" :key="value.id" :text="value.iconText">
						<template #icon>
							<svg class="icon" aria-hidden="true">
								<use :xlink:href="value.navIcon"></use>
							</svg>
						</template>
					</van-grid-item>
				</van-grid>
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
		<!-- 卡片切换 -->
		<div class="sroll-nav">
			<div class="showBox" @touchstart="start" @touchmove="move" @touchend="end">
				<div :class="['showItem animate__animated animate__fadeIn', 'show' + item.id]" v-for="item in list" :key="item.id"
				ref="showItem">
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
				<van-swipe :loop="false" :width="280" :show-indicators="false">
					<van-swipe-item v-for="item in carList" :key="item.id" class="car-item">
						<div class="car-module">
							<div class="car-module-top">
								<div>{{ item.carTitle }}</div>
								<van-icon name="arrow" color="#B0BAC1" />
							</div>
							<div class="car-center">
								<div class="car-center-left">
									<div>{{ item.carText }}</div>
									<div>{{ item.carText2 }}</div>
								</div>
								<van-image class="car-center-right" width="70px" height="70px" fit="contain" :src="require('../assets/caricon.png')" />
							</div>
							<div class="car-btn">{{ item.carBtn }}</div>
						</div>
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
		<!-- 底部标签页 -->
		<div class="bottom-tabs">
			<van-tabs v-model="bottomActive" color="#1975F5" :sticky="true" title-active-color="#1975F5">
				<van-tab title="快讯">
					<!-- 快讯 -->
					<div class="flash">
						<div class="open">
							<van-icon name="play-circle-o" />
							<div>开启快讯播报</div>
						</div>
						<van-divider :style="{ margin: '7px -10px' }" />
						<div class="tip-text">资讯由财联社提供</div>
						<div class="info-content" v-for="item in infoList" :key="item.id">
							<div class="info-time">
								<div>
									<van-icon name="stop" color="#1975F5" />
									<span ref="infoTimeColor">{{item.infoTime}}</span>
								</div>
								<van-icon name="play-circle-o" v-if="item.readIs" @click="playRead(item.infoId)" size="18" color="#000" />
								<van-icon name="pause-circle-o" v-else @click="pauseRead(item.infoId)" size="18" color="#1975f5" />
							</div>
							<!-- ref="属性名" 获取这个div的内容 节点-->
							<div ref="infoTextDiv">
								{{item.infoText}}
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="热点" class="hot">
					<div class="hot-ad">
						<div>财富<br />有料</div>
						<div>
							让天下没有难卖的房子 阿里与易居联...
							<br />
							第十三批卫星将于本周发射，“星链...
						</div>
					</div>
					<div class="hot-info" v-for="item in hotInfo" :key="item.id">
						<div class="hot-title" @click="toDetail">
							{{item.hotTitle}}
						</div>
						<div class="hot-content" @click="toDetail">
							<div>{{item.hotContent}}</div>
							<img width="35%" height="75px" :src="item.hotContentImg" />
						</div>
						<div class="hot-bottom">
							<div>{{item.hotName}}</div>
							<van-icon name="cross" @click="deleteHot" />
							<van-action-sheet v-model="show" :actions="actions" :round="false" cancel-text="取消" close-on-click-action @select="deleteCross(item.id)"/>
						</div>
					</div>
				</van-tab>
				<van-tab title="问答">内容 3</van-tab>
				<van-tab title="基金">内容 4</van-tab>
				<van-tab title="行情">内容 4</van-tab>
			</van-tabs>
		</div>
		<app-tabbar></app-tabbar>
	</div>
</template>
<script src="../js/find.js"></script>
<style src="../css/find.css"></style>
