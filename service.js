


const api = ''
// const api = 'http://rr0155.8396048.com'



let api_img = 'http://rr0155.8396048.com'

const api_root = {
	common:{
		Region: api+'/api/Region/index',//省市地区
		
	},
	reg:{
		reg: api+'/api/user/Register',//注册
		WlVerifySend: api+'/api/user/WlVerifySend',//获取注册验证码
		
	},
	login:{
		login: api+'/api/user/Login',//账号密码登录
		MobileLogin: api+'/api/user/MobileLogin',//手机验证码登录
		
	},
	index:{
		banner:api+'/api/banner/index',//轮播图
		Redgroupsgoods:api+'/api/groupgoods/Redgroupsgoods',//首页推荐拼团商品
		
	},
	subindex:{
		Detail:api+'/api/goods/Detail',//商品详情
		SpecType:api+'/api/goods/SpecType',//商品规格
		Save:api+'/api/cart/Save',//加入购物车
		grou_lists:api+'/api/groupgoods/lists',//拼团列表
		grou_Detail:api+'/api/groupgoods/Detail',//拼团商品详情
	},
	subuser:{
		Useraddress:api+'/api/Useraddress/Index',//地址列表
		add_Save:api+'/api/Useraddress/Save',//地址保存
		add_Delete:api+'/api/Useraddress/Delete',//删除地址
		add_Detail:api+'/api/Useraddress/Detail',//地址详情
		add_SetDefault:api+'/api/Useraddress/SetDefault',//默认地址设置
		order_Index:api+'/api/order/Index',//我的订单
	},
	threeLayers:{
		Category:api+'/api/goods/Category',//分类列表
		goodsList:api+'/api/goods/goodsList',//全部分类
		Index:api+'/api/cart/Index',//购物车列表
		Stock:api+'/api/cart/Stock',//更新购物车购买数量
		Delete:api+'/api/cart/Delete',//购物车删除商品
		buy_Index:api+'/api/buy/Index',//下订单数据确认
		Add:api+'/api/buy/Add',//订单确定（生成订单号）
		Pay:api+'/api/order/Pay',//支付订单
	
		
	}
}
const entire = function(self,type,url,data,func){
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest'},
		success(res) {
			let res_list = res.data
			if(res_list.code == 401){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	})
}
const load_entire = function(self,type,url,data,func){
	uni.showLoading({
	    title: '加载中',
		mask:true
	});
	let times = setTimeout(function(){
		uni.hideLoading()
		uni.showToast({
			icon:'none',
			title:'网络请求错误，请稍后再试'
		})
		return
	},10000)
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest'},
		success(res) {
			uni.hideLoading()
			clearTimeout(times)
			let res_list = res.data
			if(res_list.code == 401){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	})
}
export default{
	api,
	api_img,
	api_root,
	entire,
	load_entire
}