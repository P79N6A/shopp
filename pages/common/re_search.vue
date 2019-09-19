<template>
	<view class="return">
		<image class="return_img" src="../../static/image/return.png" mode="" @click="returns()"></image>
		<view class="search">
			<text>广州</text>
			<image class="dorp" src="../../static/image/dorp.png" mode=""></image>
			<image class="search1" src="../../static/image/search1.png" mode=""></image>
			<input type="text" value="" placeholder="武汉周黑鸭"/>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
		
	}
</script>

<style scoped>
	.uni-input-placeholder{
		color: #cccccc;
	}
	.return{
		display: flex;
		align-items: center;
		height: 105rpx;
		box-shadow: 0px 0px 6px #CCCCCC;
	}
	.return .return_img{
		width: 48rpx;
		height: 48rpx;
		margin-left: 20rpx;
	}
	.return .search{
		flex-grow: 2;
		display: flex;
		align-items: center;
		height: 75rpx;
		background: #F1F1F1;
		margin: 0 20rpx;
		border-radius: 34rpx;
	}
	.return .search text{
		margin: 0 20rpx;
		color: #666666;
		font-size: 32rpx;
	}
	.return .search .dorp{
		width: 12rpx;
		height: 12rpx;
		margin-right: 20rpx;
	}
	.return .search .search1{
		width: 38rpx;
		height: 38rpx;
		margin-right: 20rpx;
	}
	.return .search input{
		height: 140rpx;
		font-size: 30rpx;
	}
</style>
