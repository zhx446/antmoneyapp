<template>
	<div class="search">
		<van-search v-model="value" shape="round" show-action placeholder="股票/基金/问答/资讯/用户">
			<template #left>
				<van-icon name="arrow-left" color="#5382C8" size="20" class="nav-icon" />
			</template>
			<template #action>
				<div>搜索</div>
			</template>
		</van-search>

		<img v-on:click="read" src="../assets/logo.png" alt="小喇叭" width="100px" style="float: right;margin-top: 7px" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		};
	},
	methods: {
		read: function() {
			const synth = window.speechSynthesis;
			const msg = new SpeechSynthesisUtterance();
			msg.text = '【上海：进一步增强托育资源供给、完善托育服务体系】上海市副市长陈群介绍了《上海市托育服务三年行动计划（2020-2022年）》主要内容，上海将以此为指导，持续增强托育服务供给，完善托育服务体系，不断满足市民群众多层次、多元化的托育服务需求。一是大力推进普惠性托育点建设。二是坚持托幼一体化方向增加托育服务供给。三是加强多元化托育服务资源供给';
			msg.lang = 'zh-CN';
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
			console.log(msg);

			throttle(handleSpeak(), 1000);
		}
	}
};
</script>

<style>
.nav-icon {
	padding-right: 5px;
}
</style>
