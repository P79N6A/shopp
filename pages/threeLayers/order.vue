<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="top">
			<view class="name">
				<view class="info">
					<text>收货人：{{address.name}}</text>
					<text>{{address.tel}}</text>
				</view>
				<view class="address">
					{{address.province_name}}{{address.city_name}}{{address.county_name}}{{address.address}}
				</view>
			</view>
			<view class="more">
				<image src="../../static/image/threeLayers/right.png" mode="widthFix"></image>
			</view>
			<view class="bg">
				<image src="../../static/image/threeLayers/void.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="commodity" v-for="(item,index) in shopp" :key='item.id'>
			<view class="left">
				<image :src="item.images" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
				<view class="button">
					<view>规格：{{item.inventory_unit}}</view>
				</view>
				<view class="price">
					<view class="momey">
						￥{{item.price}}
					</view>
					<view class="number">
						数量：x{{item.stock}}
					</view>
				</view>
			</view>
		</view>
		<!-- 空隙 -->
		<!-- <view class="void"></view> -->
		<!-- 空隙 -->
		<view class="message">
			<view class="">
				备注：
			</view>
			<textarea value="" maxlength="50" placeholder="选填 买家留言（50字以内）" />
		</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="recording">
			<view class="list">
				<text>商品小计</text>
				<text>￥{{data.total_price}}</text>
			</view>
			<view class="list">
				<text>运费</text>
				<text>免邮</text>
			</view>
			<view class="list">
				<text>优惠券</text>
				<text>无</text>
			</view>
		</view>
		
		<view class="void"></view>
		<!-- 空隙 -->
		
		<view class="payment">
			<view class="pa_test">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list"  v-for="(item,index) in payment"  :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
					<image v-show="item.choice" class="choice" src="../../static/image/threeLayers/choice.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		
		<view class="pay">
			<view class="paying">
				需支付：<text>￥{{data.actual_price}}</text>
			</view>
			<view class="btn">
				<button @click="payments()">支付订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data() {
			return {
				title:'确认订单',
				data:[],
				address:'',
				shopp:'',
				payment:'',
				indexs:'',
				id:'',
				payment_id:'',
			}
		},
		components:{
			returns
		},
		methods:{
			choice(index){
				for (let s of this.payment) {
					s.choice = false
				}
				this.payment[index].choice = true
				this.payment_id = this.payment[index].id
			},
			payments(){
				// for (let s of this.payment) {
				// 	if()
				// }
				this.service.entire(this,'post',this.service.api_root.threeLayers.Add,{
					token:uni.getStorageSync('token'),
					address_id:this.address.id,
					ids:this.id,
					payment_id:this.payment_id,
					buy_type:'cart'
				},function(self,res){
					self.service.entire(self,'post',self.service.api_root.threeLayers.Pay,{
						token:uni.getStorageSync('token'),
						id:res.data.order.id,
					},function(self,ref){
						uni.showToast({
							icon:'none',
							title:ref.msg
						})
						setTimeout(function(){
							uni.redirectTo({
								url:'../subuser/mall_order'
							})
						},1500)
						console.log(ref)
					})
				})
			}
		},
		onLoad(options) {
			this.id = options.id 
			this.service.entire(this,'post',this.service.api_root.threeLayers.buy_Index,{
				token:uni.getStorageSync('token'),
				ids:options.id,
				buy_type:'cart'
			},function(self,res){
				console.log(res)
				self.data = res.data.base
				self.address = res.data.base.address
				self.shopp = res.data.goods_list
				let data = res.data.payment_list
				for (let s of data) {
					s.choice = false
				}
				self.payment = data
				
				
			})
			
			//
			
			
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		padding-bottom: 150rpx;
	}
	.void{
		width: 100%;
		height: 10rpx;
		background: #F2F2F2;
	}
	.top{
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.name{
		width: 90%;
		margin: 40rpx auto;
		font-size: 30rpx;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
	}
	.info{
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.info text{
	}
	.more{
		width: 28rpx;
		height: 28rpx;
		margin-right: 20rpx;
	}
	.more image{
		width: 28rpx;
		height: 28rpx;
	}
	.address{
		width: 90%;
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #666666;
	}
	.bg{
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.bg image{
		width: 100%;
		height: 10rpx;
	}
	.commodity{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding-top: 30rpx;
		padding-bottom: 24rpx;
		border-bottom: 10rpx solid #F2F2F2;
	}
	.left{
		width: 30%;
		padding: 0 5%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.left image{
		width: 220rpx;
		height: 142rpx;
	}
	.right{
		width: 65%;
		margin-right: 5%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.title{
		font-size: 30rpx;
		color: #333333;
		/* font-weight: bold; */
	}
	.button{
		color: #808080;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.button view{
		font-size: 24rpx;
		display: block;
		padding: 10rpx 8rpx;
		background: #F1F1F1;
	}
	.price{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.momey{
		font-size: 36rpx;
		color: #FF431D;
	}
	.number{
		font-size: 24rpx;
		color: #666666;
	}
	.message{
		width:100%;
		height: 200rpx;
		padding: 20rpx 0;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.message view{
		margin-left: 5%;
		font-size: 32rpx;
		color: #333333;
	}
	.message textarea{
		height: 160rpx;
		margin-top: 6rpx;
	}
	.recording{
		width: 100%;
		font-size: 32rpx;
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.payment{
		font-size: 30rpx;
		padding: 20rpx;
	}
	.payment image{
		height: 52rpx;
		width: 52rpx;
	}
	.payment .pa_test{
		padding: 18rpx 0;
	}
	.payment .pa_box{
		
	}
	.payment .pa_box .box_list{
		display: flex;
		position: relative;
	}
	.payment .pa_box .box_list .list_top{
		display: flex;
		align-items: center;
		font-weight: 500;
		width: 100%;
		height: 100rpx;
	}
	.payment .pa_box .box_list .list_top image{
		margin-right: 38rpx;
	}
	.payment .pa_box .box_list .list_top view{
		flex-grow: 2;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.choice{
		position: absolute;
		right: 20rpx;
		top: 30rpx;
		height: 36rpx !important;
		width: 36rpx !important;
	}
	.list{
		width: 90%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #F2F2F2;
	}
	.pay{
		width: 100%;
		height: 120rpx;
		border-top: 1rpx solid #F1F1F1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #fff;
	}
	.paying{
		margin-left: 5%;
		color: #666666;
		font-size: 32rpx;
	}
	.paying text{
		color: #FF431D;
	}
	.btn{
		width: 224rpx;
		height: 90rpx;
		font-size: 36rpx;
		margin-right: 5%;
	}
	.btn button{
		border-radius: 45rpx;
		background: #1D74FF;
		color: #fff;
	}
</style>
