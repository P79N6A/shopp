<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top_search">
			<view class="navigation">
				<view class="coordinate"  @click="jump('../subindex/index_location')">
					<text>广州</text>
					<image src="../../static/image/down.png" mode="widthFix"></image>
				</view>
				<view class="search">
					<image src="../../static/image/search.png" mode="widthFix"></image>
					<input type="text" value="" placeholder="广州" />
				</view>
				<view class="shopp">
					<image src="../../static/image/shopp.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="top_img">
			<!-- <bw-img-upload style="width:100%" ></bw-img-upload> -->
			<bw-swiper :swiperList="swiperList" :swiperType='swiperType' :w_h='w_h' style="width:100%"></bw-swiper>


			<!-- <swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration"
			 :circular='circular'>
				<swiper-item v-for="(item,index) in img_list" :key='index'>
					<image class="" :src="item.images_url" mode="widthFix"></image> -->
			<!-- <view class="swiper-item" :style="{background:'url('+item.pic+') 0 0 no-repeat',backgroundSize:'100% 100%'}"></view> -->
			<!-- 	</swiper-item>
			</swiper> -->
		</view>
		<view class="table">
			<view class="tab_list" @click="jump('../subindex/scenicSpot')">
				<image src="../../static/image/spot.png" mode=""></image>
				<view class="">
					景点门票
				</view>
			</view>
			<view class="tab_list" @click="jump('../subindex/product')">
				<image src="../../static/image/characteristic.png" mode=""></image>
				<view class="">
					特色产品
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/hotel.png" mode=""></image>
				<view class="">
					酒店
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/ticket.png" mode=""></image>
				<view class="">
					机票
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/special.png" mode=""></image>
				<view class="">
					版通专享
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/product.png" mode=""></image>
				<view class="">
					文创产品
				</view>
			</view>
			<view class="tab_list"  @click="jump('../subindex/seckill')">
				<image src="../../static/image/limited.png" mode=""></image>
				<view class="">
					限时抢购
				</view>
			</view>
			<view class="tab_list">
				<image src="../../static/image/assemble.png" mode=""></image>
				<view class="">
					拼团
				</view>
			</view>
		</view>
		
		<view class="assemble">
			<view class="as_popular">
				<view>
					<text></text>
					拼团
				</view>
				<view class="more" @click="jump('../subindex/assemble')">
					查看更多
				</view>
			</view>
			<view class="as_tab">
				<view class="as_list" @click="jump('../subindex/group_products?id='+item.id)" v-for="(item,index) in group_list" :key='item.id'>
					<view class="as_img">
						<image :src="item.thumb" mode="aspectFill"></image>
						<view class="">
							{{item.groupnum}}人成团
						</view>
					</view>
					<view class="list_test">
						{{item.title}}
					</view>
					<view class="list_price">
						拼团价<text>￥{{item.price}}</text>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="spot_img">
			<view class="as_popular">
				<view>
					<text></text>
					精选景点
				</view>
				
			</view>
			<view class="sp_img">
				<view class="img_top">
					<view class="">
						<image src="../../static/image/spot1.png" mode="scaleToFill"></image>
						<text>福建厦门鼓浪屿</text>
					</view>
					<view class="">
						<image src="../../static/image/spot2.png" mode="scaleToFill"></image>
						<text>迪士尼城堡</text>
					</view>
				</view>
				<view class="img_bottom">
					<view class="">
						<image src="../../static/image/spot3.png" mode="scaleToFill"></image>
						<text>福建永定土楼</text>
					</view>
					<view class="">
						<image src="../../static/image/spot4.png" mode="scaleToFill"></image>
						<text>朱家角文艺情调</text>
					</view>
					<view class="">
						<image src="../../static/image/spot5.png" mode="scaleToFill"></image>
						<text>摩洛哥蓝色之城</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="guess">
			<view class="gu_top">
				猜你喜欢
			</view>
			<view class="gu_popular">
				<view>
					<text></text>
					热门景点
				</view>
				<view class="more">
					查看更多
				</view>
			</view>
			<view class="spot">
				<view class="sp_list" @click="jump('../subindex/scenery_detailed')">
					<image src="../../static/image/hangzhou1.png" mode=""></image>
					<view class="ticket">
						杭州-景点门票
					</view>
					<view class="address">
						西湖夜景
						<text class="tips">湖畔</text>
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list" @click="jump('../subindex/scenery_detailed')">
					<image src="../../static/image/qinhai1.png" mode=""></image>
					<view class="ticket">
						青海-景点门票
					</view>
					<view class="address">
						青海湖
						<text class="tips">湖畔</text>
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list" @click="jump('../subindex/scenery_detailed')">
					<image src="../../static/image/hangzhou2.png" mode=""></image>
					<view class="ticket">
						杭州-景点门票
					</view>
					<view class="address">
						西湖夜景
						<text class="tips">湖畔</text>
					</view>
					<view class="bottom">
						<text class="price">￥100</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
				<view class="sp_list" @click="jump('../subindex/scenery_detailed')">
					<image src="../../static/image/qinhai2.png" mode=""></image>
					<view class="ticket">
						青海-景点门票
					</view>
					<view class="address">
						青海湖
						<text class="tips">湖畔</text>
					</view>
					<view class="bottom">
						<text class="price">￥500</text>
						<text class='data'>300人购买</text>
					</view>
				</view>
			</view>
			<view class="gu_popular">
				<view class="">
					<text></text>
					推荐产品
				</view>
				<view class="more">
					查看更多
				</view>
				
			</view>
			<view class="product">
				<view class="pr_list">
					<image src="../../static/image/product1.png" mode="aspectFill" @click="jump('../subindex/product_detailed')"></image>
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
						<text class="info" @click="jump('../subindex/shop')">进入店铺</text>
					</view>
				</view>
				<view class="pr_list">
					<image src="../../static/image/product2.png" mode="aspectFill" @click="jump('../subindex/product_detailed')"></image>
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
						<text class="info" @click="jump('../subindex/shop')">进入店铺</text>
					</view>
				</view>
				<view class="pr_list">
					<image src="../../static/image/product3.png" mode="aspectFill" @click="jump('../subindex/product_detailed')"></image>
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
						<text class="info" @click="jump('../subindex/shop')">进入店铺</text>
					</view>
				</view>
			</view>
		</view>
		<!-- <Load v-show = 'show'></Load> -->
		
		<view class="eject" v-show="eject_show">
			<view class="eject_test">
				<view class="ej_top">
					版通（AWT）
				</view>
				<view class="ej_bottom">
					1AWT≈7.88CNY
				</view>
			</view>
			<image src="../../static/image/index/close.png" mode="widthFix" @click="eject_show = false"></image>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	// import Load from '../../components/load/load.vue'
	import carousel from '../../static/image/carousel.png'
	import bwSwiper from '../../components/wxcomponents/bw-swiper/bw-swiper.vue'
	export default {
		components: {
			bwSwiper
		},
		data() {
			return {
				//轮播
				swiperList: [{}],
				w_h: 2.5, //宽高比
				swiperType: true,
				//轮播
				show: false,
				group_list:'',
				eject_show:true
			}
		},
		onLoad() {

			if (uni.getStorageSync('token') == '') {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		},
		onShow() {
			service.entire(this, 'get', service.api_root.index.banner, {}, function(self, res) { //轮播图
				self.img_list = res.data
				let datas = []
				res.data.forEach((value, index) => {
					// console.log(value)
					let data = {
						img: value.images_url
					}
					datas.push(data)
				})
				self.swiperList = datas
			})
			
			service.entire(this, 'get', service.api_root.index.Redgroupsgoods, {}, function(self, res) { //轮播图
				console.log(res)
				self.group_list = res.data
			})
			
			
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},


		}
	}
