<template>
	<div class="community">
		<!-- 搜索导航栏 -->
		<div class="community-top">
			<div class="nav-module">
				<van-search class="top-nav" v-model="value" show-action shape="round" background="#2671FE" placeholder="问答/看点/用户/股票/基金">
					<template #action>
						<van-icon name="chat-o" size="large" color="#fff" class="community-top-icon" />
					</template>
				</van-search>
			</div>
		</div>
		<!-- 文章模块 -->
		<div class="community-content">
			<van-grid :border="false">
				<van-grid-item icon="photo-o" text="大咖" />
				<van-grid-item icon="photo-o" text="专栏" />
				<van-grid-item icon="photo-o" text="看点" />
				<van-grid-item icon="photo-o" text="短视频" />
			</van-grid>
			<!-- 标签导航 -->
			<van-tabs v-model="articleActive" :sticky="true" offset-top="65px" title-active-color="#000" title-inactive-color="#B8B8B8"
			:swipeable="true" animated color="#2671FE">
				<!-- 热门模块 -->
				<van-tab title="热门" title-style="font-weight:600;">
					<div class="article-module" v-for="item in articles" :key="item.id">
						<div class="writer-module">
							<div class="writer-info">
								<van-image round width="30px" height="30px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
								<span>{{ item.writerName }}</span>
							</div>
							<div class="attention">+关注</div>
						</div>
						<div @click="toArticleDetail">
							<div class="article-title">{{ item.articleTitle }}</div>
							<div class="article-content">
								<div class="article-content-text">{{ item.contentText }}</div>
								<van-image width="180px" height="67px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
								<van-image width="110px" height="80px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
							<div class="my-discuss-top my-wealt-bottom">
								<van-image width="48%" height="48%" radius="12px 12px 12px 1px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
								<van-image width="48%" height="48%" radius="12px 12px 12px 1px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
							</div>
							<div class="my-discuss-bottom" v-for="item in wealthList" :key="item.id">
								<van-image width="110px" height="80px" radius="12px 12px 12px 1px" fit="contain" :src="item.wealthImg" />
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
	import AppTabbar from '@/components/AppTabbar.vue'
	export default {
		data() {
			return {
				value: '',
				articleActive: 0,
				articles: [{
						writerName: '周海欣',
						articleTitle: '9.8：科技和周期板块的打分贴',
						contentText: '如预想的那样，今天还是在调整的，虽然目前看，大盘已经翻红了，貌似数据还挺不错的。',
						articleTime: '10分钟前',
						likeNum: 1000,
						commentNum: 222
					},
					{
						writerName: '周海欣',
						articleTitle: '9.8：科技和周期板块的打分贴',
						contentText: '如预想的那样，今天还是在调整的，虽然目前看，大盘已经翻红了，貌似数据还挺不错的。',
						articleTime: '10分钟前',
						likeNum: 1000,
						commentNum: 222
					},
					{
						writerName: '周海欣',
						articleTitle: '9.8：科技和周期板块的打分贴',
						contentText: '如预想的那样，今天还是在调整的，虽然目前看，大盘已经翻红了，貌似数据还挺不错的。',
						articleTime: '10分钟前',
						likeNum: 1000,
						commentNum: 222
					}
				],
				wealthList: [{
						wealthImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
						wealthTitle: '黄龙大讲堂小组',
						wealthText: '坚决看空，神机先看到3200'
					},
					{
						wealthImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
						wealthTitle: '黄龙大讲堂小组',
						wealthText: '坚决看空，神机先看到3200'
					},
					{
						wealthImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
						wealthTitle: '黄龙大讲堂小组',
						wealthText: '坚决看空，神机先看到3200'
					},
					{
						wealthImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
						wealthTitle: '黄龙大讲堂小组',
						wealthText: '坚决看空，神机先看到3200'
					}
				]
			};
		},
		components: {
			AppTabbar
		},
		methods: {
			toArticleDetail () {
				this.$router.push('/articledetail');
			}
		}
	};
</script>

<style>
	/*********************** 搜索导航栏 start ***********************/
	.top-nav {
		padding-top: 15px;
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
		margin: 8px 8px;
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
		width: 30%;
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
		text-align: left;
		margin-right: 50px;
		line-height: 27px;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
