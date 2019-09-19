<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="seckill">
			<view class="se_left" :class="{se_show:show == 0}"  @click="show = 0">
				<text class="se_time" :class="{se_time_show:show == 0}">8:44</text>
				<text>抢购中</text>
			</view>
			<view class="se_right" :class="{se_show:show == 1}" @click="show = 1">
				<text class="se_time" :class="{se_time_show:show == 1}">9:00</text>
				<text>待开抢</text>
			</view>
		</view>
		<view class="se_countdown">
			<view class="co_top">
				抢购中，先下单先得哦！
			</view>
			<view class="co_bottom">
				距结束<text>3</text>:<text>15</text>:<text>60</text>
			</view>
		</view>
		<view class="tab" v-for="(item,index) in data" :key='item.id'>
			<view class="tab_top">
				<image :src="item.thumb" mode="aspectFill"></image>
				<view class="tab_right">
					<view class="test_one">
						{{item.category_name}}
					</view>
					<view class="test_two">
						{{item.title}}
					</view>
					<view class="price">
						
						<text class="price_one">￥{{item.price}}</text>
						<text class="price_two">￥{{item.groupsprice}}</text>
					</view>
				</view>
			</view>
			<view class="tab_bottom">
				<view class="bo_one">
					<view class="">
						已售50%
					</view>
					<view class="prog">
						<progress percent="50" active stroke-width="3" />
					</view>
				</view>
				<view class="bo_two" @click="jump('./seckill_detailed')">
					去抢购
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
				title:'限时抢购',
				data:'',
				show:0
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
			
		},
		
		onShow() {
			this.service.entire(this,'get',this.service.api_root.subindex.grou_lists,{
				page:1
			},function(self,res){
				console.log(res)
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		width: 100%;
		background: #F4F4F4;
	}
	
	.content{
		
		/* height: 100%; */
		width: 100%;
	}
	.top{
		
	}
	.seckill{
		background: #fff;
		/* margin-bottom: 24rpx; */
		font-size: 32rpx;
		color: #666666;
		display: flex;
		justify-content: space-between;
		box-shadow:0px 1rpx 20rpx 0px rgba(0, 0, 0, 0.1);
	}
	.seckill .se_left,.se_right{
		width: 50%;
		text-align: center;
		border-bottom: 4rpx solid #fff;
		padding-bottom: 20rpx;
	}
	.seckill .se_time{
		display: inline-block;
		height: 56rpx;
		line-height: 56rpx;
		border-radius: 56rpx;
		width: 144rpx;
		background: #EEEEEE;
		margin-right: 20rpx;
	}
	.se_show{
		border-bottom-color: #1D9DFF !important;
		color: #1D9DFF;
	}
	.se_time_show{
		background:linear-gradient(90deg,rgba(100,197,249,1),rgba(62,143,243,1)) !important;
		color: #fff;
	}
	.se_countdown{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		margin: 30rpx 22rpx;
	}
	.se_countdown text{
		display: inline-block;
		font-size: 28rpx;
		color: #fff;
		background: #333;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 5rpx;
		width: 40rpx;
		margin: 0 4rpx;
	}
	.se_countdown text:nth-of-type(1){
		margin-left: 10rpx;
	}
	.tab{
		background: #fff;
		margin: 0 20rpx 16rpx 20rpx;
		border-radius:10rpx;
		height: 280rpx;
	}
	
	.tab .tab_top{
		display: flex;
		padding: 20rpx 0;
		margin: 0 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.tab .tab_top .tab_right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 26rpx;
	}
	.tab .tab_top .test_one{
		color: #666666;
		font-size: 28rpx;
		
	}
	.tab .tab_top .test_two{
		color: #333;
		font-size: 30rpx;
	}
	.tab .tab_top .price{
		color: #FF431D;
		font-size: 28rpx;
	}
	.tab .tab_top .price .price_one{
		font-size: 36rpx;
		font-weight: bold;
	}
	.tab .tab_top .price .price_two{
		text-decoration:line-through;
		font-size: 28rpx;
		color: #999;
	}
	.tab .tab_top image{
		height: 142rpx;
		width: 220rpx;
	}
	.tab .tab_bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 92rpx;
		padding: 0 20rpx;
	}
	.tab .tab_bottom .bo_one{
		font-size: 28rpx;
		color: #666666;
		display: flex;
		align-items: center;
	}
	.tab .tab_bottom .bo_one .prog{
		width: 226rpx;
		margin-left: 40rpx;
	}
	.tab .tab_bottom .bo_two{
		color: #fff;
		background: #1D9DFF;
		width: 170rpx;
		height: 66rpx;
		line-height: 66rpx;
		border-radius: 66rpx;
		font-size: 28rpx;
		text-align: center;
	}
	.tab .tab_bottom image{
		height: 34rpx;
		width: 34rpx;
		margin-right: 20rpx;
	}
	
</style>
