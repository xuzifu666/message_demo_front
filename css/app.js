var app = {
	/**
	 * netty服务后端发布的url地址
	 */
	nettyServerUrl: 'ws://192.168.0.102:8081/ws',
	// nettyServerUrl: 'ws://47.96.126.221:8081/ws',
	
	/**
	 * api服务器地址
	 */
	// apiUrl : "http://192.168.0.102:8080/",
	apiUrl : "http://47.96.126.221:8080/",
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
	},
	
	/**
	 * 保存用户的联系人列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList", contactListStr);
	},
	
	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function() {
		var contactListStr = plus.storage.getItem("contactList");
		
		if (!this.isNotNull(contactListStr)) {
			return [];
		}
		
		return JSON.parse(contactListStr);
	},
	
	/**
	 * 根据用户id，从本地的缓存（联系人列表）中获取朋友的信息
	 * @param {Object} friendId
	 */
	getFriendFromContactList: function(friendId) {
		var contactListStr = plus.storage.getItem("contactList");
		
		// 判断contactListStr是否为空
		if (this.isNotNull(contactListStr)) {
			// 不为空，则把用户信息返回
			var contactList = JSON.parse(contactListStr);
			for (var i = 0 ; i < contactList.length ; i ++) {
				var friend = contactList[i];
				if (friend.friendUserId == friendId) {
					return friend;
					break;
				}
			}
		} else {
			// 如果为空，直接返回null
			return null;
		}
	},
	
	
	LOGIN_MSG:0,
	NORMAL_MSG:1,
	SIGN_MSG:2,
	HEART_MSG:3,
	PULL_FRIEND:4,
	
	/**
	 * 和后端的 ChatMsg 聊天模型对象保持一致
	 * @param {Object} from
	 * @param {Object} to
	 * @param {Object} msg
	 * @param {Object} msgId
	 */
	ChatMsg: function(from, to, msg, msgId){
		this.from = from;
		this.to = to;
		this.msg = msg;
		this.msgId = msgId;
	},
	
	/**
	 * 构建消息 DataContent 模型对象
	 * @param {Object} action
	 * @param {Object} chatMsg
	 * @param {Object} extras
	 */
	DataContent: function(action, chatMsg, extras){
		this.action = action;
		this.chatMsg = chatMsg;
		this.extras = extras;
	}
}