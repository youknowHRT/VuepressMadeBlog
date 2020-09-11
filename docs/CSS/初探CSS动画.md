# 初探CSS动画



### 5秒实现左移动画

如果我们想要实现一个div向左移动的动画，应该怎么做呢?

#### 1.通过设定left

css

```
#demo { background-color: blue; height: 100px; width: 100px; position: absolute; }
```

html

```
<div id="demo"> </div>
```

js

```
var n = 1
var moveAnimation = setInterval(() => {
    if (n <= 100) {
      demo.style.left = n / 100 * 300 + 'px';
      n++
    }
    else {
      clearInterval(moveAnimation)
    }
}, 1000 / 20)
```

即通过改变left实现div右移

#### 2. 通过用transform + transition

实现思路：使用transform属性里的translateX来完成移动，然后加上transition的过渡效果。

css

```
#demo {
      background-color: blue;
      height: 100px;
      width: 100px;
      position: absolute;
      transition: all 5s;
      /*让整个移动在1s内完成,transition的作用就是给我开头和结尾，我来补充中间帧*/
    }

.right {
      transform: translateX(300px);
      /*用translateX(100px)来实现右移*/
    }
```

html

```
<div id="demo"> </div>
```

js

```
demo.onclick = () => {
    demo.classList.add('right')
  }
//给按钮添加点击事件，当点击按钮的时候，就给demo加上right类
```

#### 3. 用animation

animation的核心就是定义关键帧， 其中moveToRight是这个动画的名字

```
@keyframes moveToRight {
      from {
        transform: none;
      }
      to {
        transform: translateX(300px);
      }
    }
```

在#demo中添加animation

```
#demo {
      background-color: blue;
      height: 100px;
      width: 100px;
      position: absolute;
      animation:moveToRight 5s ;
      animation-fill-mode:forwards;
      /*animation-fill-mode属性使当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。*/
    }
```

