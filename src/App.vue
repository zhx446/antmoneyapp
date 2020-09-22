<template>
	<div id="app">
		<div class="tab">
		</div>
		<router-view />
	</div>
</template>
<script></script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000;
	}

	.tab {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 1;
	}
</style>
