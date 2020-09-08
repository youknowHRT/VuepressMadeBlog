# AJAX

AJAX是英文Asynchronous JavaScript and XML的缩写，意思为异步的Javascript和XML。是一种在无需重新加载整个网页的情况下向浏览器发起请求并接受响应，最后对网页局部进行更新的技术。

**AJAX的核心**就是*XMLHttpRequest*对象，该对象可以发起http请求，我们可以监听其readystate的变化获得响应。

具体代码如下

##### 1.创建一个对象

`var request = new XMLHttpRequest()；`

##### 2.创建http请求，设置请求参数

`request.open('get', 'http://www.xxx.com')；`

##### 3.监听

`request.onreadystatechange=()=>{` 

​    `if(request.readyState ===4){` 

​        `if(request.status>=200 && request.status<300){`

​            `console.log("请求成功")；`

​        `}else if(request.status>=400){`

​            `console.log("请求失败")；`

​        `}`

​    `}`

`}`

- onreadystatechanges会在readyState属性改变时被触发调用

- readyState返回XMLHttpRequest当前所处状态，

  ​	0：未初始化，尚未调用open()

  ​	1：open()方法已被调用

  ​	2：send()方法已被调用，服务器响应客户端请求，并且头部和状态已可获得

  ​	3：下载中，responseText属性已包含部分数据

  ​	4：请求操作已完成，这代表数据传输已彻底完成或者失败

- status：服务器返回的状态码

##### 4.发送请求

`request.send();`



**AJAX的优点**：

1. 最大优点就是无刷新更新页面
2. 异步与服务器通讯
3. 减轻服务器的负载和带宽
4. 基于标准被广泛支持



**AJAX的缺点**：

1. 干掉了Back和History功能，即对浏览器机制的破坏
2. 安全问题
3. 影响SEO



**应用场景：**

场景 1. 数据验证

场景 2. 按需取数据

场景 3. 自动更新页面