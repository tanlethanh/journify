module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'react-native-reanimated/plugin',
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'@/screens': './src/screens',
					'@/types': './src/types',
					'@/store': './src/store',
					'@/components': './src/components',
					'@/utils': './src/utils',
					'@/assets': './assets',
				},
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.jsx',
					'.json',
					'.tsx',
					'.ts',
					'.native.js',
				],
			},
		],
	],
};
