<template>
	<div class="optional-fund">
		<div class="fund-top-moduel">
			<div class="fund-top">
				<div class="fund-sse">
					<div>上证指数</div>
					<div>3225.50</div>
				</div>
				<div class="fund-as">
					<div>深证指数</div>
					<div>12747.09</div>
				</div>
				<van-icon name="arrow-down" color="#E1E2E2" />
			</div>
		</div>
		<div class="fund-content">
			<van-row class="fund-content-title">
				<van-col span="5">基金名称</van-col>
				<van-col offset="9" span="3" class="fund-num">
					<div>净值</div>
					<div>10-14</div>
				</van-col>
				<van-col offset="3" span="4" class="fund-num">
					<div>估值</div>
					<div>10-14</div>
				</van-col>
			</van-row>
			<div class="fund-list" v-for="item in fundList" :key="item.id">
				<div class="fund-list-name fund-num">
					<div>{{ item.fundName }}</div>
					<div>{{ item.fundNum }}</div>
				</div>
				<div>
					<div>{{ item.fundValue }}</div>
					<div class="fund-bai">{{ item.fundBai }}</div>
				</div>
				<div class="fund-num">
					<div>--</div>
					<div>--</div>
				</div>
			</div>
			<div class="fund-add">
				<van-icon name="add" />
				<div>添加自选</div>
			</div>
		</div>
		<div class="bottom-text">最新估值根据基金持仓和指数走势估算，仅供参考，实际涨幅跌以基金公司披露为准。</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fundList: [{
						fundName: '景顺长城新兴成长混合',
						fundNum: '260102',
						fundValue: '2.5820',
						fundBai: '+1.45%'
					},
					{
						fundName: '天弘中证医药100指数A',
						fundNum: '260108',
						fundValue: '1.1571',
						fundBai: '-0.14%'
					},
					{
						fundName: '中银中证100指数增强',
						fundNum: '163808',
						fundValue: '1.9100',
						fundBai: '-0.93%'
					}
				]
			};
		},
		mounted() {
			console.log(this);
		}
	};
</script>

<style scoped>
	.optional-fund {
		margin-top: 46px;
	}

	.fund-top-moduel {
		border-bottom: 8px solid #f5f5f6;
	}

	.fund-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0px 10px;
		padding: 20px 0;
		font-size: 16px;
	}

	.fund-sse div:last-child {
		color: #35b89a;
		font-weight: bold;
		margin-top: 5px;
	}

	.fund-as div:last-child {
		color: #f75b38;
		font-weight: bold;
		margin-top: 5px;
	}

	.fund-num div:last-child {
		color: #aeaeae;
		font-size: 14px;
		padding: 3px 0 0;
	}

	.fund-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0px 35px 0 10px;
		padding: 12px 0;
		font-size: 16px;
		border-top: 1px solid #f7f7f7;
		border-bottom: 1px solid #f7f7f7;
	}

	.fund-list-name div:last-child {
		text-align: left;
	}

	.fund-bai {
		color: #aeaeae;
		font-size: 14px;
		padding: 3px 0 0;
		color: #ee5112;
	}

	.fund-content {
		font-size: 16px;
	}

	.fund-content-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 8px 0;
	}

	.fund-add {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15px 0;
		color: #226ff8;
	}

	.fund-add div {
		margin-left: 5px;
	}

	.bottom-text {
		background: #F5F4F9;
		height: 170px;
		color: #C7C7C9;
		font-size: 14px;
		margin-top: 15px;
		border-top: 1px solid #FAF9FC;
		padding: 15px 28px 0;
	}
</style>
