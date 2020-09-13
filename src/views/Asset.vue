<template>
	<div class="asset">
		<!-- 用户信息顶部 -->
		<div class="user-info-top">
			<van-row>
				<van-col offset="18" span="6">
					<van-icon name="service-o" color="#fff" />
					<van-icon name="service-o" color="#fff" class="user-nav" />
				</van-col>
			</van-row>
			<div class="user-content">
				<van-cell size="large" class="user-content-top">
					<template #title>
						<div class="head-img">
							<van-image class="head-pic" round width="50px" height="50px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
							<div class="custom-title username">
								周海欣
								<van-icon name="arrow" color="#D2DAE0" />
							</div>
						</div>
					</template>
					<template #default>
						<div class="user-value">
							<div class="value-text">资产配置升级</div>
							<div class="value-text-2">开启三笔钱</div>
						</div>
					</template>
				</van-cell>
				<!-- <van-button type="primary" size="large">登录</van-button> -->
				
				<van-cell value="内容" icon="balance-pay" size="large" label="描述信息" class="user-content-bottom">
					<template #default>
						<span class="tip-text">理财有风险，入市需谨慎</span>
					</template>
					<template #icon>
						<van-icon name="balance-pay" color="#acb6bb" size="large" class="search=icon" />
					</template>
				</van-cell>
			</div>
			<!-- 我的资产 -->
			<div class="my-assets">
				<van-cell-group :border="false">
					<van-cell center value="账号安全险免费升级" :border="false">
						<template #title>
							<div class="assets-title">
								<span>我的资产</span>
								<van-icon name="eye-o" size="large" color="#B8B8B8" />
							</div>
						</template>
						<template #right-icon>
							<van-icon name="arrow" class="arrow=icon" color="#EAEBEB" />
						</template>
					</van-cell>
					<van-divider class="assets-hr" />
					<van-cell value="昨日收益" class="all-assets" :border="false">
						<template #title>
							<span>总资产</span>
						</template>
					</van-cell>
					<van-cell value="0.00" class="assets-money" value-class="all-right-text" :border="false">
						<template #title>
							<span class="money">0.00</span>
						</template>
					</van-cell>

					<van-divider class="assets-hr" />
					<van-cell value="余额宝" class="balance" value-class="balance-bao" :border="false">
						<template #title>
							<span>余额</span>
						</template>
					</van-cell>
					<van-cell value="随存随取" class="assets-money" value-class="access" :border="false">
						<template #title>
							<span class="access-money">0.00</span>
						</template>
					</van-cell>

					<van-divider class="assets-hr" />
					<van-cell value="基金" class="balance" value-class="balance-bao" :border="false">
						<template #title>
							<span>理财产品</span>
						</template>
					</van-cell>
					<van-cell value="费率1折起" class="assets-money" value-class="access" :border="false">
						<template #title>
							<span class="access-money">收益稳健</span>
						</template>
					</van-cell>

					<van-divider class="assets-hr" />
					<van-cell class="balance" :border="false">
						<template #title>
							<span>理财产品</span>
						</template>
					</van-cell>
					<van-cell class="assets-money" :border="false">
						<template #title>
							<span class="access-money">收益稳健</span>
						</template>
					</van-cell>
				</van-cell-group>
			</div>

			<!-- 我的保障 -->
			<div class="my-safeguard">
				<van-cell-group :border="false">
					<van-cell center :border="false">
						<template #title>
							<div class="assets-title">
								<span>我的保障</span>
							</div>
						</template>
						<template #right-icon>
							<van-icon name="arrow" class="arrow=icon" color="#EAEBEB" />
						</template>
					</van-cell>

					<van-divider class="assets-hr" />
					<van-cell class="balance" :border="false">
						<template #title>
							<span>保险</span>
						</template>
					</van-cell>
					<van-cell class="assets-money" :border="false">
						<template #title>
							<span class="access-money">1位加入保障中</span>
						</template>
					</van-cell>
				</van-cell-group>
			</div>

			<!-- 账单 -->
			<div class="my-bill">
				<van-cell-group>
					<van-cell title="账单" size="large" icon="location-o" title-class="bill">
						<template #right-icon>
							<van-icon name="arrow" color="#D3D3D3" />
						</template>
					</van-cell>
					<van-cell title="银行卡" size="large" icon="location-o" title-class="bill">
						<template #right-icon>
							<van-icon name="arrow" color="#D3D3D3" />
						</template>
					</van-cell>
					<van-cell title="劵包" size="large" icon="location-o" title-class="bill">
						<template #right-icon>
							<van-icon name="arrow" color="#D3D3D3" />
						</template>
					</van-cell>
					<van-cell title="活动" size="large" icon="location-o" title-class="bill">
						<template #right-icon>
							<van-icon name="arrow" color="#D3D3D3" />
						</template>
					</van-cell>
				</van-cell-group>
			</div>

			<!-- 借呗 -->
			<div class="my-borrow">
				<van-cell-group>
					<van-cell title="借呗" size="large" icon="location-o" title-class="bill">
						<template #right-icon>
							<van-icon name="arrow" color="#D3D3D3" />
						</template>
					</van-cell>
				</van-cell-group>
			</div>
		</div>
		<app-tabbar></app-tabbar>
	</div>
