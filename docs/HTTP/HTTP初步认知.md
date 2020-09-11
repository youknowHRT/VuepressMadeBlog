# HTTP简单认知

### 1、HTTP的请求和响应

HTTP的请求和响应都包含4个部分，在命令行输入
`curl -v www.baidu.com`
**发出以下请求**

```undefined
> GET / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.60.0
> Accept: */*
>
```

1. 第一部分为：动词+路径+协议/版本（第一行）

2. 第二部分每行格式：key1: value1
   上面引用代码中 'Host'; 'User-Agent'; 'Accept'都是key，冒号后面的为value

3. 第三部分为：回车（**"\n"**，就是空着无内容的一行，用以分隔第二和第四部分，见上面代码第5行）

4. 第四部分为：要上传的数据（也可以没有,上面代码中也未显示）

   

**响应如下**

```dart
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
< Connection: Keep-Alive
< Content-Length: 2381
< Content-Type: text/html
< Date: Mon, 16 Jul 2018 00:48:49 GMT
< Etag: "58860504-94d"
< Last-Modified: Mon, 23 Jan 2017 13:28:36 GMT
< Pragma: no-cache
< Server: bfe/1.0.8.18
< Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/
<
{ [1040 bytes data]
100  2381  100  2381    0     0  38403      0 --:--:-- --:--:-- --:--:-- 38403<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>
```

响应与请求类似，但是第一部分格式不同，
响应第一部分格式为：协议/版本号 状态码 状态解释
第四部分为需要下载的内容（见最后一行）

------

### 2、如何用Chrome开发者工具查看 HTTP 请求内容

1. 打开Chrome
2. 按F12，打开network
3. 在导航栏输入网址
4. 在**Name**下点击网址，在傍边的Headers可以看到Response Headers以及Request Headers，分别为响应和请求。

查看请求部分，如下图流程

![img](https://gitee.com/youknowHRT/document/raw/master/imgs/webp.png)



1. 点击Request Headers，再点击view source

   **这步很重要，一定要点击view source**，如下图

   ![img](https://gitee.com/youknowHRT/document/raw/master/imgs/webp2.png)

   

2. 然后会看到请求第一部分和第二部分的内容

   ![img](https://gitee.com/youknowHRT/document/raw/master/imgs/webp3.png)

   

3. 第四部分可以点击preview或者response看到。

查看响应部分与请求类似，点击Response Headers。

------

### 3、如何使用 curl 命令

curl是利用URL语法在命令行方式下工作的开源文件传输工具。
语法为：
`curl [option] [url]`

输入以下指令向百度网站发出请求，百度网站同时返回响应。

`curl -v -s www.baidu.com`
curl默认动词为GET，-s参数不会报错和显示进度； -v参数可以显示一次 http 通信的整个过程
输入 -x 可以支持其他动词。