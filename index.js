const WebpackAliyunOss = require('webpack-aliyun-oss');

module.exports = function (options = {}) {
	return new WebpackAliyunOss(options).apply();
}