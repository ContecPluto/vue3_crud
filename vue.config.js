const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: (config) => {
		config.resolve.alias.set('vue', '@vue/compat')
		config.module
			.rule('vue')
			.use('vue-loader')
			.tap((options) => {
				return {
					...options,
					compilerOptions: {
						compatConfig: {
							MODE: 2
						}
					}
				}
			})
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		},
	}
})

