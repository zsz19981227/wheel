webpackJsonp([1],{"7znU":function(t,e){},BHNg:function(t,e){},GrNI:function(t,e){},HdWn:function(t,e){},HzS9:function(t,e){},M93x:function(t,e,i){"use strict";var n=i("sEFh"),s=i.n(n),r=i("vN7c");var a=function(t){i("HdWn")},o=i("C7Lr")(s.a,r.a,!1,a,null,null);e.default=o.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("IvJb"),s=i("M93x"),r=i("zO6J"),a=i("4YfN"),o=i.n(a),c=i("9rMa"),l={computed:o()({},Object(c.e)({makeList:function(t){return t.app.makeList},isShowList:function(t){return t.app.isShowList}})),methods:o()({},Object(c.d)({hideMakeList:"app/hideMakeList"}),{touchStart:function(t){this.touch=t.touches[0]},touchMove:function(t){var e=t.touches[0];this.offsetX=e.pageX-this.touch.pageX,console.log(this.offsetX),this.offsetX>0&&(this.$refs.section.style="transform: translate3d("+this.offsetX+"px,0,0)")},touchEnd:function(t){this.$refs.section.style="",this.offsetX>100&&this.hideMakeList()}})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"section",class:t.isShowList?"active car_type":"car_type",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},t._l(t.makeList,function(e,n){return i("ul",{key:n},[i("p",[t._v(t._s(e.GroupName))]),t._v(" "),t._l(e.GroupList,function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:{path:"/details",query:{id:e.SerialID,img:e.CoverPhoto,price:e.DealerPrice}}}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.Picture}})]),t._v(" "),i("div",[i("p",[t._v(t._s(e.AliasName))]),t._v(" "),i("p",[t._v(t._s(e.DealerPrice))])])])],1)})],2)}))},staticRenderFns:[]};var h={data:function(){return{city:null,title:[],letter:[],height:0}},components:{MakeList:i("C7Lr")(l,u,!1,function(t){i("hmkc")},null,null).exports},info:function(){},computed:o()({},Object(c.e)({list:function(t){return t.app.list},letters:function(t){return t.app.letters},isShow:function(t){return t.app.isShow}})),methods:o()({},Object(c.d)({showLetter:"app/showLetter",changeLetter:"app/changeLetter"}),Object(c.b)({listCar:"app/listCar",getMakeList:"app/getMakeList"}),{conentList:function(t){var e=this;this.city=t,console.log(t),t.map(function(t,i){var n=t.Spelling.slice(0,1);-1===e.title.indexOf(n)&&e.title.push(n)}),this.letter=this.title.slice()},touchStart:function(t){this.showLetter(!0);var e=t.target.innerHTML;this.letters!=e&&this.changeLetter(e)},touchMove:function(t){var e=t.touches[0].pageY,i=Math.floor((e-this.marginTop)/this.height);if(i<0?i=0:i>this.letter.length-1&&(i=this.letter.length-1),this.letter[i]!=this.letters){var n=document.getElementById(this.letter[i]).offsetTop;document.querySelector(".wrap").scrollTop=n,this.changeLetter(this.letter[i])}},touchEnd:function(){this.showLetter(!1)}}),mounted:function(){var t=this;this.listCar().then(function(e){t.conentList(e.data.data)})},updated:function(){this.height=.37*window.innerWidth/750*100,this.marginTop=(window.innerHeight-this.letter.length*this.height)/2}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[t._l(t.title,function(e,n){return i("div",{staticClass:"title"},[i("h3",{attrs:{id:e}},[t._v(t._s(e))]),t._v(" "),t._l(t.city,function(n){return i("div",{staticClass:"list",on:{click:function(e){t.getMakeList(n.MasterID)}}},[n.Spelling.slice(0,1)===e?i("dl",[i("dt",[i("img",{attrs:{src:n.CoverPhoto,alt:""}})]),t._v(" "),i("dd",[i("p",[t._v(t._s(n.Name))])])]):t._e()])})],2)}),t._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"letters"},[i("span",[t._v(t._s(t.letters))])]),t._v(" "),i("div",{staticClass:"fixed",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},t._l(t.letter,function(e,n){return i("span",{key:n},[t._v("\n        "+t._s(e)+"\n      ")])}))],2),t._v(" "),i("MakeList")],1)},staticRenderFns:[]};var f=i("C7Lr")(h,d,!1,function(t){i("dA2q")},null,null).exports,m={data:function(){return{img:"",price:"",num:"",ids:""}},computed:o()({},Object(c.e)({currentYear:function(t){return t.details.currentYear}}),Object(c.c)({years:"details/years",list:"details/list"})),methods:o()({},Object(c.b)({getDetailList:"details/getDetailList"}),Object(c.d)({changeYear:"details/changeYear"}),{jumpimg:function(){this.$router.push({path:"/img",query:{id:this.num}})},floorPrice:function(){this.$router.push({path:"/route",query:{id:this.ids}})}}),mounted:function(){this.img=this.$route.query.img,this.price=this.$route.query.price,this.num=this.$route.query.id,this.getDetailList(this.$route.query.id)},updated:function(){var t=this;for(var e in this.list){this.list[e].map(function(e,i){t.ids=e.car_id})}},beforeRouteEnter:function(t,e,i){i()}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("div",{staticClass:"MaxImg"},[i("div",{staticClass:"images",on:{click:t.jumpimg}},[i("img",{attrs:{src:t.img}}),t._v(" "),i("p",[i("span",[t._v(t._s(t.num))]),t._v("张照片")])]),t._v(" "),i("div",{staticClass:"price_num"},[i("div",{staticClass:"zongj"},[i("p",[t._v(t._s(t.price))]),t._v(" "),i("p",[t._v("指导价"),i("span",[t._v(t._s(t.price))])])]),t._v(" "),i("div",{staticClass:"btn"},[i("button",{on:{click:t.floorPrice}},[t._v("询问底价")])])])]),t._v(" "),i("ol",{staticClass:"c_type"},t._l(t.years,function(e,n){return i("li",{key:n,on:{click:function(i){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),i("section",t._l(t.list,function(e,n){return i("ul",{key:n},[i("p",[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return i("li",{key:n,ref:e.car_id,refInFor:!0},[i("p",[t._v(t._s(e.market_attribute.year+"款"+e.car_name))]),t._v(" "),i("P",[t._v(t._s(e.max_power+"马力"+e.gear_num+"挡"+e.trans_type))]),t._v(" "),i("p",[i("span",[t._v(t._s("指导价"+e.market_attribute.dealer_price_min))]),t._v(" "),i("span",[t._v(t._s(e.market_attribute.official_refer_price)+"起")])])],1)})],2)}))])},staticRenderFns:[]};var _=i("C7Lr")(m,v,!1,function(t){i("HzS9")},null,null).exports,p={computed:o()({},Object(c.e)({list:function(t){return t.color.list}})),methods:o()({},Object(c.b)({colorList:"color/colorList"}),Object(c.d)({listColor:"color/listColor"})),mounted:function(){console.log(this.list),this.colorList(this.$route.query.id)}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mask_color"},[i("div",{staticClass:"whole_color"},[t._v("全部颜色")]),t._v(" "),i("div",{staticClass:"date_color"},t._l(t.list,function(e,n){return i("p",{key:n},[t._v(t._s(n))])}))])},staticRenderFns:[]};var y=i("C7Lr")(p,g,!1,function(t){i("7znU")},null,null).exports,C={computed:o()({},Object(c.e)({list:function(t){return t.img.list},showMask:function(t){return t.img.showMask}})),methods:o()({},Object(c.b)({imgList:"img/imgList"}),Object(c.d)({tabImg:"img/tabImg"}),{imgClick:function(t){this.$router.push({path:"/imgDetail",query:{ImageID:t,SerialID:this.$route.query.id}})}}),components:{ColorMask:y},mounted:function(){this.imgList(this.$route.query.id)}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img"},[i("div",{staticClass:"tab_img",on:{click:function(e){return t.tabImg(e.target)}}},[i("span",[t._v("全部颜色")]),t._v(" "),i("span",[t._v("全部车款")])]),t._v(" "),i("div",{staticClass:"overflow_scroll"},t._l(t.list,function(e,n){return i("ul",{key:n},[t._l(e.List,function(n,s){return 0===s?i("li",{key:s,attrs:{id:s},on:{click:function(i){t.imgClick(e.Id)}}},[i("img",{attrs:{src:n.Url}}),t._v(" "),i("div",{staticClass:"imgClick"},[i("p",[t._v(t._s(e.Name))]),t._v(" "),i("p",[t._v(t._s(e.Count))])])]):t._e()}),t._v(" "),t._l(e.List,function(e,n){return 0!==n?i("li",{key:n,attrs:{id:n}},[i("img",{attrs:{src:e.Url}})]):t._e()})],2)})),t._v(" "),i("ColorMask",{class:t.showMask?"active":""})],1)},staticRenderFns:[]};var w=i("C7Lr")(C,L,!1,function(t){i("Ov9y")},null,null).exports,k={data:function(){return{img:"",price:"",num:""}},computed:o()({},Object(c.e)({provinces:function(t){return t.city.provinces},cities:function(t){return t.city.cities},isShowCity:function(t){return t.city.isShowCity}})),methods:o()({},Object(c.b)({CityList:"city/CityList"}),Object(c.d)({showRransform:"city/showRransform"})),mounted:function(){this.CityList()},updated:function(){}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cityList"},[i("div",{staticClass:"province"},[i("ul",t._l(t.provinces,function(e,n){return i("li",{key:n,attrs:{"data-id":e.CityID}},[i("p",[t._v(t._s(e.CityName))]),t._v(" "),i("p",{on:{click:function(e){t.CityList(n)}}},[t._v("〉")])])}))]),t._v(" "),i("section",{class:t.isShowCity?"activ city":"",on:{click:function(e){t.showRransform(t.isShowCity)}}},[i("div",t._l(t.cities,function(e,n){return i("p",{key:n},[t._v("\n                "+t._s(e.CityName)+"\n            ")])}))])])},staticRenderFns:[]};var I={data:function(){return{img:"",price:"",num:""}},components:{CitySelect:i("C7Lr")(k,b,!1,function(t){i("pPQk")},"data-v-b26b952c",null).exports},computed:o()({},Object(c.e)({list:function(t){return t.route.list},details:function(t){return t.route.details},isShowCity:function(t){return t.route.isShowCity},currentCity:function(t){return t.route.currentCity}})),methods:o()({},Object(c.b)({official:"route/official"}),Object(c.d)({officialList:"route/officialList",showCity:"route/showCity"})),mounted:function(){console.log(this.details),this.official(this.$route.query.id)},updated:function(){}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("header",{staticClass:"box_flxed"},[t._v("\n        可向多个商家咨询最低价，商家及时回复\n    ")]),t._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"hover"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.details.serial.Picture}})]),t._v(" "),i("div",{staticClass:"hover_dls"},[i("h1",[t._v(t._s(t.details.serial.AliasName))]),t._v(" "),i("p",[t._v(t._s(t.details.market_attribute.year)+"款"+t._s(t.details.exhaust_str)+"  "+t._s(t.details.serial.BrandName))])])]),t._v(" "),i("div",{staticClass:"from"},[i("p",[t._v("个人信息")]),t._v(" "),i("ul",{staticClass:"from_information"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("li",[i("p",[t._v("城市")]),t._v(" "),i("div",{on:{click:function(e){t.showCity(!0)}}},[i("p",[t._v(t._s(t.currentCity))]),t._v(" 〉\n                    ")])]),t._v(" "),t._m(2)])]),t._v(" "),i("div",{staticClass:"hover_list"},[i("p",[t._v("选择报价经销商")]),t._v(" "),i("ul",{staticClass:"hover_city"},t._l(t.list,function(e,n){return i("li",{key:n},[i("div",{staticClass:"stort"},[i("h1",[t._v(t._s(e.dealerShortName))]),t._v(" "),i("p",[t._v(t._s(e.address))])]),t._v(" "),i("div",[i("p",[t._v(t._s(e.promotePrice)+"万")]),t._v(" "),i("p",[t._v("售"+t._s(e.saleRange))])])])}))])]),t._v(" "),i("CitySelect",{class:t.isShowCity?"active":""})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("姓名")]),this._v(" "),e("div",[e("input",{attrs:{type:"text",placeholder:"输入你的真实中文姓名"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("手机")]),this._v(" "),e("div",[e("input",{attrs:{type:"text",placeholder:"输入你的真实手机号码"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("button",[this._v("询最低价")])])}]};var x=i("C7Lr")(I,S,!1,function(t){i("s4PA")},null,null).exports,D={computed:o()({},Object(c.e)({list:function(t){return t.imgDeta.list}})),methods:o()({},Object(c.b)({imgDetail:"imgDeta/imgDetail"}),Object(c.d)({imgList:"imgDeta/imgList"})),mounted:function(){this.imgDetail({SerialID:this.$route.query.SerialID,ImageID:this.$route.query.ImageID})}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"Picture_details"},this._l(this.list,function(t,i){return e("li",{key:i},[e("img",{attrs:{src:t.Url}})])}))},staticRenderFns:[]};var j=i("C7Lr")(D,M,!1,function(t){i("BHNg")},null,null).exports,O={data:function(){return{local:{user:"",pass:""}}},methods:{login:function(){console.log(this.local.user,this.local.pass),"1602e"===this.local.user&&"1602e"===this.local.pass&&(window.localStorage.setItem("login","true"),window.history.back())}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"login_from"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.local.user,expression:"local.user"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.local.user},on:{input:function(e){e.target.composing||t.$set(t.local,"user",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.local.pass,expression:"local.pass"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.local.pass},on:{input:function(e){e.target.composing||t.$set(t.local,"pass",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"#"},on:{click:t.login}},[t._v("登录")])])},staticRenderFns:[]};var E=i("C7Lr")(O,$,!1,function(t){i("GrNI")},null,null).exports;n.a.use(r.a);var P=new r.a({routes:[{path:"/index",name:"Index",component:f},{path:"/details",name:"Details",component:_},{path:"/img",name:"Img",component:w},{path:"/route",name:"RouteDetail",component:x},{path:"/imgDetail",name:"ImgDetail",component:j},{path:"/login",name:"Login",component:E},{path:"*",redirect:"/index"}]});P.beforeEach(function(t,e,i){window.localStorage.getItem("login")||"/login"==t.path||(console.log(111),i("/login")),i()});var N=P,q=i("aozt"),R=i.n(q),F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return/\?/.test(t)?t+="&_="+new Date:t+="?_"+new Date,fetch(t,{type:e,body:i}).then(function(t){return t.json()})},Y=/localhost:8080/gi.test(window.location.host)?"http://baojia.chelun.com":"https://baojia.chelun.com",z=function(t){var e="";return t&&(e+="provinceid="+t),F(Y+"/v1-city-alllist.html?"+e)},H={namespaced:!0,state:{list:[],num:1,letters:"",isShow:!1,brandId:"",makeList:"",isShowList:!1},getters:{},mutations:{showLetter:function(t,e){t.isShow=e},changeLetter:function(t,e){t.letters=e},changeMakeList:function(t,e){t.brandId=e.id,t.makeList=e.list,console.log(t.makeList),t.isShowList=!0},hideMakeList:function(t,e){t.isShowList=!1},showMakeList:function(t){t.isShowList=!0}},actions:{listCar:function(t,e){return R.a.get("/listCar").then(function(t){return t})},getMakeList:function(t,e){var i,n=t.commit,s=t.state;e!=s.brandId&&(i=e,F(Y+"/v2-car-getMakeListByMasterBrandId.html?MasterID="+i)).then(function(t){n("changeMakeList",{id:e,list:t.data})})}}},A=i("IHPB"),U=i.n(A),B=i("zsLt"),T=i.n(B),X={namespaced:!0,state:{info:{},currentYear:"全部"},getters:{years:function(t){if(!t.info.data)return[];var e=t.info.data.list.map(function(t){return t.market_attribute.year}),i=new T.a(e);return["全部"].concat(U()(i))},list:function(t){if(!t.info.data)return[];function e(t){var e=[],i={};return t.forEach(function(t){var n=t.exhaust_str+"/"+t.max_power_str+" "+t.inhale_type;-1==e.indexOf(n)?(e.push(n),i[n]=[t]):i[n].push(t)}),i}return"全部"===t.currentYear?e(t.info.data.list):e(t.info.data.list.filter(function(e){return e.market_attribute.year==t.currentYear}))}},mutations:{changeYear:function(t,e){t.currentYear=e},updateInfo:function(t,e){e.data.list.sort(function(t,e){return e.market_attribute.year!=t.market_attribute.year?e.market_attribute.year-t.market_attribute.year:e.exhaust_str>t.exhaust_str?1:e.exhaust_str<t.exhaust_str?-1:e.max_power_str>t.max_power_str?1:e.max_power_str<t.max_power_str?-1:e.market_attribute.dealer_price_min>t.market_attribute.dealer_price_min?1:-1}),t.info=e}},actions:{getDetailList:function(t,e){var i,n=t.commit;(i=e,F(Y+"/v2-car-getInfoAndListById.html?SerialID="+i)).then(function(t){n("updateInfo",t)})}}},G={namespaced:!0,state:{list:[],showMask:!1},getters:{},mutations:{dataList:function(t,e){var i=/(\{)([\d])(\})/g;e.data.map(function(t){t.List.map(function(t){t.Url=t.Url.replace(i,function(e,i,n){return t.LowSize})})}),t.list=e.data},tabImg:function(t,e){t.showMask=!0}},actions:{imgList:function(t,e){var i,n,s,r,a=t.commit;(i=e,r="SerialID="+i,n&&(r+="&ColorID="+n),s&&(r+="&CarID="+s),F(Y+"/v2-car-getImageList.html?"+r)).then(function(t){a("dataList",t)})}}},J={namespaced:!0,state:{list:[]},getters:{},mutations:{imgList:function(t,e){var i=/(\{)([\d])(\})/g;Array(e.data).forEach(function(t){t.List.map(function(t){t.Url=t.Url.replace(i,function(e,i,n){return t.LowSize})})}),t.list=e.data.List}},actions:{imgDetail:function(t,e){var i=t.commit;(function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;return F(Y+"/v2-car-getCategoryImageList.html?SerialID="+t+"&ImageID="+e+"&Page="+i+"&PageSize="+n)})(e.SerialID,e.ImageID).then(function(t){i("imgList",t)})}}},W={namespaced:!0,state:{list:[],details:[],isShowCity:!1,currentCity:""},getters:{},mutations:{officialList:function(t,e){t.list=e.data.list,t.details=e.data.details},showCity:function(t,e){t.isShowCity=e}},actions:{official:function(t,e){var i=t.commit;(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:201;return F(Y+"/v2-dealer-alllist.html?carId="+t+"&cityId="+e)})(e).then(function(t){i("officialList",t)})}}},Q={namespaced:!0,state:{list:[],locationCity:"",provinces:[],cities:[],isShowCity:!1},getters:{},mutations:{updateProvinces:function(t,e){t.provinces=e.data},updateCitied:function(t,e){t.cities=e.data,t.isShowCity=!0},showRransform:function(t,e){t.isShowCity=!e}},actions:{CityList:function(t,e){var i=t.commit;e?z(e).then(function(t){i("updateCitied",t)}):z().then(function(t){i("updateProvinces",t)})}}},K={namespaced:!0,state:{list:[]},getters:{},mutations:{listColor:function(t,e){t.list=e.data}},actions:{colorList:function(t,e){var i,n=t.commit;(i=e,F(Y+"/v2-car-getModelImageYearColor.html?SerialID="+i)).then(function(t){n("listColor",t)})}}};n.a.use(c.a);var V=new c.a.Store({modules:{app:H,details:X,img:G,imgDeta:J,route:W,city:Q,color:K}});n.a.config.productionTip=!1,new n.a({el:"#app",router:N,store:V,components:{App:s.default},template:"<App/>"})},Ov9y:function(t,e){},dA2q:function(t,e){},hmkc:function(t,e){},pPQk:function(t,e){},s4PA:function(t,e){},sEFh:function(t,e){},vN7c:function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.714afcb719bff8e82d28.js.map