</template>

<script>
	import AppTabbar from '@/components/AppTabbar.vue'
	export default {
		data() {
			return {
				// loginIs: false
			}
		},
		components:{
			AppTabbar
		}
	}
</script>

<style>
	/*********************** 用户信息顶部 start ***********************/
	.user-info-top {
		background: #0faefc;
		width: 100%;
		height: 150px;
	}

	.user-nav {
		margin-left: 25px;
		margin-top: 10px;
		margin-bottom: 12px;
	}

	.user-content {
		background-color: #fff;
		margin: 11px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px -3px #eeefef;
		overflow: hidden;
	}

	.user-content-top {
		padding-top: 20px;
		padding-bottom: 25px;
	}

	.username {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: bold;
		margin-left: 10px;
	}

	.head-img {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.head-pic {
		border: 2px solid #ccc;
	}

	.value-text {
		color: #53a2f5;
		font-weight: bold;
		font-size: 16px;
	}

	.value-text-2 {
		color: #0faefc;
		background-color: #e6f3ff;
		font-weight: bold;
		text-align: center;
		width: 90px;
		border-radius: 50px;
		margin-left: 70px;
		margin-top: 5px;
	}

	.user-value {
		text-align: right;
	}

	.tip-text {
		color: #acb6bb;
		margin-left: 5px;
	}

	.user-content-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	/*********************** 用户信息顶部 end ***********************/

	/*********************** 我的资产 start ***********************/
	.my-assets {
		background-color: #fff;
		margin: 11px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px -3px #eeefef;
		overflow: hidden;
	}

	.assets-title {
		text-align: left;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.assets-title span {
		font-size: 16px;
		font-weight: bold;
		margin-right: 10px;
	}

	.assets-hr {
		margin: 5px 0;
	}

	.all-assets {
		text-align: left;
		padding-bottom: 5px;
		padding-top: 3px;
	}

	.balance {
		text-align: left;
		padding-bottom: 5px;
		padding-top: 3px;
	}

	.balance span {
		font-size: 14px;
		color: #595959;
		font-weight: bold;
	}

	.all-assets span {
		font-size: 14px;
		color: #B1B1B2;
		font-weight: bold;
	}

	.assets-money {
		text-align: left;
		padding-top: 0;
		padding-bottom: 1px;
	}

	.all-right-text {
		font-size: 22px;
		font-weight: bold;
		color: #B6B2AE;
	}

	.money {
		font-size: 22px;
		font-weight: bold;
		color: #000000;
		text-align: left;
	}

	.access {
		font-size: 14px;
		color: #B6B2AE;
		font-weight: bold;
		text-align: left;
	}

	.access-money {
		font-size: 14px;
		color: #B6B2AE;
		font-weight: bold;
		text-align: left;
	}

	.balance-bao {
		font-size: 14px;
		color: #595959;
		font-weight: bold;
		text-align: left;
	}

	/*********************** 我的资产 end ***********************/

	/*********************** 我的保障 start ***********************/
	.my-safeguard {
		background-color: #fff;
		margin: 11px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px -3px #eeefef;
		overflow: hidden;
	}

	/*********************** 我的保障 end ***********************/

	/*********************** 账单 start ***********************/
	.my-bill {
		background-color: #fff;
		margin: 11px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px -3px #eeefef;
		overflow: hidden;
	}

	.bill {
		text-align: left;
		font-weight: bold;
	}

	/*********************** 账单 end ***********************/

	/*********************** 借呗 start ***********************/
	.my-borrow {
		background-color: #fff;
		margin: 11px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px -3px #eeefef;
		overflow: hidden;
		padding-bottom: 60px;
	}

	/*********************** 借呗 end ***********************/
</style>
