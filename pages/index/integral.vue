<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top">
			积分商城
		</view>
		<view class="table">
			<view class="tab_list">
				<image src="../../static/image/index/productList.png" mode="widthFix"></image>
				<view class="">
					产品列表
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/newProducts.png" mode="widthFix"></image>
				<view class="">
					新品推荐
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/popular3.png" mode="widthFix"></image>
				<view class="">
					热门推荐
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/exchange3.png" mode="widthFix"></image>
				<view class="">
					兑好礼
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/trip3.png" mode="widthFix"></image>
				<view class="">
					旅游出行
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/value.png" mode="widthFix"></image>
				<view class="">
					超值兑换
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/case3.png" mode="widthFix"></image>
				<view class="">
					箱包类
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/vehicle.png" mode="widthFix"></image>
				<view class="">
					车品类
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/gift.png" mode="widthFix"></image>
				<view class="">
					伴手礼
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/index/dailyExpenses.png" mode="widthFix"></image>
				<view class="">
					日用类
				</view>
			</view>
		</view>
		
		<view class="guess">
			<view class="guess_test">
				猜你喜欢
			</view>
			<view class="guess_box">
				<view class="box_list">
					<image src="../../static/image/index/towel.png" mode=""></image>
					<view class="list_one">
						洁丽雅毛巾2条装 纯棉洗脸
						洗澡家用成人男女帕
					</view>
					<view class="list_two">
						1000积分兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
				<view class="box_list">
					<image src="../../static/image/index/umbrella.png" mode=""></image>
					<view class="list_one">
						心选超轻削光紗弯柄三折晴
						雨伞遮阳伞
					</view>
					<view class="list_two">
						1000积分+50版通兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
				<view class="box_list">
					<image src="../../static/image/index/towel.png" mode=""></image>
					<view class="list_one">
						洁丽雅毛巾2条装 纯棉洗脸
						洗澡家用成人男女帕
					</view>
					<view class="list_two">
						1000积分兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
				<view class="box_list">
					<image src="../../static/image/index/umbrella.png" mode=""></image>
					<view class="list_one">
						心选超轻削光紗弯柄三折晴
						雨伞遮阳伞
					</view>
					<view class="list_two">
						1000积分+50版通兑换
					</view>
					<view class="list_three">
						￥100
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.top{
		height: 105rpx;
		line-height: 105rpx;
		text-align: center;
		font-weight: bold;
		font-size: 40rpx;
		background: #fff;
		box-shadow:0px 1rpx 20rpx 0px rgba(0, 0, 0, 0.1);
	}
	.table {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	
	.table .tab_list {
		width: 20%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}
	
	.table .tab_list image {
		width: 80rpx;
		height: 80rpx;
	}
	.guess{
		
		padding: 20rpx 20rpx;
	}	
	.guess .guess_test{
		font-size: 40rpx;
		font-weight: bold;
	}
	.guess .guess_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.guess .guess_box .box_list{
		width: 49%;
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}
	.guess .guess_box .box_list .list_one{
		font-weight: bold;
		clolr: #333;
		margin-bottom: 20rpx;
	}
		
	.guess .guess_box .box_list .list_two{
		color: #FF431D;
		
	}
	.guess .guess_box .box_list .list_three{
		color: #999999;
		font-size: 24rpx;
		text-decoration:line-through;
	}
	.guess .guess_box image{
		width: 100%;
		height: 224rpx;
		margin-bottom: 20rpx;
	}
</style>
