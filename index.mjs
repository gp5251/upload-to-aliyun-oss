import WebpackAliyunOss from 'webpack-aliyun-oss';

export default function (options = {}) {
	return new WebpackAliyunOss(options).apply();
}