(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"var和let-const的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var和let-const的区别"}},[t._v("#")]),t._v(" var和let /const的区别")]),t._v(" "),a("p",[t._v("ES5只有两种声明变量的方法：var命令和function命令，ES6新增了let和const命令。")]),t._v(" "),a("p",[t._v("本文仅略微简单的讲述下var和let/const的区别。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("var")]),t._v("和"),a("code",[t._v("let")]),t._v("/"),a("code",[t._v("const")]),t._v("的区别")])]),t._v(" "),a("ol",[a("li",[a("h3",{attrs:{id:"块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),a("p",[t._v("ES5只有全局作用域和函数作用域，没有块级作用域。")]),t._v(" "),a("p",[t._v("这带来很多不合理的场景:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("内层变量可能覆盖外层变量")])]),t._v(" "),a("li",[a("p",[t._v("用来计数的循环变量泄露为全局变量")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var tmp = new Date();\nfunction f() {\n  console.log(tmp); // 想打印外层的时间作用域\n  if (false) {\n    var tmp = 'hello world'; // 这里声明的作用域为整个函数\n  }\n}\nf(); // undefined\n\nvar s = 'hello';\nfor (var i = 0; i < s.length; i++) {\n  console.log(s[i]); // i应该为此次for循环使用的变量\n}\nconsole.log(i); // 5 全局范围都可以读到\n")])])]),a("p",[t._v("而let使代码分割成块，运行f1()，打印出5，如果let换成var，就会打印出10")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function f1() {\n  let n = 5;\n  if (true) {\n    let n = 10;\n    console.log(n); // 10 内层的n\n  }\n  console.log(n); // 5 当前层的n\n}\n")])])])])])]),t._v(" "),a("li",[a("h3",{attrs:{id:"不存在变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不存在变量提升"}},[t._v("#")]),t._v(" 不存在变量提升")]),t._v(" "),a("p",[a("strong",[t._v("变量提升的现象")]),t._v("：在同一作用域下，变量可以在声明之前使用，值为 undefined")]),t._v(" "),a("p",[t._v("ES5 时使用"),a("code",[t._v("var")]),t._v("声明变量，会出现变量提升的现象。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910210857114.png",alt:"image-20200910212643433"}})])]),t._v(" "),a("li",[a("h3",{attrs:{id:"暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂时性死区"}},[t._v("#")]),t._v(" 暂时性死区")]),t._v(" "),a("p",[t._v("这个概念是：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，"),a("strong",[t._v("只有等到声明变量的那一行代码出现，才可以获取和使用该变量")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910211150794.png",alt:"image-20200910211559572"}})])]),t._v(" "),a("li",[a("h3",{attrs:{id:"不可重复声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复声明"}},[t._v("#")]),t._v(" 不可重复声明")]),t._v(" "),a("p",[a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("不允许在相同作用域内，重复声明同一个变量")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910211559572.png",alt:"image-20200910210857114"}})])]),t._v(" "),a("li",[a("h3",{attrs:{id:"let、const声明的全局变量不会挂在顶层对象下面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let、const声明的全局变量不会挂在顶层对象下面"}},[t._v("#")]),t._v(" let、const声明的全局变量不会挂在顶层对象下面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212226309.png",alt:"image-20200910211150794"}})]),t._v(" "),a("p",[t._v("可见，es6中的let/const声明的变量不在window中")])])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("const")]),t._v("命令两个注意点:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("const 声明之后必须马上赋值，否则会报错")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212535054.png",alt:"image-20200910212535054"}})])]),t._v(" "),a("li",[a("p",[t._v("const 简单类型一旦声明就不能再更改，复杂类型(数组、对象等)指针指向的地址不能更改，内部数据可以更改。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212643433.png",alt:"image-20200910212814167"}})])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212814167.png",alt:"image-20200910212226309"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);