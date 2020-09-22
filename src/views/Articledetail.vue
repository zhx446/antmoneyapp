<template>
	<div>
		<van-nav-bar left-text="返回" title="详情" :fixed="true" left-arrow @click-left="toBack" />
		<div class="article-detail">
			<div class="article-title">9月21日操作+晒收益</div>
			<div class="article-writer-module">
				<div class="writer">
					<van-image width="40px" height="35px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					<div class="writer-name">
						<div>草根</div>
						<div>48分钟前</div>
					</div>
				</div>
				<van-button plain type="info" class="writer-keep">+关注</van-button>
			</div>
			<div class="article-detail-content">
				<div class="detail-content">
					<div class="article-top">40万（含10万元收益）实盘操作，趋势为王，结构修边。</div>
					<img src="../assets/article3.png" width="100%" />
					<img src="../assets/article1.png" width="100%" />
					<div>今日操作：满仓持基不动。</div>
					<div>目前券商微涨0.19%，到收盘应该能喝口汤。今日高开低走，呈单边走低之势，期待的 V 型拉升没有出现。</div>
					<div>相对于上周五蛮弱的，这里的判断更倾向于被大盘拖累，获利盘出局，目前券商还是红盘说明抛压并不重，后续会延续上升走势的概率较大，耐心持有即可。</div>
					<div>PS ：留下关注点赞评论再走吧，动动手指就可以让更多人看到我的帖子，你的支持就是我最大的动力。</div>
					<div>会买的是徒弟，会卖的才是师父，关注我下载蚂蚁财富查看每日操作，希望能和大家一起抄底逃顶成功！！</div>
					<div>操作规则：急涨不看空，急跌不抄底。涨跌幅0.6以内进行操作。大涨后上影线减仓，大跌后下影线加仓。</div>
					<div>目前仓位：满仓。</div>
					<div>最新持仓：8月28日买入券商398387元。</div>
					<div>5月19日布局券商170000元，后陆续买入128935元，本金为298935元，8月18日清仓持有总金额为389197元，收益率30.19%，收益90262元。</div>
					<div>8月18日清仓券商收于980点，8月28日买入券商于953点。期间跌2.75%；8月18日持有总金额为389197元，减少损失10702元。</div>
					<img src="../assets/article2.png" width="100%" />
					<div>南方中证全指证券公司 ETF 联接 C (004070)招商中证白酒指数分级(161725)诺安成长混合(320007）</div>
				</div>
				<div class="detail-comment">
					<div class="comment-title">全部评论</div>
					<div class="comment-content" v-for="item in commentList" :key="item.id">
						<img :src="item.userImg" width="35px" height="35px" />
						<div class="comment-content-right">
							<div class="username">
								<div>{{ item.userName }}</div>
								<div>
									0
									<van-icon name="good-job-o" />
								</div>
							</div>
							<div class="comment-mian">{{ item.commentMian }}</div>
							<div class="comment-content-bottom">
								<div>{{ item.commentTime }}</div>
								<div>回复</div>
							</div>
						</div>
					</div>
					<div class="comment-bottom-text">我是有底线的</div>
				</div>
			</div>
		</div>
		<van-search class="comment-search" v-model="value" placeholder="评论..." @search="onSend" show-action action-text="发送"
		left-icon="comment-o" background="#F3F3F5">
			<template #left-icon>
				<van-icon name="comment-o" color="#C8C9CF" />
			</template>
			<template #action>
				<div @click="onSend">发送</div>
			</template>
		</van-search>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				commentList: [{
						userName: '暗箱操作',
						commentMian: '88888888888888',
						commentTime: '2分钟前',
						// require() 获取本地图片
						userImg: require('../assets/article1.png')
					},
					{
						userName: '暗箱操作',
						commentMian: '88888888888888',
						commentTime: '2分钟前',
						userImg: require('../assets/article1.png')
					},
					{
						userName: '暗箱操作',
						commentMian: '88888888888888',
						commentTime: '2分钟前',
						userImg: require('../assets/article1.png')
					},
					{
						userName: '暗箱操作',
						commentMian: '88888888888888',
						commentTime: '2分钟前',
						userImg: require('../assets/article1.png')
					},
					{
						userName: '暗箱操作',
						commentMian: '88888888888888',
						commentTime: '2分钟前',
						userImg: require('../assets/article1.png')
					}
				]
			};
		},
		methods: {
			toBack() {
				this.$router.go(-1);
			},
			onSend() {
				this.commentList.push({userName: '周海欣', commentMian: this.value,commentTime:'刚刚',userImg:require('../assets/article1.png')});
				this.value = '';
			}
		}
	};
</script>
<style src="../css/articledetail.css" scoped></style>
