# 浏览器同源策略：手动实现CORS、JSONP跨域

# 一、同源策略

什么是同源策略？

同源策略（Same-Origin Policy）就是：浏览器规定，只有URL的**协议+域名+端口**一模一样，才能向同一域名的服务器请求数据。

为什么浏览器要规定同源策略呢？为了保护用户信息安全

 虽然限制是必要的，但往往也会影响到合理的用途，**跨域是为了突破浏览器的同源策略限制**

其实cors的原理就是，告诉浏览器："请别担心，这个请求是安全的，让他访问吧"。

而jsonp的原理是，使用浏览器不担心的方式去请求：script标签中的src属性。

先来模拟出跨域的场景，在本地启动一个最简单的node服务，返回数据。

```
const http = require('http')

var server = http.createServer(function (req, res) {
  console.log("got conncet");
  res.writeHeader(200, {
    'content-type': 'text/javascript;charset="utf-8"',
  })
  const msg = { 'a': 'CORS', 'b': 'JSONP' }
  const mm = JSON.stringify(msg)
  let outMsg = `getData(${mm})`
  res.end(outMsg)
})

server.listen(9000)
console.log(`Serve running at http://127.0.0.1:9000/`);
```

启动服务

```
node server.js
```

页面显示

![1](https://gitee.com/youknowHRT/document/raw/master/imgs/2.png)

然后就在当前页面（当前文章阅读页面）f12打开控制台,在console里创建一个ajax请求

```
var xhr = **new** *XMLHttpRequest*();

xhr.open('get', 'http://127.0.0.1:9000');

xhr.send();
```

执行以后就出现跨域报错了

![2](https://gitee.com/youknowHRT/document/raw/master/imgs/1.png)

## CORS

首先来看一下cors的跨域原理，其实报错里就写的很明白，我们访问的资源没有设置该访问源的头。

在cors的规则中，请求分为简单请求和非简单请求，我们上面发送的就是一个简单请求。

> 关于简单请求和非简单请求，参考：[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

#### 对于简单请求

只要在响应头中（response header）指明允许哪些访问源访问就可以了。

在server.js中给响应头添加 `Access-Control-Allow-Origin`

```
const http = require('http')

var server = http.createServer(function (req, res) {
  console.log("got conncet");
  res.writeHeader(200, {
    'content-type': 'text/javascript;charset="utf-8"',
    'Access-Control-Allow-Origin': '*' // * 代表允许所有的源访问
  })
  const msg = { 'a': 'CORS', 'b': 'JSONP' }
  const mm = JSON.stringify(msg)
  let outMsg = `getData(${mm})`
  res.end(outMsg)
})

server.listen(9000)
console.log(`Serve running at http://127.0.0.1:9000/`);
```

重启node服务，再试一次

![3](https://gitee.com/youknowHRT/document/raw/master/imgs/3.png)

报错没有了，打开network可以看到 `Access-Control-Allow-Origin` 已经生效，数据也成功获取到

![6](https://gitee.com/youknowHRT/document/raw/master/imgs/4.png)





#### 对于非简单请求

将上面请求的方法从get改成put，再次请求 （put方法就属于非简单请求）

![7](https://gitee.com/youknowHRT/document/raw/master/imgs/8.png)

可以看到跨域报错又出现了，刚才设置的响应头依然存在，却不起作用了。

![4](https://gitee.com/youknowHRT/document/raw/master/imgs/6.png) 另外这里可以看到我们本来发送的是put请求，请求方法那里写的却是options。原因就是对于非简单请求浏览器会先发送一次预检，预检通过才会发送真正的请求，这个options就是预检请求，因为没有通过，所以也就没有发送真正的请求

![5](https://gitee.com/youknowHRT/document/raw/master/imgs/5.png)

其实报错中也写的很明白，我们访问的资源没有设置允许对PUT这个方法的访问

在server.js中给响应头添加 `Access-Control-Allow-Methods`，设置允许put方法的请求

```
const http = require('http')

var server = http.createServer(function (req, res) {
  console.log("got conncet");
  res.writeHeader(200, {
    'content-type': 'text/javascript;charset="utf-8"',
    'Access-Control-Allow-Origin': '*',// * 代表允许所有的源访问
    'Access-Control-Allow-Methods': 'PUT,POST,GET'
  })
  const msg = { 'a': 'CORS', 'b': 'JSONP' }
  const mm = JSON.stringify(msg)
  let outMsg = `getData(${mm})`
  res.end(outMsg)
})

server.listen(9000)
console.log(`Serve running at http://127.0.0.1:9000/`);
```

重启服务以后再次请求，可以看到跨域报错就消失了

![9](https://gitee.com/youknowHRT/document/raw/master/imgs/9.png)

还可以看到依然先进行了一次预检请求，这次预检请求通过了，继续发送了put请求

![10](https://gitee.com/youknowHRT/document/raw/master/imgs/11.png)

![8](https://gitee.com/youknowHRT/document/raw/master/imgs/7.png)

非简单请求还对请求头的信息有所限制，原理还是一样的，通过`Access-Control-Allow-Headers`在返回头中设置允许的访问头就ok了,比如

```
var xhr = new XMLHttpRequest();
xhr.open('put', 'http://127.0.0.1:9000');
xhr.setRequestHeader("Cors-Test", "biubiubiu");
xhr.send();
```

设置允许 X-Corx-Test这个请求头

```
const http = require('http')

var server = http.createServer(function (req, res) {
  console.log("got conncet");
  res.writeHeader(200, {
    'content-type': 'text/javascript;charset="utf-8"',
    'Access-Control-Allow-Origin': '*',// * 代表允许所有的源访问
    'Access-Control-Allow-Methods': 'PUT,POST,GET',
    'Access-Control-Allow-Headers': 'Cors-Test'
  })
  const msg = { 'a': 'CORS', 'b': 'JSONP' }
  const mm = JSON.stringify(msg)
  let outMsg = `getData(${mm})`
  res.end(outMsg)
})

server.listen(9000)
console.log(`Serve running at http://127.0.0.1:9000/`);
```

请求通过

![12](https://gitee.com/youknowHRT/document/raw/master/imgs/12.png)

## JSONP

去掉node服务中对CORS的配置

```
const http = require('http')

var server = http.createServer(function (req, res) {
  console.log("got conncet");
  res.writeHeader(200, {
    'content-type': 'text/javascript;charset="utf-8"',
  })
  const msg = { 'a': 'CORS', 'b': 'JSONP' }
  const mm = JSON.stringify(msg)
  let outMsg = `getData(${mm})`
  res.end(outMsg)
})

server.listen(9000)
console.log(`Serve running at http://127.0.0.1:9000/`);
```

前面说过jsonp的原理就是使用script标签的src不受浏览器跨域限制的原理

```
var script = document.createElement('script');
script.src = 'http://127.0.0.1:9000';
document.head.appendChild(script);
function getData(res) {
  console.log(res);
}
```

成功获取数据

![11](https://gitee.com/youknowHRT/document/raw/master/imgs/10.png)



getData()这个函数名字要前后端约定一致，一般使用string+随机数来生成函数名，另外获取完数据以后最好移除一下script标签

```
var script = document.createElement('script');
script.src = 'http://127.0.0.1:9000';
document.head.appendChild(script);
function getData(res) {
  console.log(res);
  document.head.removeChild(script);
}
```

