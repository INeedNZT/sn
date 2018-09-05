define(['vueRouter'], function(VueRouter) {
    /* 通过requirejs异步获取资源文件，返回component组件对象 */
    function requireDataAsync(resolve, html, js) {
        return require([html, js], function(text, data) {
            if (typeof data === 'function') {
              resolve({ template: text, data: data });
            } else if(typeof data === 'object'){
                resolve({ template: text, data: data.data, methods: data.methods });
            }
        });
    }

    /* 异步懒加载返回promise.resolve对象 */
    var APP = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/app.html', 'components/app');
    }

    var ABOUT = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/about.html', 'components/about');
    }

    var CONTACT = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/contact.html', 'components/contact');
    }
    
    var PERSON = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/person.html', 'components/person');
    }

    var SERVER = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/server.html', 'components/server');
    }

    var PRODUCT = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/product.html', 'components/product');
    }

    var NEWS = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/news.html', 'components/news');
    }

    var PARTNER = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/partner.html', 'components/partner');
    }

    var HOME = function(resolve) {
      return require(["text!../view/home.html", "components/home"], function(text, data) {
        var beforeRouteLeave = function(to, from, next) {
          this.$parent._data.isSubTitle = true;
          next();
        };
        resolve({
          template: text,
          data: data,
          beforeRouteLeave: beforeRouteLeave
        });
      });
    };

    var NEWS_ONE = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/news_one.html', 'components/news_one');
    }

    var NEWS_TWO = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/news_two.html', 'components/news_two');
    }

    var NEWS_THREE = function(resolve) {
        return requireDataAsync(resolve, 'text!../view/news_three.html', 'components/news_three');
    }
    

   

    var routes = [
        {
            path:'/',
            redirect: '/app'
        },
        {
            path: '/app',
            component: function(resolve) { APP(resolve) },
            children: [
                { path: '', component: function(resolve) { HOME(resolve) }},
                { name: 'home', path: 'home', component: function(resolve) { HOME(resolve) } },
                { name: 'about' ,path: 'about', component: function(resolve) { ABOUT(resolve) } },
                { name: 'contact', path: 'contact', component: function(resolve) { CONTACT(resolve) } },
                { name: 'person' ,path: 'person', component: function(resolve) { PERSON(resolve) } },
                { name: 'server' ,path: 'server', component: function(resolve) { SERVER(resolve) } },
                { name: 'product' ,path: 'product', component: function(resolve) { PRODUCT(resolve) } },
                { name: 'partner' ,path: 'partner', component: function(resolve) { PARTNER(resolve) } },
                { name: 'news' ,path: 'news', component: function(resolve) { NEWS(resolve) }, 
                  children:[
                    {name:'one',path:'one',component:function(resolve){NEWS_ONE(resolve)}},
                    {name:'two',path:'two',component:function(resolve){NEWS_TWO(resolve)}},
                    {name:'three',path:'three',component:function(resolve){NEWS_THREE(resolve)}}
                  ]
                }
            ]
        } 
    ]

    var router = new VueRouter({
        routes: routes,
        linkActiveClass :'nav-active'
    });

    // 全局前置路由守卫
    // router.beforeEach((to, from, next) => {
    //     next();
    // });

    return { router: router }

});