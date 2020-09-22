<template>
	<div class="tabbar">
		<router-link to="/find" class="icon-tabbar" active-class="active">
			<i class="iconfont icon-faxian"></i>
			<div>发现</div>
		</router-link>
		<router-link to="/optional" class="icon-tabbar">
			<i class="iconfont icon-zixuan"></i>
			<div>自选</div>
		</router-link>
		<router-link to="/community" class="icon-tabbar">
			<i class="iconfont icon-huabanfuben"></i>
			<div>社区</div>
		</router-link>
		<router-link to="/asset" class="icon-tabbar">
			<i class="iconfont icon-zichan"></i>
			<div>资产</div>
		</router-link>
	</div>
</template>

<script></script>

<style>
.tabbar {
	width: 100%;
	height: 50px;
	color: #000000;
	display: flex;
	position: fixed;
	bottom: 0;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-end;
	background-color: #ffffff;
	border-top: 1px solid #fbfafa;
	font-size: 12px;
	padding-bottom: 5px;
	z-index: 1;
}

.icon-tabbar {
	line-height: 16px;
	color: #A8AEBC;
}

.active {
	color: #006EFE;
}
</style>
