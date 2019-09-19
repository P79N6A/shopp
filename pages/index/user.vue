<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_test">
				<image src="../../static/image/set.png" mode="widthFix" @click="jump('../subuser/set')"></image>
				<image src="../../static/image/news.png" mode="widthFix" @click="jump('../subuser/notice')"></image>
				<image src="../../static/image/feedback.png" mode="widthFix"  @click="jump('../subuser/feedback')"></image>
			</view>
			<view class="semicircle" :style="style">
				
			</view>
		</view>
		<view class="user_top">
			<view class="user">
				<view class="user_left">
					<image src="../../static/image/user1.png" mode=""></image>
					<text>牛哄哄</text>
				</view>
				<view class="user_right">
					<image src="../../static/image/id.png" mode="widthFix"></image>
					<text>实名认证</text>
					<image src="../../static/image/go1.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="user_tab">
				<view class="tab_list" @click="jump('../subuser/member')">
					<image src="../../static/image/member.png" mode="widthFix"></image>
					<view class="">
						会员中心
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/register')">
					<image src="../../static/image/signIn.png" mode="widthFix"></image>
					<view class="">
						签到
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/integral1.png" mode="widthFix"></image>
					<view class="">
						积分
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/coupon')">
					<image src="../../static/image/oupon1.png" mode="widthFix"></image>
					<view class="">
						优惠券
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="user_middle">
			<view class="middle_top">
				<view class="">
					订单
				</view>
				<view>
					<text>查看更多</text>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="middle_tab">
				<view class="tab_top">
					门票玩乐订单
				</view>
				<view class="tab_box">
					<view class="tab_list">
						<image src="../../static/image/behalf.png" mode="widthFix"></image>
						<view class="">
							代付款
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/use.png" mode="widthFix"></image>
						<view class="">
							待使用
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/comment.png" mode="widthFix"></image>
						<view class="">
							待评论
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/refund.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
				</view>
				<view class="tab_top">
					商城订单
				</view>
				<view class="tab_box">
					<view class="tab_list"  @click="jump('../subuser/mall_order')">
						<image src="../../static/image/behalf.png" mode="widthFix"></image>
						<view class="">
							代付款
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order')">
						<image src="../../static/image/use.png" mode="widthFix"></image>
						<view class="">
							待使用
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order')">
						<image src="../../static/image/comment.png" mode="widthFix"></image>
						<view class="">
							待评论
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/mall_order')">
						<image src="../../static/image/refund.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		<view class="list_bottom">
			<view class="tab_box">
				<view class="tab_list">
					<image src="../../static/image/wallet.png" mode="widthFix"></image>
					<view class="">
						钱包
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/distribution.png" mode="widthFix"></image>
					<view class="">
						分销中心
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/commission.png" mode="widthFix"></image>
					<view class="">
						佣金
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/editionPass.png" mode="widthFix"></image>
					<view class="">
						版通
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/realName.png" mode="widthFix"></image>
					<view class="">
						实名认证
					</view>
				</view>
				<view class="tab_list">
					<image src="../../static/image/collection2.png" mode="widthFix"></image>
					<view class="">
						收藏
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/address')">
					<image src="../../static/image/address.png" mode="widthFix"></image>
					<view class="">
						收货地址
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
				style:''
				
			}
		},
		methods:{
			
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad() {
			let that = this
			// uni.getSystemInfo({
			//     success: function (res) {
			// 		that.style = {
			// 			height:res.windowWidth+'px',
			// 			borderRadius:'0px 0px '+res.windowWidth/2+'px '+res.windowWidth/2+'px',
			// 			position:'absolute',
			// 			width: '100%',
			// 			top:'-'+(res.windowWidth/2-80)+'px'
			// 		}
			//     }
			// });
		}
	}
</script>

<style scoped>
	.content{
		padding-bottom: 20rpx;
	}
	.top{
				
	}
	.top .top_test{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		z-index: 99;
		/* position: absolute; */
		/* width: 100%; */
		background: #1D9DFF;
	}
	.top .top_test image{
		height: 48rpx;
		width: 48rpx;
	}
	.top .top_test image:nth-of-type(2){
		margin: 0 30rpx;
	}
	.semicircle{
		
	}
	.user_top{
		padding: 40rpx 0;
		width: 96%;
		position: relative;
		top: -20rpx;
		left: 2%;
		background: #fff;
		border-radius: 20rpx;
		box-shadow:0px 8rpx 68rpx 0px rgba(0, 0, 0, 0.1);
	}
	.user_top .user{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 34rpx;
		margin-bottom: 28rpx;
	}
	.user_top .user .user_left{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
		font-size: 36rpx;
	}
	.user_top .user .user_left image{
		height: 100rpx;
		width: 100rpx;
	}
	.user_top .user .user_right{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 190rpx;
		color: #fff;
		font-size: 24rpx;
		height: 56rpx;
		background:linear-gradient(184deg,rgba(255,185,69,1),rgba(255,132,2,1));
		border-radius:56px 0px 0px 56px;
	}
	.user_top .user .user_right image{
		height: 24rpx;
		width: 24rpx;
	}
	.user_top .user .user_right text{
		margin: 0 8rpx;
	}
	.user_top  .user_tab{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		color: #666;
		padding: 0 34rpx;
		text-align: center;
	}
	.user_top  .user_tab .tab_list{
		width: 25%;
	}
	.user_top  .user_tab image{
		height: 60rpx;
		width: 60rpx;
	}
	.user_middle{
		margin-top: 40rpx;
		padding:0 60rpx 28rpx 60rpx;
		border-bottom: 1rpx solid #F2F2F2;
	}
	.user_middle .middle_top{
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 24rpx;
		
	}
	
	.user_middle .middle_top view:last-child{
		display: flex;
		align-items: center;
	}
	.user_middle .middle_top text{
		font-size: 22rpx;
		color: #999999;
		margin-right: 24rpx;
	}
	.user_middle .middle_top image{
		width: 28rpx;
		height: 28rpx;
	}
	.user_middle .middle_tab{
	}
	.user_middle .middle_tab .tab_top{
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 26rpx;
	}
	 .tab_box{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		text-align: center;
		
		font-size: 27rpx;
		
	}
	.user_middle .middle_tab .tab_box:nth-of-type(2){
		margin-bottom: 42rpx;
	}
	 .tab_box image{
		height: 54rpx;
		width: 54rpx;
		margin-bottom: 13rpx;
	}
	 .tab_box .tab_list{
		width: 25%;
	}
	
	.list_bottom{
		margin-top: 50rpx;
		padding: 0 60rpx;
	}
	.list_bottom  .tab_list{
		margin-bottom: 40rpx;
	}
	button{
		background: #1D9DFF;
		margin-top: 60rpx;
	}
</style>
