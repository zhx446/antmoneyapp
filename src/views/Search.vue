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

		<img v-on:click="read(word.word)" src="../assets/logo.png" alt="小喇叭" width="20px" height="20px" style="float: right;margin-top: 7px" />
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
			msg.text = '你今天真好看！';
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
