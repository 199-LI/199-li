(function () {
    //畅言滤重
    if (window.changyan !== undefined || window.cyan !== undefined) {
        return;
    }
    var createNs = function () {
        if (window.changyan !== undefined) {
            return;
        } else {
            window.changyan = {};
            window.changyan.api = {};
            window.changyan.api.config = function (conf) {
                window.changyan.api.tmpIsvPageConfig = conf;
                
                // 日志 记录加载changyan.js的加载
                (function() {
                    try {
                        var clientId = conf.appid;
                        (function(i,s,o,g,r,a,m) {
                            i['KZAnalyticsObject'] = r; i[r] = i[r] || function() {(i[r].q = i[r].q || []).push(arguments);};
                            a = s.createElement(o); m = s.getElementsByTagName(o)[0]; a.sync = 1; a.src = g;
                            m.parentNode.insertBefore(a, m);
                        })(window, document, "script", "//pv.kuaizhan.com/kzcollector.min.js?version=0.1", "kaq");
                        kaq('create', 'cy')
                        kaq('send', 'event', 'cy-pc', 'cy-pc', clientId)

                        function isMobile() {
                            let mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                            return mobile != null
                        }
                        if (isMobile()) {
                            !function(n){!function(n,r,t,i,u,f,o,e,c,v,a,h,d,l,s,b,g,k,j,m,p,w,x,y,z,A,C,I,J,M,N,O,P,R,S,U,W,_){this[t]=function(){var t=arguments[i]>u&&arguments[u]!==r?arguments[u]:f,c=arguments[i]>o&&arguments[o]!==r?arguments[o]:r,h=function(r){for(var t=r[i],f=r[e](""),c=u;c<n[a][v](t/2);c++)if(c%2===u){var h=f[c];f[c]=r[t-o-c],f[t-o-c]=h}return f[d]("")},q=function(){for(var r=n[g][b],t=[k,j,m,p,w,x],f=y,o=u;o<t[i];o++)if(r[z](t[o])>u){f=A;break}return f}()?M:N,B={channel:t,device:q,i:c},D=n[s](function(r){return r=n[l](n[s](r)),h(r)}(n[P][O](B))),E=R+D;return function(r){var t=n[I][C];return t?t[z](r)===-o:y}(D)?(function(r){var t=n[I][C];if(!t)return void(n[I][C]=r);n[I][C]=t+J+r}(D),n[U](E)[S](function(n){return n[W]()})[S](n[_])):A}}(this,void 0,n(0,0,1,2,3,4),n(5,6,4,7,8,9),0,n(10,10,11),1,n(12,13,5,3,8),0,n(14,5,15,15,16),n(17,2,8,9),0,n(18,15,3,4),n(19,8,15,2),n(6,4,20,15,21,6,22,23,24,25,15,1,13,15,4,6,4,8),n(26,12,6,16,27,7,6,4,8),n(4,2,28,3,7,2,8,15,16),n(27,4,21,16,15,3,21),n(3,29,9,15,4,6),n(30,31,1,19,3,2,4,32,30),n(33,3,4,21,15,34,12,35,29,9,15,4,6),n(3,29,2,21),n(3,29,15,21),!0,n(3,4,21,6,36,32,14),!1,n(0,0,36,31,37,19),n(34,3,4,21,15,34),n(38),n(29,25),n(33,27,29),n(12,8,16,3,4,7,3,14,31),n(39,30,32,40),n(41,41,12,8,2,8,42,43,26,2,3,37,9,2,4,42,20,15,1,41,12,8,2,8,44,21,2,8,2,45),n(8,9,6,4),n(14,6,8,20,9),n(18,12,15,4),n(6,28,2,5))}(function(n){return function(){for(var r=arguments,t="",i=0,u=r.length;i<u;i++)t+=n[r[i]];return t}}(["_","m","a","i","n","l","e","g","t","h","0","1","s","p","f","o","r","M","j","b","c","d","U","R","I","C","u","A","v","P","S","y","O","W","w"," ","x","z",",","J","N","/",".","k","?","="]));
                            if (!(window.SOHUZ && window.SOHUZ.page && SOHUZ.page.site_id)) {
                                __main('001', clientId)
                                kaq('send', 'event', 'cy-pc-load-copy-on-mobile', 'cy-pc', clientId)
                            }
                        }

                    } catch(e) {}
                })();

            };
            window.changyan.api.ready = function (fn) {
                window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
                window.changyan.api.tmpHandles.push(fn);
            };
            window.changyan.ready = function (fn) {
              if (window.changyan.rendered) {
                fn && fn();
              } else {
                window.changyan.tmpHandles = window.changyan.tmpHandles || [];
                window.changyan.tmpHandles.push(fn);
              }
            }
        }
    };

    var createMobileNs = function () {
        if (window.cyan) {
            return;
        }

        window.cyan = {};
        window.cyan.api = {};
        window.cyan.api.ready = function (fn) {
            window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
            window.cyan.api.tmpHandles.push(fn);
        };
    };


    var loadVersionJs = function () {
        var loadJs = function (src, fun) {
            var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;

            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('charset', 'UTF-8');
            script.setAttribute('src', src);

            if (typeof fun === 'function') {
                if (window.attachEvent) {
                    script.onreadystatechange = function () {
                        var r = script.readyState;
                        if (r === 'loaded' || r === 'complete') {
                            script.onreadystatechange = null;
                            fun();
                        }
                    };
                } else {
                    script.onload = fun;
                }
            }

            head.appendChild(script);
        };

        var ver = (Date.now() / 1000 / 60 / 10).toFixed(); // per 10m
        var protocol = (('https:' == window.document.location.protocol) ? "https://" : "http://");
        var url = protocol + 'cy-cdn.kuaizhan.com/upload/version-v3.js?' + ver;
        loadJs(url);
    };
    createNs();
    createMobileNs();
    loadVersionJs();
}());
