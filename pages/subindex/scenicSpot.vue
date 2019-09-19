<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns></returns>
		<view class="top_img">
			<bw-swiper :swiperList="swiperList" :swiperType='swiperType' :w_h='w_h' style="width:100%"></bw-swiper>
			<!-- <swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration"
			 :circular='circular'>
				<swiper-item v-for="(item,index) in img_list" :key='index'>
					<image class="" :src="item.images_url" mode="widthFix"></image>
				</swiper-item>
			</swiper> -->
		</view>
		<view class="table">
			<view class="tab_list">
				<image src="../../static/image/Ticketsspots.png" mode=""></image>
				<view class="">
					景点门票
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/must.png" mode=""></image>
				<view class="">
					广州必游
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/plants.png" mode=""></image>
				<view class="">
					动植物园
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/natura.png" mode=""></image>
				<view class="">
					自然风光
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/Nighttour.png" mode=""></image>
				<view class="">
					珠江夜游
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/month.png" mode=""></image>
				<view class="">
					长隆亲子月
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/One_daytour.png" mode=""></image>
				<view class="">
					一日游
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/resort.png" mode=""></image>
				<view class="">
					长隆度假区
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/pagoda.png" mode=""></image>
				<view class="">
					广州塔
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/sln.png" mode=""></image>
				<view class="">
					广州融创
				</view>
			</view>
		</view>
		<view class="exhibition">
			<view class="left">
				<image src="../../static/image/paradise.png" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="">
					<image src="../../static/image/cliff.png" mode="scaleToFill"></image>
				</view>
				<view class="">
					<image src="../../static/image/innovation.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="guess_bottom">
				<view class="">
					景点推荐
				</view>
				<view class="">
					一日游
				</view>
			</view>
			<view class="spot_box">
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="gu_top">
				猜你喜欢
			</view>
			
			<view class="spot_box">
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
				<view class="guess_spot">
					<view class="spot_left">
						<image src="../../static/image/hangzhou1.png" mode=""></image>
						<text>多地出发</text>
					</view>
					<view class="spot_right">
						<view class="spot_one">
							北京故宫
						</view>
						<view class="spot_two">
							<text>5.0分</text>
							<text>300条点评</text>
						</view>
						<view class="spot_three">
							北京 东城区景山前街4号
						</view>
						<view class="spot_four">
							<view class="">
								<text>明日可用</text>
								<text>湖畔</text>
							</view>
							<view class="">
								<text>￥100</text>起
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tab">
			<view class="tab_list">
				<image src="../../static/image/lately.png" mode="widthFix"></image>
				<view class="">
					最近浏览
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/collection1.png" mode="widthFix"></image>
				<view class="">
					我的收藏
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/order.png" mode="widthFix"></image>
				<view class="">
					订单
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/coupon1.png" mode="widthFix"></image>
				<view class="">
					代金券
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bwSwiper from '../../components/wxcomponents/bw-swiper/bw-swiper.vue'
	import returns from '../common/re_search.vue'
	export default {
		components: {
			bwSwiper,
			returns
		},
		data() {
			return {
				//轮播
				swiperList: [{}],
				w_h: 2.5, //宽高比
				swiperType: true,
				//轮播
				show:'',
				
			}
		},
		methods: {
			returns() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onShow() {
			this.service.entire(this, 'get', this.service.api_root.index.banner, {}, function(self, res) {

				self.img_list = res.data
				let datas = []
				res.data.forEach((value, index) => {
					console.log(value)
					let data = {
						img: value.images_url
					}
					datas.push(data)
				})
				self.swiperList = datas
			})
		},

	}
</script>

<style scoped>
	.content {
		padding-bottom: 132rpx;
	}

	.top_img {
		width: 100%;
		/* height: 400rpx; */
		position: relative;
		z-index: 1;
		margin: 15rpx 0;
	}

	.swiper {
		width: 100%;
		/* height: 400rpx; */
	}

	.swiper image {
		width: 100%;
		height: 300rpx;
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
		font-size: 24rpx;
		color: #333;
	}

	.table .tab_list image {
		width: 56rpx;
		height: 56rpx;
	}

	.exhibition {
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

	.exhibition .right image {
		height: 100%;
		width: 100%;
	}

	.guess {
		
	}

	.guess .gu_top {
		font-weight: bold;
		font-size: 40rpx;
		margin-top: 72rpx;
		margin-bottom: 26rpx;
		padding: 0 20rpx;
	}
	.guess .guess_bottom{
		display: flex;
		justify-content: flex-start;
		font-size: 24rpx;
		margin-bottom: 32rpx;
		padding: 0 20rpx;
	}
	.guess .guess_bottom view{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		padding: 0 20rpx;
		border-radius: 60rpx;
	}
	.guess .guess_bottom view:nth-of-type(1){
		color: #333;
		background: #F1F1F1;
		margin-right: 20rpx;
	}
	.guess .guess_bottom view:nth-of-type(2){
		background:linear-gradient(90deg,rgba(100,197,249,1),rgba(62,143,243,1));
		color: #fff;
	}
	.guess .spot_box{
		padding: 0 20rpx;
		border-bottom: 4rpx solid #F5F5F5;
	}
	.guess .guess_spot{
		display: flex;
		margin-bottom: 42rpx;
	}
	.guess .guess_spot:last-child{
		margin-bottom: 0rpx;
		padding-bottom: 28rpx;
	}
	.guess .guess_spot .spot_left{
		position: relative;
		margin-right: 24rpx;
	}
	.guess .guess_spot .spot_left image{
		height: 168rpx;
		width: 230rpx;
	}
	.guess .guess_spot .spot_left text{
		position: absolute;
		top: 10rpx;
		left: 5rpx;
		font-size: 20rpx;
		background: #000;
		color: #fff;
		display: inline-block;
		height: 32rpx;
		padding: 0 10rpx;
		border-radius: 32rpx;
		text-align: center;
		line-height: 32rpx;
	}
	.guess .guess_spot .spot_right{
		flex-grow: 2;
	}
	.guess .guess_spot .spot_right .spot_one{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 5rpx;
	}
	.guess .guess_spot .spot_right .spot_two{
		color: #999999;
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_two text:first-child{
		font-size: 28rpx;
		color: #1D9DFF;
		font-weight: bold;
		margin-right: 16rpx;
	}
	.guess .guess_spot .spot_right .spot_three{
		color: #999999;
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_four{
		display: flex;
		justify-content: space-between;
		color: #999999;
		align-items: center;
		
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(1) text{
		font-size: 20rpx;
		color: #EC808D;
		border: 1rpx solid #EC808D;
		padding: 6rpx 8rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(1) text:nth-of-type(2){
		color: #00D3B3;
		border: 1rpx solid #00D3B3;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(2){
		font-size: 24rpx;
	}
	.guess .guess_spot .spot_right .spot_four view:nth-of-type(2) text{
		color: #FF431D;
		font-size: 36rpx;
		font-weight: bold;
		margin-right: 10rpx;
	}
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		height: 132rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		color: #333;
		padding: 0 44rpx;
	}
	.tab .tab_list{
		text-align: center;
	}
	.tab image{
		height: 78rpx;
		width: 78rpx;
	}
</style>
