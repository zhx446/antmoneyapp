<template>
	<div class="login">
		<div class="top-nav">
			<van-nav-bar left-text="返回" :border="false" :fixed="true" left-arrow @click-left="loginReturn" />
		</div>
		<van-image class="app-logo" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		<van-cell-group>
			<van-field size="large" :border="false" v-model="value1" label="账号" right-icon="arrow-down" placeholder="手机号/邮箱/会员号" />
			<van-field size="large" :border="false" v-model="value2" clearable label="密码" type="password"  right-icon="closed-eye" placeholder="请输入登录密码" />
		</van-cell-group>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		data() {
			return {
				value1: '',
				value2: '123',
			};
		},
		methods: {
			loginReturn() {
				Toast('返回');
			}
		},
	};
</script>

<style>
	.login {
		color: red;
	}
	
	.top-nav {
		margin-bottom: 80px;
	}
	
	.app-logo {
		margin-bottom: 50px;
	}
</style>
