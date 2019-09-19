<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
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
						拼团价
						<text class="price_one">￥{{item.price}}</text>
						<text class="price_two">￥{{item.groupsprice}}</text>
					</view>
				</view>
			</view>
			<view class="tab_bottom">
				<view class="bo_one">
					<image src="../../static/image/secondary/team.png" mode="widthFix"></image>
					<text>{{item.groupnum}}人成团</text>
				</view>
				<view class="bo_two">
					立即参团
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
				title:'拼团',
				data:''
			}
		},
		methods:{
			
			
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
		margin-bottom: 24rpx;
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
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #666;
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
