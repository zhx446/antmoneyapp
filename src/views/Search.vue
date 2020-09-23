<template>
	<div class="search">
		<van-search v-model="value" shape="round" show-action placeholder="股票/基金/问答/资讯/用户">
			<template #left>
				<van-icon name="arrow-left" color="#5382C8" size="20" class="nav-icon" @click="toFind"/>
			</template>
			<template #action>
				<div>搜索</div>
			</template>
		</van-search>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		toFind() {
			this.$router.go(-1);
		}
	}
};
</script>

<style>
.nav-icon {
	padding-right: 5px;
}
</style>
