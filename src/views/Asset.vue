<template>
	<div class="asset">
		<!-- 用户信息顶部 -->
		<div class="user-info-top">
			<van-row>
				<van-col offset="18" span="7">
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
				<van-cell value="内容" icon="balance-pay" size="large" label="描述信息" class="user-content-bottom">
					<template #default>
						<span class="tip-text">理财有风险，入市需谨慎</span>
					</template>
					<template #icon>
						<van-icon name="balance-pay" color="#acb6bb" size="large" class="search=icon" />
					</template>
				</van-cell>
			</div>
			<!-- <van-button type="primary" to="/login">登录</van-button> -->

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
					<van-cell title="单元格" value="内容" label="描述信息" />
				</van-cell-group>
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
/*********************** 用户信息顶部 start ***********************/
.user-info-top {
	background: #0faefc;
	width: 100%;
	height: 150px;
}

.user-nav {
	margin-left: 25px;
	margin-right: 15px;
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

/*********************** 我的资产 end ***********************/
</style>
