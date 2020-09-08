<template>
	<div class="community">
		<!-- 搜索导航栏 -->
		<div class="community-top">
			<van-search class="top-nav" v-model="value" show-action shape="round" background="#2671FE" placeholder="问答/看点/用户/股票/基金">
				<template #action>
					<van-icon name="chat-o" size="large" color="#fff" class="community-top-icon" />
				</template>
			</van-search>

			<van-grid :border="false">
				<van-grid-item icon="photo-o" text="大咖" />
				<van-grid-item icon="photo-o" text="专栏" />
				<van-grid-item icon="photo-o" text="看点" />
				<van-grid-item icon="photo-o" text="短视频" />
			</van-grid>
		</div>
		<!-- 文章模块 -->
		<div class="community-content">
			<!-- 导航 -->
			<van-tabs v-model="articleActive" title-active-color="#000" title-inactive-color="#B8B8B8" :swipeable="true"
			animated color="#2671FE" class="article-nav">
				<van-tab title="热门" title-style="font-weight:600;">
					<div class="article-module" v-for="item in articles" :key="item.id">
						<div class="writer-module">
							<div class="writer-info">
								<van-image round width="30px" height="30px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
								<span>{{item.writerName}}</span>
							</div>
							<div class="attention">+关注</div>
						</div>
						<div class="article-title">
							{{item.articleTitle}}
						</div>
						<div class="article-content">
							<div class="article-content-text">
								{{item.contentText}}
							</div>
							<van-image width="180px" height="67px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						</div>
						<div class="article-info">
							<div>{{item.articleTime}}</div>
							<div>
								<van-icon name="ellipsis" color="#ADADAD" size="large" />
								<van-icon name="good-job-o" color="#505050" size="large" />{{item.likeNum}}
								<van-icon name="chat-o" color="#505050" size="large" />{{item.commentNum}}
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="讨论区" title-style="font-weight:600" :dot="true">内容 2</van-tab>
				<van-tab title="关注" title-style="font-weight:600">内容 3</van-tab>
			</van-tabs>

		</div>
	</div>
</template>

<script>
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
				]
			};
		},
		methods: {

		},
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

	/*********************** 搜索导航栏 end ***********************/

	/*********************** 文章模块 start ***********************/
	.community-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 85px;
	}

	.article-module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 8px solid #F6F5FB;
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
		background-color: #ECF7FE;
		color: #5DADCC;
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
		color: #BBBBBB;
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

	/*********************** 文章模块 end ***********************/
</style>
