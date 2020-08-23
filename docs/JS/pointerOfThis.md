### 关于this的指向
##### this对象是基于函数的执行环境绑定的。

比较常见的例子：
```
var name="Robert Downey Jr.";
var film={
    name:"Tony Stark",
    getName:function(){
        return this.name
    }
};
var myName=film.getName;
//A
film.getName() //打印出的this是"Tony Stark"
//B
myName() //打印出的this是"Robert Downey Jr."
```

A和B的调用为什么会输出两种不同的值呢？

从内存的**数据结构**来看：

变量film保存着对象的地址，getName的value属性同时又保存着函数的地址，如下图

![image](https://i.loli.net/2019/05/08/5cd296bdbd7ca.png)
`var myName=film.getName`只是把函数的地址指向myName， 
而这个函数，通俗点讲就好比一个演员，在film中叫做Tony，但在现实生活中就是Robert了。this就是film和现实世界这两个环境的指代。

如图所示![image](https://i.loli.net/2019/05/08/5cd29a7954afe.png)

另外，我们知道函数有一个**call**方法，`film.getName()` 实际是`film.getName.call(film)`的一种语法糖写法。

call方法语法：
fun.call(thisArg, arg1, arg2, ...)

thisArg就是this的指向，
如果thisArg为undefined或者null，则自动指向全局对象window

如上面的`myName()` 可转化为`myName.call(undefined)`，this就是undefined,自动指向全局对象。
 
 最后补充两点，
 
 1、**匿名函数的执行环境具有全局性**，其this对象通常指向window。
 ```
 var name="Robert Downey Jr."
 var film={
    name:"Tony Stark",
    getName:function(){
		return function(){
			return this.name
		}  
    }
}
film.getName()() //输出 "Robert Downey Jr."
 ```

2、箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
