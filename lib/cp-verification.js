;
(function() {
	'use strict';

	function CPVerification() {}
	CPVerification.prototype = {
		constructor: CPVerification,
		// 校验邮箱
		isEmail: function(sEmail) {
			if (sEmail == '') { return false; }
			if (sEmail.search(/^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9_-])+((\.[a-z]{2,3}){1,2})$/) != -1) { return true; } else return false;
		},
		// 校验手机号码
		isMobile: function(sMobile) {
			return /^1[3|4|5|6|7|8|9]\d{9}$/.test(sMobile);
		},
		// 校验身份证号码 - 未严谨
		isID_Card: function(sID_Card) {
			if (sID_Card == '') { return false; }
			var RegularExp = /^[0-9]{17}[0-9A-Za-z]{1}$|^[0-9]{14}[0-9A-Za-z]{1}$/
			if (RegularExp.test(sID_Card)) { return true; } else { return false; }
		},
		// 校验必须是数字或者字母
		isNumStr: function(sNumStr) {
			var str1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var i = 0;
			for (i = 0; i < sNumStr.length; i++) {
				var onechar = sNumStr.substring(i, i + 1);
				if (!(str1.indexOf(onechar) != -1)) { return false; }
			}
			return true;
		},
		// 校验电话号码
		isTel: function(sTel) {
			var RegularExp = /^((([0-9]{4}|[0-9]{3})-)|(([0−9]4|[0−9]3)))*([0-9]{7}|[0-9]{8})$|^[0-9]{11}$/
			if (RegularExp.test(sTel)) { return true; } else { return false; }
		}
	}

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return CPVerification;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports.CPVerification = CPVerification;
	} else {
		window.CPVerification = CPVerification;
	}
}());