<template>
	<div class="optional-fund">
		<div class="fund-top-moduel">
			<div class="fund-top">
				<div class="fund-sse">
					<div>上证指数</div>
					<div>3225.50</div>
				</div>
				<div class="fund-as">
					<div>深证指数</div>
					<div>12747.09</div>
				</div>
				<van-icon name="arrow-down" color="#E1E2E2"/>
			</div>
		</div>
		<div class="fund-content">
			
		</div>
	</div>
</template>

<script>
</script>

<style>
	.optional-fund {
		margin-top: 46px;
	}
	
	.fund-top-moduel {
		border-bottom: 8px solid #F5F5F6;
	}

	.fund-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0px 10px;
		padding: 20px 0;
		font-size: 16px;
	}
	
	.fund-sse div:last-child {
		color: #35B89A;
		font-weight: bold;
		margin-top: 5px;
	}
	
	.fund-as div:last-child {
		color: #F75B38;
		font-weight: bold;
		margin-top: 5px;
	}
</style>
