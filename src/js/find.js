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
					infoId:0,
					readIs:true,
					infoTime: '今天15:10',
					infoText: '【上海：进一步增强托育'
				},
				// 【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给。
				{
					infoId:1,
					readIs:true,
					infoTime: '今天15:10',
					infoText: '【菅义伟：新冠疫情是“最优先问题”将稳固继承安倍政策】当地时间16日晚，日本首相菅义伟在新内阁正式成立后发表就职讲话。据日本共同社报道，菅义伟表示，目前，新冠疫情是对日本来说“最优先的问题”。而他的使命则是稳固地继承安倍的政策，并将其继续向前推进。'
				}, {
					infoId:2,
					readIs:true,
					infoTime: '今天15:10',
					infoText: '【精密科技等7家公司因更新财务资料中止创业板上市审核】深交所披露，精密科技、光祥科技、肇民科技、银河电力、瑞纳智能、新特电气、金钟股份等7家公司因更新财务资料，主动申请中止上市审核程序。根据《深圳证券交易所创业板股票发行上市审核规则》第六十四条的相关规定，深交所中止其发行上市审核。'
				}, {
					infoId:3,
					readIs:true,
					infoTime: '今天15:10',
					infoText: '【卡倍亿：新能源线缆业务对公司整体业绩影响很小】卡倍亿公告，公司关注到市场传闻公司涉及特斯拉概念，公司提示投资者注意，公司系汽车整车厂商的二级供应商，为汽车线束厂商提供汽车线缆配套服务，汽车整车厂商并不是公司的直接客户。公司目前有通过汽车线束厂商安波福电气系统有限公司为特斯拉公司供应汽车线缆，但该业务量占公司销售收入比例较小。而2020年上半年,公司新能源线缆业务2068.63万元，占主营业务收入比例仅5%左右，目前新能源汽车业务对公司整体业绩影响很小。公司关注到在部分媒体和股吧等股票社区中，有少数投资者散布鼓励短线爆炒公司股价的言论，公司提醒投资者秉持价值投资理念，切勿追随投机思维。'
				}, {
					infoId:4,
					readIs:true,
					infoTime: '今天15:10',
					infoText: '【招商蛇口：重组事项近日上会当天停牌】招商蛇口公告，公司当日收到证监会通知，证监会并购重组委将于近日召开工作会议，审核公司发行股份、可转换公司债券购买资产事项。公司A股股票将会议召开当天停牌。'
				}
			],
			hotInfo: [{
				hotTitle: '建立基金吴尚伟：看好可选消费品',
				hotContent: '建信基金权益投资部资深基金经理兼研究部副总经理吴尚伟9月15日在“建行・中证',
				hotName: '中国证券报·中证网·2评论'
			}, {
				hotTitle: '建立基金吴尚伟：看好可选消费品',
				hotContent: '建信基金权益投资部资深基金经理兼研究部副总经理吴尚伟9月15日在“建行・中证',
				hotName: '中国证券报·中证网·2评论'
			}, {
				hotTitle: '建立基金吴尚伟：看好可选消费品',
				hotContent: '建信基金权益投资部资深基金经理兼研究部副总经理吴尚伟9月15日在“建行・中证',
				hotName: '中国证券报·中证网·2评论'
			}, {
				hotTitle: '建立基金吴尚伟：看好可选消费品',
				hotContent: '建信基金权益投资部资深基金经理兼研究部副总经理吴尚伟9月15日在“建行・中证',
				hotName: '中国证券报·中证网·2评论'
			}, {
				hotTitle: '建立基金吴尚伟：看好可选消费品',
				hotContent: '建信基金权益投资部资深基金经理兼研究部副总经理吴尚伟9月15日在“建行・中证',
				hotName: '中国证券报·中证网·2评论'
			}],
			speechSynth:{},
			speech:{}
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
		},

		// 点击播放事件
		playRead(infoId) {
			// 创建语音
			const synth = window.speechSynthesis;
			// 创建文本实例
			const msg = new SpeechSynthesisUtterance();
			
			// 设置默认播报的文本和语言
			// 播放文本
			msg.text =this.infoList[infoId].infoText;
			// 语言类型 中文zh-CN 英文zh-EN
			msg.lang = 'zh-CN';
			
			// 播放内容
			function handleSpeak() {
				synth.speak(msg);
			}

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
			if(this.infoList[infoId].infoId == infoId) {
				console.log('播放')
				this.infoList[infoId].readIs = false;
				this.$refs['infoTextDiv'][infoId].style='background: #FFFAE1;padding: 6px;';
				this.$refs['infoTimeColor'][infoId].style='color:#1975F5';
			}
			console.log(msg);
			this.speech = msg;
			this.speechSynth = synth;

			throttle(handleSpeak(), 1000);
		},
		// 点击暂停
		pauseRead(pauseId) {
			if(this.infoList[pauseId].infoId == pauseId) {
				// 暂停语音 pause()
				this.speechSynth.pause(this.speech);
				this.infoList[pauseId].readIs = true;
				this.$refs['infoTextDiv'][pauseId].style='background: #ffffff;padding: 6px;';
				this.$refs['infoTimeColor'][pauseId].style='color: #D0D0D0;';
				console.log('暂停')
			}
			if(this.infoList[pauseId].readIs == false) {
				// 恢复暂停的语音 resume() 
				this.speechSynth.resume(this.speech);
				this.$refs['infoTextDiv'][pauseId].style='background: #FFFAE1;padding: 6px;';
				this.$refs['infoTimeColor'][pauseId].style='color:#1975F5';
				console.log('播放2')
			}
			
		}

	},
	components: {
		AppTabbar
	}
};
