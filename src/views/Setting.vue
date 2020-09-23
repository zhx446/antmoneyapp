<template>
	<div class="setting">
		<van-nav-bar title="设置" @click-left="onClickLeft" class="nav">
			<template #title>
				<div class="set-title">设置</div>
			</template>
			<template #left>
				<van-icon name="arrow-left" color="#fff" size="18"/>
				<div class="set-left">资产</div>
			</template>
		</van-nav-bar>
		<div class="setting-cells">
			<van-cell title="账户与安全" is-link />
			<van-cell title="支付设置" is-link />
			<van-cell title="密码设置" is-link />
		</div>
		<div class="setting-cells">
			<van-cell title="新消息通知" is-link />
			<van-cell title="隐私" is-link />
			<van-cell title="通用" is-link />
		</div>
		<div class="setting-cells"><van-cell title="关于" is-link /></div>
		<van-cell title="退出登录" :border="false" @click="toLogin" />
		<div class="bg"></div>
	</div>
</template>

<script>
import { Dialog } from 'vant';
export default {
	components: {
		[Dialog.Component.name]: Dialog.Component
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		toLogin() {
			Dialog.confirm({
				message: '退出登录',
				confirmButtonColor:'#2699F1',
				cancelButtonColor:'#2699F1'
			}).then(() => {
				this.$router.push('/');
			});
		}
	}
};
</script>

<style scoped>

.setting-cells {
	text-align: left;
	border-bottom: 13px solid #f5f4f9;
}

.bg {
	background-color: #f9f9f9;
	width: 100%;
	height: 230px;
}

.out-login {
	color: #000000;
}

.nav {
	background-color: #2671FE;
}

.set-title,.set-left {
	color: #fff;
}

</style>
