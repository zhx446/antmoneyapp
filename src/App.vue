<template>
	<div id="app">
		<div class="tab">
			<van-tabbar v-model="active" :fixed="true" :safe-area-inset-bottom="true" :placeholder="true" :route="true">
				<van-tabbar-item icon="home-o" to="/">发现</van-tabbar-item>
				<van-tabbar-item icon="search" to="/optional">自选</van-tabbar-item>
				<van-tabbar-item icon="friends-o" to="/community">社区</van-tabbar-item>
				<van-tabbar-item icon="setting-o" to="/asset">资产</van-tabbar-item>
			</van-tabbar>
		</div>
		<router-view />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000;
	}
	
	.tab {
		position: fixed;
		bottom: 0;
		z-index: 1;
	}
</style>
