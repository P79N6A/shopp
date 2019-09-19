<template>
	<view class="top">
		<image src="../../static/image/return.png" mode="widthFix" @click="returns()"></image>
		<text>{{titles}}</text>
		<text></text>
	</view>
</template>

<script>
	export default{
		props:['titles'],
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
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 36rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 40rpx;
		display: inline-block;
	}
</style>
