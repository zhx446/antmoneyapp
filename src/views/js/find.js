import AppTabbar from '@/components/AppTabbar.vue';
export default {
	data() {
		return {
			active: 0,
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
			],
			noticeSwipe: [{
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
			list: [{
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
			curIndex: 0,
			carList: [{
				carTitle: '帮你投',
				carText: '人人可享的顶级投顾服务来了',
				carText2: '省心理财交给我',
				carBtn: '匹配专属策略'
			}, {
				carTitle: '帮你投',
				carText: '人人可享的顶级投顾服务来了',
				carText2: '省心理财交给我',
				carBtn: '匹配专属策略'
			}, {
				carTitle: '帮你投',
				carText: '人人可享的顶级投顾服务来了',
				carText2: '省心理财交给我',
				carBtn: '匹配专属策略'
			}, {
				carTitle: '帮你投',
				carText: '人人可享的顶级投顾服务来了',
				carText2: '省心理财交给我',
				carBtn: '匹配专属策略'
			}],
			bottomActive: 0,
			infoList: [{
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				},
				{
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				}, {
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				}, {
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				}, {
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				}
			]
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
