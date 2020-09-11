# var和let /const的区别

ES5只有两种声明变量的方法：var命令和function命令，ES6新增了let和const命令。

本文仅略微简单的讲述下var和let/const的区别。

**`var`和`let`/`const`的区别**

1. ### 块级作用域

   ES5只有全局作用域和函数作用域，没有块级作用域。

   这带来很多不合理的场景:

   1. 内层变量可能覆盖外层变量

   2. 用来计数的循环变量泄露为全局变量

      ```
      var tmp = new Date();
      function f() {
        console.log(tmp); // 想打印外层的时间作用域
        if (false) {
          var tmp = 'hello world'; // 这里声明的作用域为整个函数
        }
      }
      f(); // undefined
      
      var s = 'hello';
      for (var i = 0; i < s.length; i++) {
        console.log(s[i]); // i应该为此次for循环使用的变量
      }
      console.log(i); // 5 全局范围都可以读到
      ```

      而let使代码分割成块，运行f1()，打印出5，如果let换成var，就会打印出10

      ```
      function f1() {
        let n = 5;
        if (true) {
          let n = 10;
          console.log(n); // 10 内层的n
        }
        console.log(n); // 5 当前层的n
      }
      ```

      

2. ### 不存在变量提升

   **变量提升的现象**：在同一作用域下，变量可以在声明之前使用，值为 undefined

   ES5 时使用`var`声明变量，会出现变量提升的现象。

   ![image-20200910212643433](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910210857114.png)

   

3. ### 暂时性死区

   这个概念是：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，**只有等到声明变量的那一行代码出现，才可以获取和使用该变量**

   ![image-20200910211559572](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910211150794.png)

   

4. ### 不可重复声明

   `let`、`const`不允许在相同作用域内，重复声明同一个变量

   ![image-20200910210857114](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910211559572.png)

5. ### let、const声明的全局变量不会挂在顶层对象下面

   

   ![image-20200910211150794](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212226309.png)
   
   可见，es6中的let/const声明的变量不在window中

**`const`命令两个注意点:**

1. const 声明之后必须马上赋值，否则会报错

   

   ![image-20200910212535054](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212535054.png)

2. const 简单类型一旦声明就不能再更改，复杂类型(数组、对象等)指针指向的地址不能更改，内部数据可以更改。

   ![image-20200910212814167](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212643433.png)

![image-20200910212226309](https://gitee.com/youknowHRT/document/raw/master/imgs/image-20200910212814167.png)