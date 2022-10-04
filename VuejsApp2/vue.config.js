module.exports = {
	baseUrl: process.env.NODE_ENV === 'production'
		? './'
		: '/'
	//baseUrl: './'
	//assetsDir: 'static',
	//chainWebpack: config => {
	//	config.resolve.alias
	//		.set('@', resolve('src'))
	//		.set('assets', resolve('assets'))
	//		.set('public', resolve('public'));
	//},
	//devServer: {
	//	proxy: {
	//		'^/api': {
	//			// target: 'http://localhost:60851/',
	//			target: 'http://192.168.1.145/Evo/'
	//		},
	//		'^/complaint': {
	//			target: 'http://192.168.1.145/'
	//		}
	//	}
	//}
};
