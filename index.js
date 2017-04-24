/**
 * 行为
 */
var app = getApp();

Page({

	data:{
		motto: 'Hello World',
		userInfo: {}
	},

	bindViewTap: function(){
		
		wx.navigateTo({
			url: '../logs/logs'
		})
	},

	onLoad: function(){
		
		console.log('onLoad')

		var that = this

		app.getUserInfo(function(userInfo){
			
			that.setData({
				userInfo: userInfo
			})
		})
	}
})