<template>
	<div class="community">
		<!-- 搜索导航栏 -->
		<div class="community-top">
			<div class="nav-module">
				<van-search class="top-nav" v-model="value" show-action shape="round" background="#2671FE" placeholder="问答/看点/用户/股票/基金"
				@focus="onSearch">
					<template #action>
						<van-icon name="chat-o" size="25" color="#fff" class="community-top-icon" />
					</template>
				</van-search>
			</div>
		</div>
		<!-- 文章模块 -->
		<div class="community-content">
			<van-grid :border="false">
				<van-grid-item>
					<template #icon>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-dakayunji"></use>
						</svg>
					</template>
					<template #text>
						<div class="grid-text">大咖</div>
					</template>
				</van-grid-item>
				<van-grid-item>
					<template #icon>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zhuanlantuisong"></use>
						</svg>
					</template>
					<template #text>
						<div class="grid-text">专栏</div>
					</template>
				</van-grid-item>
				<van-grid-item>
					<template #icon>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-chakandianji"></use>
						</svg>
					</template>
					<template #text>
						<div class="grid-text">看点</div>
					</template>
				</van-grid-item>
				<van-grid-item>
					<template #icon>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-dingdan-duanshipin"></use>
						</svg>
					</template>
					<template #text>
						<div class="grid-text">短视频</div>
					</template>
				</van-grid-item>
			</van-grid>
			<!-- 标签导航 -->
			<van-tabs v-model="articleActive" :sticky="true" offset-top="63px" title-active-color="#000" title-inactive-color="#B8B8B8"
			:swipeable="true" animated color="#2671FE">
				<!-- 热门模块 -->
				<van-tab title="热门" title-style="font-weight:600;">
					<div class="article-module" v-for="item in articles" :key="item.id">
						<div class="writer-module">
							<div class="writer-info">
								<van-image round width="30px" height="30px" :src="item.headImg" />
								<span>{{ item.writerName }}</span>
							</div>
							<div class="attention">+关注</div>
						</div>
						<div @click="toArticleDetail">
							<div class="article-title">{{ item.articleTitle }}</div>
							<div class="article-content">
								<div class="article-content-text">{{ item.contentText }}</div>
								<van-image class="article-img" width="190px" height="55px" fit="contain" :src="item.articleImg" />
							</div>
							<div class="article-info">
								<div>{{ item.articleTime }}</div>
								<div>
									<van-icon name="ellipsis" color="#ADADAD" size="large" />
									<van-icon name="good-job-o" color="#505050" size="large" />
									{{ item.likeNum }}
									<van-icon name="chat-o" color="#505050" size="large" />
									{{ item.commentNum }}
								</div>
							</div>
						</div>
					</div>
				</van-tab>
				<!-- 讨论区模块 -->
				<van-tab title="讨论区" title-style="font-weight:600" :dot="true">
					<div class="discuss-module">
						<div class="my-discuss">
							<div class="my-discuss-top">
								<div>我的讨论区</div>
								<div>
									<span>自选&持有</span>
									<van-icon name="arrow" />
								</div>
							</div>
							<div class="my-discuss-bottom">
								<div class="my-discuss-left">
									<div>-0.12%</div>
									<div>09-22更新</div>
								</div>
								<div class="my-discuss-bottom-right">
									<div>上证指数讨论区</div>
									<div>
										<span>[99+条]</span>
										崩盘了，大家散了吧
									</div>
								</div>
							</div>
						</div>
						<div class="wealth-team">
							<div class="my-discuss-top">
								<div>财富小组</div>
								<div>
									<span>全部</span>
									<van-icon name="arrow" />
								</div>
							</div>
							<div class="my-discuss-bottom" v-for="item in wealthList" :key="item.id">
								<van-image width="150px" height="73px" radius="12px 12px 12px 1px" fit="contain" :src="item.wealthImg" />
								<div class="my-discuss-bottom-right">
									<div>{{ item.wealthTitle }}</div>
									<div>{{ item.wealthText }}</div>
								</div>
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="关注" title-style="font-weight:600">内容 3</van-tab>
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
				value: '',
				articleActive: 0,
				articles: [{
						writerName: '养基司令',
						headImg: require('../assets/headimg.jpg'),
						articleTitle: '40万（含10万元收益）实盘操作',
						contentText: '目前券商微涨0.19%，到收盘应该能喝口汤。今日高开低走，呈单边走低之势，期待的 V 型...',
						articleImg: require('../assets/article3.png'),
						articleTime: '1分钟前',
						likeNum: 100,
						commentNum: 22
					},
					{
						writerName: '老杨基金说',
						headImg: require('../assets/headimg2.jpg'),
						articleTitle: '医药如期反弹，昨天的买入没...',
						contentText: '先看一下关注行业指数涨跌情况：科创50领涨2.0%,和昨天的预测差不多，短期因为科创...',
						articleImg: require('../assets/aricleimg.jpg'),
						articleTime: '5分钟前',
						likeNum: 1000,
						commentNum: 222
					},
					{
						writerName: '老胡谈基',
						headImg: require('../assets/headimg3.jpg'),
						articleTitle: '智能选股赋能主动研究，投资“小而美”同样出彩！',
						contentText: '动研究与智能选股两种策略相得益彰，大数据智能量化投资是否大有可为？',
						articleImg: require('../assets/aricleimg2.jpg'),
						articleTime: '10分钟前',
						likeNum: 1000,
						commentNum: 222
					}
				],
				wealthList: [{
						wealthImg: require('../assets/article6.jpg'),
						wealthTitle: '黄龙大讲堂小组',
						wealthText: '坚决看空，神机先看到3200'
					},
					{
						wealthImg: require('../assets/article5.jpg'),
						wealthTitle: '草根军团讨论区小组',
						wealthText: '成交量递减是怎么一回事？'
					},
					{
						wealthImg: require('../assets/article6.jpg'),
						wealthTitle: '故乡的云理财课程小组',
						wealthText: '分歧分歧，目前有点转一致了'
					},
					{
						wealthImg: require('../assets/article7.jpg'),
						wealthTitle: '大家都说定投好小组',
						wealthText: '9.23宽基指数估值'
					}
				]
			};
		},
		components: {
			AppTabbar
		},
		methods: {
			toArticleDetail() {
				this.$router.push('/articledetail');
			},
			onSearch() {
				this.$router.push('/search');
			},
		}
	};
