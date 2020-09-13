<template>
	<div class="tabbar">
		<van-tabbar :fixed="true" :safe-area-inset-bottom="true" :placeholder="true" :route="true">
			<van-tabbar-item icon="home-o"><router-link to="/find">发现</router-link></van-tabbar-item>
			<van-tabbar-item icon="search"><router-link to="/optional/stock">自选</router-link></van-tabbar-item>
			<van-tabbar-item icon="friends-o"><router-link to="/community">社区</router-link></van-tabbar-item>
			<van-tabbar-item icon="setting-o"><router-link to="/asset">资产</router-link></van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script></script>

<style>
.tabbar {
	width: 100%;
	height: 50px;
	color: #000000;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #ffffff;
	border-top: 1px solid #fbfafa;
}
</style>
