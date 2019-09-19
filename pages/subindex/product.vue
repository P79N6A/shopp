<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="return">
			<image class="return_img" src="../../static/image/return.png" mode="" @click="returns()"></image>
			<view class="search">
				<text>广州</text>
				<image class="dorp" src="../../static/image/dorp.png" mode=""></image>
				<image class="search1" src="../../static/image/search1.png" mode=""></image>
				<input type="text" value="" placeholder="武汉周黑鸭"/>
			</view>
		</view>
		<view class="table">
			<view class="tab_list" @click="jump('../threeLayers/classification')">
				<image src="../../static/image/product_list.png" mode=""></image>
				<view class="">
					产品列表
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/limited.png" mode=""></image>
				<view class="">
					限时抢购
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/team.png" mode=""></image>
				<view class="">
					拼团
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/global.png" mode=""></image>
				<view class="">
					全球特产
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/expenses.png" mode=""></image>
				<view class="">
					日用
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/vegetables.png" mode=""></image>
				<view class="">
					蔬果
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/nut.png" mode=""></image>
				<view class="">
					坚果
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/rice.png" mode=""></image>
				<view class="">
					大米
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/snacks.png" mode=""></image>
				<view class="">
					小零食
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/dry.png" mode=""></image>
				<view class="">
					干果
				</view>
			</view>
		</view>
		<view class="exhibition">
			<view class="left">
				<image src="../../static/image/green.png" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="">
					<image src="../../static/image/nuts.png" mode="scaleToFill"></image>
				</view>
				<view class="">
					<image src="../../static/image/snackss.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="product">
				<view class="pr_list">
					<image src="../../static/image/product1.png" mode="aspectFill" @click="jump('./product_detailed')"></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
						<text class="tips">特色产品</text>
						
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
						<text class="info"   @click="jump('./shop')">进入店铺</text>
					</view>
				</view>
				<view class="pr_list">
					<image src="../../static/image/product2.png" mode="aspectFill"  @click="jump('./product_detailed')"></image>
					<view class="ticket">
						北京-文创产品
					</view>
					<view class="address">
						故宫山水画团扇博物馆文创产品创意扇子
						<text class="tips">文创产品</text>
						
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
						<text class="info"   @click="jump('./shop')">进入店铺</text>
					</view>
				</view>
				<view class="pr_list">
					<image src="../../static/image/product3.png" mode="aspectFill"  @click="jump('./product_detailed')"></image>
					<view class="ticket">
						武汉-特色产品
					</view>
					<view class="address">
						鸭脖武汉特产鸭肉食品
						<text class="tips">特色产品</text>
						
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
						<text class="info"  @click="jump('./shop')">进入店铺</text>
					</view>
				</view>
			</view>
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
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
		
	}
</script>

<style scoped>
	.content{
		
	}
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
	.return .search input{
		height: 140rpx;
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
	.table {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	.table .tab_list{
		width: 20%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}
	.table .tab_list image{
		width: 56rpx;
		height: 56rpx;
	}
	.exhibition{
		padding: 0 20rpx;
		display: flex;
		width: 100%;
		justify-content: space-between;
		box-sizing: border-box;
		margin-top: 30rpx;
	}
	
	.exhibition .left {
		width: 49%;
		height: 332rpx;
	}
	
	.exhibition .left image {
		height: 100%;
		width: 100%;
	}
	
	.exhibition .right {
		width: 49%;
		display: flex;
		justify-content: space-between;
		flex-direction: column-reverse;
	}
	
	.exhibition .right view {
		height: 156rpx;
		width: 100%;
	}
	.exhibition .right image{
		height: 100%;
		width: 100%;
	}
	.guess{
		padding: 0 20rpx;
	}
	.guess .gu_top{
		font-weight: bold;
		font-size: 40rpx;
		margin-top: 72rpx;
		margin-bottom: 26rpx;
		
	}
	.guess .product .pr_list{
		margin-bottom: 30rpx;
	}
	.guess  .ticket{
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.guess  .address{
		color: #333;
		font-size: 30rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.guess .tips{
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	.guess .product .bottom .price{
		color: #FF431D;
		margin-right: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.guess .product .bottom .data{
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.guess .product image{
		width: 100%;
		height: 300rpx;
	}
	.guess .product .info{
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}
</style>