</script>

<style>
	/*********************** 搜索导航栏 start ***********************/
	.top-nav {
		padding-top: 10px;
	}

	.community-top-icon {
		line-height: 37.6px;
	}

	.nav-module {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
	}

	.icon {
		width: 35px;
		height: 35px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		margin-bottom: 7px;
	}
	
	.grid-text {
		font-size: 14px;
	}

	/*********************** 搜索导航栏 end ***********************/

	/*********************** 文章模块 start ***********************/
	.community-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 85px;
		margin-top: 65px;
	}

	/*********** 热门 start ***********/

	.article-module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 8px solid #f6f5fb;
		padding-bottom: 12px;
	}

	.writer-module {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 18px 10px;
	}

	.writer-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.writer-info span {
		font-size: 16px;
		font-weight: bold;
		margin-left: 8px;
	}

	.attention {
		background-color: #ecf7fe;
		color: #5dadcc;
		font-size: 13px;
		width: 35px;
		height: 25px;
		padding: 0px 10px;
		border-radius: 4px;
		line-height: 25px;
	}

	.article-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.article-title {
		font-size: 20px;
		font-weight: bold;
		text-align: left;
		margin-left: 8px;
		margin-bottom: 12px;
	}

	.article-content-text {
		font-size: 16px;
		text-align: left;
		margin-left: 10px;
		width: 100%;
	}

	.article-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 15px 8px 12px;
	}

	.article-info div:first-child {
		font-size: 13px;
		color: #bbbbbb;
	}

	.article-info div:last-child {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		color: #505050;
		width: 35%;
	}

	.article-img {
		border-radius: 6px;
		overflow: hidden;
		margin: 0 10px;
	}

	/*********** 热门 end ***********/

	/*********** 讨论区 start ***********/
	.discuss-module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* border-bottom: 10px solid #f5f6f6; */
	}

	.my-discuss {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 15px 10px;
	}

	.my-discuss-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.my-discuss-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 9px 0;
	}

	.my-discuss-left {
		background-image: linear-gradient(to right, #55c14a, #3dab3b);
		color: #fff;
		font-size: 16px;
		width: 40%;
		height: 65px;
		border-radius: 10px 10px 10px 2px;
		line-height: 20px;
	}

	.my-discuss-left div:first-child {
		font-size: 19px;
		font-weight: bold;
		padding-right: 15px;
		padding-top: 15px;
	}

	.my-discuss-left div:last-child {
		font-size: 12px;
		color: #90d58b;
		padding-right: 20px;
	}

	.my-discuss-top div:first-child {
		font-size: 16px;
		color: #3a3b3b;
		font-weight: 600;
	}

	.my-discuss-top div:last-child {
		font-size: 16px;
		color: #c0c1c1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.my-discuss-bottom-right {
		width: 73%;
		text-align: left;
		margin-right: 50px;
		line-height: 27px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 12px;
	}

	.my-discuss-bottom-right div:first-child {
		font-size: 17px;
		color: #3a3b3b;
		font-weight: 600;
	}

	.my-discuss-bottom-right div:last-child {
		font-size: 15px;
		color: #b4b4b4;
	}

	.my-discuss-bottom-right div:last-child span {
		color: #f2c459;
	}

	.wealth-team {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 8px 10px;
	}

	.my-wealt-bottom {
		margin: 15px 0 5px;
	}

	/*********** 讨论区 end ***********/

	/*********************** 文章模块 end ***********************/
</style>