</script>

<style scoped>
	.content {
		padding-bottom: 20rpx;
	}

	.uni-input-placeholder {
		color: #fff;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		left: 0;
		/* z-index: 888; */
		background: #1D9DFF;
		/* position: fixed; */
	}

	.top_search {
		background: #1D9DFF;
	}

	.top_search .navigation {
		height: 105rpx;
		font-size: 34rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.top_search .navigation .coordinate {
		color: #fff;
		margin: 0 22rpx;
		display: flex;
		align-items: center;
	}

	.top_search .navigation .coordinate image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.top_search .navigation .search {
		flex-grow: 2;
		height: 70rpx;
		border-radius: 35rpx;
		display: flex;
		align-items: center;
		color: #fff;
		background: rgba(255, 255, 255, .4);
	}

	.top_search .navigation .search input {
		font-size: 30rpx;
	}

	.top_search .navigation .search image {
		margin: 0 20rpx;
		width: 38rpx;
		height: 38rpx;
	}

	.top_search .navigation .shopp {
		margin: 0 30rpx;
	}

	.top_search .navigation image {
		width: 45rpx;
		height: 45rpx;
	}

	.top_img {
		width: 100%;
		/* height: 300rpx; */
		position: relative;
		z-index: 1;
		margin: 15rpx 0;
	}

	.swiper {
		width: 100%;
		/* height: 200rpx; */
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
		width: 25%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #333;
	}

	.table .tab_list image {
		width: 80rpx;
		height: 80rpx;
	}
	
	
	.assemble {
		padding: 30rpx 20rpx;
		border-bottom: 6rpx solid #F5F5F5;
	}
	.as_popular{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		font-weight: bold;
		margin-bottom: 24rpx;
	}
	.as_popular view{
		display: flex;
		align-items: center;
	}
	.as_popular text{
		display: inline-block;
		width: 12rpx;
		height: 32rpx;
		border-radius: 6rpx;
		background: #FF431D;
		margin-right: 22rpx;
	}
	.assemble .as_tab {
		display: flex;
		justify-content: space-between;
	}
	.assemble .as_tab .as_list{
		width: 30%;
	}
	.assemble .as_tab .as_img{
		position: relative;
	}
	.assemble .as_tab .as_img view{
		background:rgba(0,0,0,1);
		opacity:0.6;
		border-radius:0px 0px 10rpx 10rpx;
		color: #fff;
		position: absolute;
		font-size: 20rpx;
		bottom: 8rpx;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.assemble .as_tab .list_test{
		font-size: 28rpx;
		color: #333333;
		margin: 9rpx 0 11rpx 0;
	}
	.assemble .as_tab .list_price{
		color: #FF431D;
		font-size: 20rpx;
	}
	.assemble .as_tab .list_price text{
		font-size: 28rpx;
		font-weight: bold;
	}
	.assemble .as_tab image{
		width: 216rpx;
		height: 138rpx;
	}
	.spot_img {
		padding: 15px 10px;
		display: flex;
		flex-direction: column;
		
	}
	.spot_img .img_top{
		display: flex;
		justify-content: space-between;
	}
	.spot_img .img_top view{
		position: relative;
		height: 240rpx;
	}
	.spot_img .img_top view:nth-of-type(1) image{
		width: 470rpx;
		height: 235rpx;
	}
	.spot_img .img_top view:nth-of-type(2) image{
		width: 235rpx;
		height: 235rpx;
	}
	.spot_img .img_top view text{
		font-size: 28rpx;
		color: #fff;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}
	.spot_img .img_bottom{
		display: flex;
		justify-content: space-between;
	}
	.spot_img .img_bottom view{
		position: relative;
		height: 240rpx;
	}
	
	.spot_img .img_bottom view image{
		width: 235rpx;
		height: 235rpx;
	}
	.spot_img .img_bottom view text{
		font-size: 28rpx;
		color: #fff;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}
	.guess {
		padding: 20rpx;
	}

	.guess .gu_top {
		font-weight: bold;
		font-size: 42rpx;
		margin-bottom: 20rpx;
	}

	.guess .gu_popular {
		color: #1D9DFF;
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}

	.guess .gu_popular text {
		display: inline-block;
		width: 12rpx;
		height: 32rpx;
		border-radius: 6rpx;
		background: #1D9DFF;
		margin-right: 22rpx;
	}
	.guess .gu_popular view:nth-of-type(1){
		display: flex;
		align-items: center;
	}
	.more{
		font-size: 24rpx;
		color: #CCCCCC;
	}
	.guess .spot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
	}

	.guess .spot .sp_list {
		width: 49%;
		height: 440rpx;
		background: #fff;
		box-shadow:0px 2rpx 10rpx 0px rgba(0, 0, 0, 0.15);
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}

	.guess .spot .sp_list image {
		width: 100%;
		height: 240rpx;
	}

	.guess .ticket {
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.guess .address {
		color: #333;
		font-size: 30rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}

	.guess .tips {
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}

	.guess .spot .sp_list .bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}

	.guess .spot .sp_list .bottom .price {
		color: #FF431D;
	}

	.guess .spot .sp_list .bottom .data {
		color: #999999;
		font-size: 26rpx;
	}

	.guess .product {}

	.guess .product .bottom .price {
		color: #FF431D;
		margin-right: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.guess .product .bottom .data {
		color: #999999;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.guess .product image {
		width: 100%;
		height: 300rpx;
	}

	.guess .product .info {
		float: right;
		color: #FF431D;
		border: 1rpx solid #FF431D;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 10rpx;
	}
	.eject{
		height: 100%;
		width: 100%;
		background:rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
	}
	.eject .eject_test{
		position: absolute;
		width: 518rpx;
		height: 250rpx;
		left: 50%;
		top: 315rpx;
		margin-left: -259rpx;
		font-size: 36rpx;
		color: #fff;
		background: url('../../static/image/index/eject_bg.png') no-repeat;
		background-size: 100% 100%;
	}
	.eject .eject_test .ej_top{
		text-align: center;
		margin: 56rpx 0 24rpx 0;
	}
	.eject .eject_test .ej_bottom{
		background: #fff;
		color: #0078FF;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		border-radius: 10rpx;
		font-weight: 500;
		margin: 0 50rpx;
	}
	.eject image{
		height: 72rpx;
		width: 72rpx;
		position: absolute;
		left: 50%;
		margin-left: -36rpx;
		top: 597rpx;
	}
</style>
