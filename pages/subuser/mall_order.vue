<template>
	<view class="">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="../../static/image/return.png" mode="widthFix" @click="returns()"></image>
			<text>商城订单</text>
			<text></text>
		</view>
		<view class="mall_box">
			<view class="box_top">
				<view class="top_list" :class="{show:show == 0}" @click="show = 0">
					全部
				</view>
				<view class="top_list" :class="{show:show == 1}" @click="show = 1">
					待付款
				</view>
				<view class="top_list" :class="{show:show == 2}" @click="show = 2">
					待收货
				</view>
				<view class="top_list" :class="{show:show == 3}" @click="show = 3">
					待评论
				</view>
				<view class="top_list" :class="{show:show == 4}" @click="show = 4">
					退款
				</view>
			</view>
			<view class="box_bottom">
				<view class="bottom_list" v-for="(item,index) in data" :key='item.id'>
					<view class="list_top">
						<view class="top1">
							<image src="../../static/image/secondary/shop.png" mode="widthFix"></image>
							<text>店铺名字</text>
							<image src="../../static/image/go.png" mode="widthFix"></image>
						</view>
						
						<view class="top2 refund" v-if="item.status == 7">
							{{item.status_name}}
						</view>
						<view class="top2 obligation" v-if="item.status == 1">
							{{item.status_name}}
						</view>
						<view class="top2 stayGoods" v-if="item.status == 2">
							{{item.status_name}}
						</view>
						<view class="top2 stayComment" v-if="item.status == 8">
							{{item.status_name}}
						</view>
					</view>
					
					<view class="list_middle" v-for="(items,indexs) in item.items" :key='indexs'>
						<image :src="items.images" mode="aspectFill"></image>
						<view class="middle1">
							<view class="">{{items.title}}</view>
							<view>套装</view>
						</view>
						<view class="middle2">x1</view>
					</view>
					<view class="list_bottom">
						<!-- <view class="bottom1">
							支付方式：在线支付
						</view> -->
						<view class="bottom2">
							订单金额<text>￥{{item.total_price}}</text>
						</view>
						<view class="bottom3">
							详情
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'商城订单',
				show: 0,
				data:''
			}
		},
		methods:{
			returns(){
				uni.switchTab({
				    url: '/pages/index/user'
				});
			}
		},
		onShow() {
			this.service.entire(this,'post',this.service.api_root.subuser.order_Index,{
				token:uni.getStorageSync('token'),
				page:1
			},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped>
	.mall_box{
		font-size: 30rpx;
		
	}
	.refund{ /* 退款 */
		color: #666666;
	}
	.obligation{  /* 待支付 */
		color: #D9011C;
	}
	.stayGoods{/* 收货 */
		color: #02A7F0;
	}
	.stayComment{ /* 待评价 */
		color: #F09B22;
	}
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
	.mall_box .box_top{
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		margin: 28rpx 0 40rpx 0;
	}
	.mall_box .box_top .top_list{
		padding: 0 20rpx;
		height: 44rpx;
		line-height: 44rpx;
		border-radius: 44rpx;
	}
	.show{
		color: #fff;
		background: #1D9DFF;
	}
	.mall_box .box_bottom{
		background: #fff;
		
	}
	.mall_box .box_bottom .bottom_list{
		padding: 20rpx;
		background: #fff;
		border-radius:20rpx;
		margin: 0 20rpx 32rpx 20rpx;
		box-shadow:0px 0rpx 20rpx 0px rgba(0, 0, 0, 0.1);
	}
	.mall_box .box_bottom .bottom_list .list_top{
		display: flex;
		justify-content: space-between;
		
	}
	.mall_box .box_bottom .bottom_list .list_top .top1{
		display: flex;
		align-items: center;
	}
	.mall_box .box_bottom .bottom_list .list_top .top1 text{
		margin: 0 20rpx;
		font-weight: 400;
		color: #999999;
	}
	.mall_box .box_bottom .bottom_list .list_top .top1 image{
		height: 30rpx;
		width: 30rpx;
	}
	.mall_box .box_bottom .bottom_list .list_top .top2{
		/* color: #999999; */
		font-size: 32rpx;
		font-weight: bold;
	}
	.mall_box .box_bottom .bottom_list .list_middle{
		display: flex;
		align-items: center;
		margin-top: 30rpx;
	}
	.mall_box .box_bottom .bottom_list .list_middle .middle1{
		font-size: 24rpx;
		color: #999999;
	}
	.mall_box .box_bottom .bottom_list .list_middle .middle1 view:nth-of-type(1){
		font-size: 28rpx;
		font-weight: bold;
	}
	.mall_box .box_bottom .bottom_list .list_middle .middle2{
		font-size: 26rpx;
		color: #999999;
		flex-grow: 2;
		text-align: right;
	}
	.mall_box .box_bottom .bottom_list .list_middle image{
		height: 122rpx;
		width: 122rpx;
		margin-right: 20rpx;
	}
	.mall_box .box_bottom  .bottom_list .list_bottom{
		text-align: right;
		font-size: 24rpx;
		color: #999999;
	}
	.mall_box .box_bottom  .bottom_list .list_bottom .bottom2{
		margin: 10rpx 0;
	}
	.mall_box .box_bottom  .bottom_list .list_bottom .bottom2 text{
		font-weight: bold;
		margin-left: 10rpx;
	}
	.mall_box .box_bottom  .bottom_list .list_bottom .bottom3{
		display: inline-block;
		width: 154rpx;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 52rpx;
		background: #999999;
		color: #fff;
		text-align: center;
	}
</style>
