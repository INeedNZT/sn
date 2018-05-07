/* requirejs入口文件，配置requirejs加载Vue启动文件 */
requirejs.config({
    paths: {
        jquery: '../vendor/jquery/jquery',
        vue: '../vendor/vue/vue',
        vueRouter: '../vendor/vue/vue.router',
        text: '../vendor/requirejs/text',
        routerConfig: './router.config',
        components: './components'
    }
});


requirejs(['components/main'], function(app) {
    console.log(app)
    console.info('app start!');
});