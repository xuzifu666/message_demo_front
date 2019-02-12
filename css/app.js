var app = {
	
	/**
	 * api服务器地址
	 */
	apiUrl : "http://192.168.0.100:8080/",
	// apiUrl : "http://c43c7j.natappfree.cc/",
	/**
	 * 文件服务器地址
	 */
	// imgServerUrl : "http://192.168.0.104:8082/mooc/",
	imgServerUrl : "http://47.96.126.221:8082/mooc/",
	
	/**
	 * 验证字符串是否是空
	 */
	isNotNull : function(str){
		if(str != null && str != "" && str != undefined){
			return true;
		}
		return false;
	},
	
	/**
	 * toast定制
	 */
	showToast : function(msg,type){
		// plus.nativeUI.toast(msg,{icon: "image/" + type + ".png", verticalAlign: "center"});
		plus.nativeUI.toast(msg,
		{
			icon:"image/" + type + ".png",verticalAlign:"center"
		});
	},
	
	/**
	 * 保存用户的全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		plus.storage.setItem("userInfo", user);
	},

	/**
	 * 获取用户的全局对象
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	}
}