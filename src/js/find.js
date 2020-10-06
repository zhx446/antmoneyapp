import AppTabbar from '@/components/AppTabbar.vue';
export default {
	data() {
		return {
			active: 0,
			value: '',
			navList: [{
					iconText: '余额宝',
					navIcon: '#icon-yuebao'
				},
				{
					iconText: '理财',
					navIcon: '#icon-licaiTab_pinleirukou-dingqi'
				},
				{
					iconText: '黄金',
					navIcon: '#icon-huangjin'
				},
				{
					iconText: '基金',
					navIcon: '#icon-dakayunji'
				},
				{
					iconText: '尊享',
					navIcon: '#icon-huangjin1'
				},
				{
					iconText: '股票',
					navIcon: '#icon-gupiao'
				},
				{
					iconText: '财富号',
					navIcon: '#icon-caifu_huaban'
				},
				{
					iconText: '年金险',
					navIcon: '#icon-bao'
				},
				{
					iconText: '帮你投',
					navIcon: '#icon-pinleirukou-bangnitou'
				}
			],
			noticeSwipe: [{
					stock: 'A股',
					title: '创业板指',
					stockNum: '2536.62',
					stockNum2: '+53.59',
					stockNum3: '+53.59',
					stockTag: '交易中'
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
					title: '上证指数',
					stockNum: '3288.55',
					stockNum2: '+23.59',
					stockNum3: '-0.84%',
					stockTag: '交易中'
				},
				{
					stock: 'A股',
					title: '创业板指',
					stockNum: '2545.33',
					stockNum2: '+53.59',
					stockNum3: '-0.30%',
					stockTag: '交易中'
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
				carTitle: '稳健理财',
				carText: '小钱攒出大梦想',
				carText2: '七日去年化',
				carBtn: '去看看'
			}, {
				carTitle: '财富专栏',
				carText: '黄金遭猛烈暴击 后市能否绝地反击？',
				carText2: '黄金风暴眼|3小时前',
				carBtn: '围观一下'
			}, {
				carTitle: '财富SHOW',
				carText: '三大股指全线下挫军工板块逆市大涨',
				carText2: '9月21收盘播报',
				carBtn: '去看看'
			}],
			bottomActive: 0,
			infoList: [{
					infoId: 0,
					readIs: true,
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。'
				},
				{
					infoId: 1,
					readIs: true,
					infoTime: '今天15:10',
					infoText: '【菅义伟：新冠疫情是“最优先问题”将稳固继承安倍政策】当地时间16日晚，日本首相菅义伟在新内阁正式成立后发表就职讲话。据日本共同社报道，菅义伟表示，目前，新冠疫情是对日本来说“最优先的问题”。而他的使命则是稳固地继承安倍的政策，并将其继续向前推进。'
				}, {
					infoId: 2,
					readIs: true,
					infoTime: '今天15:10',
					infoText: '【精密科技等7家公司因更新财务资料中止创业板上市审核】深交所披露，精密科技、光祥科技、肇民科技、银河电力、瑞纳智能、新特电气、金钟股份等7家公司因更新财务资料，主动申请中止上市审核程序。根据《深圳证券交易所创业板股票发行上市审核规则》第六十四条的相关规定，深交所中止其发行上市审核。'
				}, {
					infoId: 3,
					readIs: true,
					infoTime: '今天15:10',
					infoText: '【卡倍亿：新能源线缆业务对公司整体业绩影响很小】卡倍亿公告，公司关注到市场传闻公司涉及特斯拉概念，公司提示投资者注意，公司系汽车整车厂商的二级供应商，为汽车线束厂商提供汽车线缆配套服务，汽车整车厂商并不是公司的直接客户。公司目前有通过汽车线束厂商安波福电气系统有限公司为特斯拉公司供应汽车线缆，但该业务量占公司销售收入比例较小。而2020年上半年,公司新能源线缆业务2068.63万元，占主营业务收入比例仅5%左右，目前新能源汽车业务对公司整体业绩影响很小。公司关注到在部分媒体和股吧等股票社区中，有少数投资者散布鼓励短线爆炒公司股价的言论，公司提醒投资者秉持价值投资理念，切勿追随投机思维。'
				}, {
					infoId: 4,
					readIs: true,
					infoTime: '今天15:10',
					infoText: '【招商蛇口：重组事项近日上会当天停牌】招商蛇口公告，公司当日收到证监会通知，证监会并购重组委将于近日召开工作会议，审核公司发行股份、可转换公司债券购买资产事项。公司A股股票将会议召开当天停牌。'
				}
			],
			hotInfo: [{
				hotTitle: '10月15日操作+晒收益',
				hotContent: '今日操作：满仓持基不动。目前券商微涨0.19%，到收盘应该能喝口汤。今日高开低走...',
				hotName: '草根评论员·2评论',
				hotContentImg: require('../assets/article1.png')
			}, {
				hotTitle: '三只妖股暴力拉升！目前均打开跌停板',
				hotContent: '9月22日,妖股天山生物(300313. SZ )、长方集团(300301. SZ )、豫金刚石(300064. SZ )...',
				hotName: '第一财经·80评论',
				hotContentImg: require('../assets/article4.jpg')
			}, {
				hotTitle: '又现“一日售罄”景顺长城消费精选基金配售比或低于60%',
				hotContent: '9月21日,景顺长城消费精选基金首发。据渠道消息,截至21日下午5点,该基金认购规模达到80亿元...',
				hotName: '中国证券报·中证网·2评论',
				hotContentImg: require('../assets/article5.jpg')
			}, {
				hotTitle: '交银施罗德产业机遇混合基金“一日售罄”',
				hotContent: '9月21日晚间,交银施罗德基金发布公告称,交银施罗德产业机遇混合型证券投资基金已于2020年9月21日...',
				hotName: '中国证券报·中证网·2评论',
				hotContentImg: require('../assets/article6.jpg')
			}, {
				hotTitle: '51只基金“踩雷”持有 ST 舍得1559万股',
				hotContent: '近期,机构抱团的食品饮料板块持续调整,子板块白酒调整明显。而舍得酒业“爆雷...',
				hotName: '金融投资报·1评论',
				hotContentImg: require('../assets/article7.jpg')
			}],
			speechSynth: {},
			speech: {},
			show: false,
			actions: [{
				name: '不感兴趣'
			}],
		};
	},
	methods: {
		// 显示弹出层
		deleteHot() {
			this.show = true;
		},
		// 清除文章
		deleteCross(crossId) {
			this.hotInfo.splice(crossId, 1);
		},
		onSearch() {
			this.$router.push('/search');
		},
		toDetail() {
			this.$router.push('/articledetail');
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
		},

		// 点击播放事件
		playRead(infoId) {
			// 创建语音
			const synth = window.speechSynthesis;
			// 创建文本实例
			const msg = new SpeechSynthesisUtterance();

			// 设置默认播报的文本和语言
			// 播放文本
			msg.text = this.infoList[infoId].infoText;
			// 语言类型 中文zh-CN 英文zh-EN
			msg.lang = 'zh-CN';

			// 播放内容
			function handleSpeak() {
				synth.speak(msg);
			}
			
			// 避免重复点击
			function throttle(fn, delay) {
				let last = 0;
				return function() {
					const now = new Date();
					if (now - last > delay) {
						fn.apply(this, arguments);
						last = now;
					}
				};
			}
			// 点击播放显示播放按钮
			if (this.infoList[infoId].infoId == infoId) {
				console.log('播放')
				this.infoList[infoId].readIs = false;
				this.$refs['infoTextDiv'][infoId].style = 'background: #FFFAE1;padding: 6px;';
				this.$refs['infoTimeColor'][infoId].style = 'color:#1975F5';
			}
			
			if (this.infoList[infoId].readIs == false) {
				// 恢复暂停的语音 resume() 
				synth.resume(msg);
				this.$refs['infoTextDiv'][infoId].style = 'background: #FFFAE1;padding: 6px;';
				this.$refs['infoTimeColor'][infoId].style = 'color:#1975F5';
				console.log('播放2')
			}
			console.log(msg);
			this.speech = msg;
			this.speechSynth = synth;

			throttle(handleSpeak(), 1000);
		},
		// 点击暂停
		pauseRead(pauseId) {
			if (this.infoList[pauseId].infoId == pauseId) {
				// 暂停语音 pause()
				this.speechSynth.pause(this.speech);
				this.infoList[pauseId].readIs = true;
				this.$refs['infoTextDiv'][pauseId].style = 'background: #ffffff;padding: 6px;';
				this.$refs['infoTimeColor'][pauseId].style = 'color: #D0D0D0;';
				console.log('暂停')
			}
		}
	},
	components: {
		AppTabbar
	}
};
