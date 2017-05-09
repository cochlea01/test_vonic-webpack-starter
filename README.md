说明：
1.该项目采取vonic作为ui库，axios作为ajax库，sass来编写css样式
2.src/asset目录存放大部分静态资源
3.src/comp目录存放vue的组件
4.src/entry目录存放入口的js文件
5.src/lib目录存放第三方库
6.src/page目录存放页面相关的组件
7.src/service目录存放公共方法
8.开发执行 npm run dev 命令
9.打包执行 npm run build 目录
10.注意 build 之后，项目运行时，会报 vuex 已注册的错误，可无视，可在 build 之前在入口文件中注释 Vue.use(Vuex) 代码防止报错
11.使用rem用于框的宽高、边距，rem规则与淘宝一致：10rem为一个屏幕宽，但最大为54px

scss样式说明
一、字体说明
1.字体大小由 src/asset/mixin 中的 variable.scss 文件设定
2.字体颜色由 src/asset/mixin 中的 variable.scss 中颜色变量设定
3.设定元素字体颜色大小由 src/asset/mixin 中的 font.scss 文件的 mixin 语句设定
二、使用说明
1.reset中的样式文件按需加载，在需要加载的js中用require引入

$sidebar 说明
1.设置
    this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})
2.弹出
    this.sidebarRight.toggle()

$storage 说明
1.存 $storage(key,value);
2.取 $storage(key);