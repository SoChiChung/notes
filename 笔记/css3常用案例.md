目录



- 1. li 标签基数项列表高亮
```JavaScript

<style>
 li: nth-child(odd) {
color:pink;
}
</style>

<ul>

<li>1</li>
<li>2</li>
<li>3</li>
</ul>
```

# 2. 文字垂直居中 && 外边距元素居中

在一行盒子里可以让行高等于盒子的高度 从而使文字垂直居中

外边距元素居中的两个条件：

1. 元素必须是块元素
2. 元素必须设置宽度

# 3. 行间距 & 首行缩进 & 字间距 & 单词间距

行间距 line-height
首行缩进 text-indent 建议以 em 做单位
字间距 letter-spacing
单词间距 word-spacing

# 4. 文字阴影

text-shadow

# 5. 图片平铺

background-repeat: 是否平铺 no-repeat

# 6. 三种样式表总结

样式表  | 优点 |缺点| 使用情况 |控制范围
:-: | :-: | :-: | :-: | -:
行内样式 | 书写方便 权重高 | 没有实现结构样式分离 |少 | 控制一个标签|
内嵌样式 | 部分结构样式分离| 没有实现彻底结构样式分离 | 较多 | 控制一个页面|
外部样式 | 完全实现结构样式分离| 需要引入 | 最多 | 控制整个站点|

# 7. 去掉 a 标签的下划线

text-decoration:none;

# 8. CSS 的三大特性

层叠 继承  优先级 是我们学习 CSS 必须掌握的三个特性。

## 8.1. 层叠性

所谓层叠性是指多种 CSS 样式的叠加。

是浏览器处理冲突的一个能力，如果一个属性通过两个选择器设置到同一个元素上，那么这个时候一个属性就会将另一个属性层叠掉

比如先给某个标签指定了内部文字颜色为红色，接着又指定了颜色为蓝色，此时出现一个标签指定了相同样式不同值的情况，这就是样式冲突。

一般情况下，如果出现样式冲突，则会按照 CSS 书写的顺序，以最后的样式为准。

~~~
CSS 最后的执行口诀：  长江后浪推前浪，前浪死在沙滩上。
~~~

## 8.2. CSS 继承性

所谓继承性是指书写 CSS 样式表时，子标签会继承父标签的某些样式，如文本颜色和字号。想要设置一个可继承的属性，只需将它应用于父元素即可。

简单的理解就是：  子承父业。

~~~
CSS 最后的执行口诀：  龙生龙，凤生凤，老鼠生的孩子会打洞。
~~~

## 8.3. CSS 优先级

定义 CSS 样式时，经常出现两个或更多规则应用在同一元素上，这时就会出现优先级的问题。

### 8.3.1. CSS 特殊性（Specificity）

关于 CSS 权重，我们需要一套计算公式来去计算，这个就是 CSS Specificity，我们称为 CSS 特性或称非凡性，它是一个衡量 CSS 值优先级的一个标准 具体规范入如下：

specificity 用一个四位的数 字串 (CSS2 是三位）来表示，更像四个级别，值从左到右，左面的最大，一级大于一级，数位之间没有进制，级别之间不可超越。

| 继承或者* 的权重      | 0,0,0,0 |
| --------------- | ------- |
| 每个元素（标签）权重为    | 0,0,0,1 |
| 每个类，伪类权重为      | 0,0,1,0 |
| 每个 ID 权重为        | 0,1,0,0 |
| 每个行内样式权重       | 1,0,0,0 |
| 每个！important 权重 | ∞ 无穷大   |
 ~~~

 比如的例子：

 ```javascript
    <style>
        #div1 {
            border: 1px solid black;
            font-size: 20px;
            color: skyblue;
        }

        ul li {//权重：0001+0001=0002
            color: green;
        }

        li {//0001
            color: red;
        }
    </style>
    <div id="app">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>//li是绿色
 ```

div ul  li   ------>      0,0,0,3

.nav ul li   ------>      0,0,1,2

a:hover      -----—>      0,0,1,1

.nav a       ------>      0,0,1,1

# 10. nav p       ----->       0,1,0,1

​

 注意： 数位之间没有进制 比如说： 0,0,0,5 + 0,0,0,5 =0,0,0,10 而不是 0,0, 1, 0， 所以不会存在 10 个 div 能赶上一个类选择器的情况。

总结优先级：

1. 使用了 !important 声明的规则。
2. 内嵌在 HTML 元素的 style 属性里面的声明。
3. 使用了 ID 选择器的规则。
4. 使用了类选择器、属性选择器、伪元素和伪类选择器的规则。
5. 使用了元素选择器的规则。
6. 只包含一个通用选择器的规则。

 ~~~
总结：权重是优先级的算法，层叠是优先级的表现

~~~

在考虑权重时，初学者还需要注意一些特殊的情况，具体如下：

~~~
继承样式的权重为 0。即在嵌套结构中，不管父元素样式的权重多大，被子元素继承时，他的权重都为 0，也就是说子元素定义的样式会覆盖继承来的样式。

行内样式优先。应用 style 属性的元素，其行内样式的权重非常高，可以理解为远大于 100。总之，他拥有比上面提高的选择器都大的优先级。

权重相同时，CSS 遵循就近原则。也就是说靠近元素的样式具有最大的优先级，或者说排在最后的样式优先级最大。

CSS 定义了一个！important 命令，该命令被赋予最大的优先级。也就是说不管权重如何以及样式位置的远近，!important 都具有最大优先级。
---

# 9. 圆角边框 & 合并边框

border-radius：左上角 右上角 左下角 右下角

合并边框

border-collapse :collapse
---

# 10. 行内元素只有左右边距没有上下边距&&盒子高度宽度的计算和使用优先级

由于在 ie6 等低版本的浏览器中有问题 所以尽量不要给行内元素指定上下内边距

## 10.1 width 和 height W3C 规范下的盒子高度宽度的计算

大多数浏览器，如 Firefox、IE6 及以上版本都采用了 W3C 规范，符合 CSS 规范的盒子模型的总宽度和总高度的计算原则是：

~~~
盒子的总宽度 = width+ 左右内边距之和 + 左右边框宽度之和 + 左右外边距之和
~~~

~~~
盒子的总高度 = height+ 上下内边距之和 + 上下边框宽度之和 + 上下外边距之和
~~~

~~~
而我们平时用的 width height 属性 设置的是元素的宽度和高度 也就是盒子模型最里面的元素的宽度和高度
而CSS3有个box-sizing 属性 当他被设置为border-box的时候 去除margin后的总宽度和总高度就固定了 无论padding border 盒子都不会被撑开
~~~
## 优先级
我们根据稳定性来分，建议如下：

按照 优先使用  宽度 （width）  其次 使用内边距（padding）    再次  外边距（margin）。   

```
  width >  padding  >   margin   
```

原因：

1. margin 会有外边距合并 还有 ie6下面margin 加倍的bug（讨厌）所以最后使用。

2. padding  会影响盒子大小， 需要进行加减计算（麻烦） 其次使用。

3. width   没有问题（嗨皮）我们经常使用宽度剩余法 高度剩余法来做。

## 10.1 width 和 height W3C 规范下的盒子高度宽度的计算
---
#  11 li标签的小圆点
## 修改li的前面默认圆点的颜色
先给 li 加个颜色样式，这样子可以改变圆点和文本的颜色，然后给 li 里面的文本再套个div或者其他标签，再去改变添加标签的颜色，这样子就达到圆点和文本异色的目的了
```JavaScript
.corre_lation ul li{
list-style: disc;
color: #333333;
font-size:14px;
line-height: 28px;
content:".";
color: #A3A3A4
}
.corre_lation ul li div{
color: #333333;
}
```
---
# 12 浮动
## 与display inline-block的区别
当元素使用了display inline-block 后虽然可以实现行内元素排成一行但是元素之间有间隙 很难消除

**空隙产生原因**：HTML中的换行符、空格符、制表符等空白符，字体大小不为0的情况下，空白符占据一定宽度，使用inline-block会产生元素间的空隙。

*解决方法* ：

1. 父元素的font-size设置为0，子元素的font-size设置为实际大小；
2. 子元素设置浮动；
3. 把所有的子元素写在一行；
4. 有时候子元素内容较长，所有子元素写在一行导致代码的可读性很差，这时候采用下面的写法（用HTML注释符把子元素连接起来）：
5. 父元素word-spacing设置负值（具体设为多少，我测试的结果显示：不同浏览器还不完全一致，暂不推荐此种方法）。
## 浮动需要用父元素包围
浮动首先创建包含块的概念（包裹）。就是说， 浮动的元素总是找理**它最近的父级元素对齐**。但是不会超出内边距的范围。 
如果没有父元素，浮动的元素会站不住位置（但是文字会保留位置），她浮动的位置会被后面的元素占领。
所以我们需要一个父元素包裹浮动元素 站住位置
## 清除浮动
如果子元素全浮动 父元素没有设置高度和宽度（一般来说都不会设置宽度高度） 父元素的高度会为0,导致位置被占，所以这个时候需要清除浮动（清除浮动带来的副作用）

**1、父级div定义伪类：after和zoom**
```JavaScript
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
   </style> 
<div class="div1 clearfloat"> 
<div class="left">Left</div> 
<div class="right">Right</div> 
</div>
<div class="div2">
   div2
   </div>
```

- 原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题
- 优点：浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
- 缺点：代码多，不少初学者不理解原理，要两句代码结合使用，才能让主流浏览器都支持
- 建议：推荐使用，建议定义公共类，以减少CSS代码
- 评分：★★★★☆

**2.在结尾处添加空div标签clear:both**
```JavaScript
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat{clear:both}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
<div class="clearfloat"></div>
</div>
<div class="div2">
   div2
   </div>
```
- 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度
- 优点：简单，代码少，浏览器支持好，不容易出现怪问题
- 缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不爽
- 建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法
- 评分：★★★☆☆

**3.父级div定义height**
```JavaScript
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/height:200px;}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div> 
</div>
<div class="div2">
   div2
   </div>
```
- 原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题
- 优点：简单，代码少，容易掌握
- 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题
- 建议：不推荐使用，只建议高度固定的布局时使用
- 评分：★★☆☆☆

**4.父级div定义overflow:hidden或者auto**
```JavaScript
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:hidden}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
   </div>
```
- 原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden/auto时，浏览器会自动检查浮动区域的高度
- 优点：简单，代码少，浏览器支持好
- 缺点：overflow:hidden：不能和position配合使用，因为超出的尺寸的会被隐藏 

          overflow：auto:内部宽高超过父级div时，会出现滚动条。
- 建议：只推荐没有使用position或对overflow:hidden理解比较深的朋友使用
- 评分：★★★☆☆

还有**父级div一起浮动** **display改成table** **结尾处加br标签clear:both** 这些方法太捞了就不具体写了

# 12 ::before和::after伪元素的用法
## 介绍 
css3为了区分伪类和伪元素，伪元素采用双冒号写法。

常见伪类——:hover,:link,:active,:target,:not(),:focus。

常见伪元素——::first-letter,::first-line,::before,::after,::selection。

::before和::after下特有的content，用于在css渲染中向元素逻辑上的头部或尾部添加内容。

这些添加不会出现在DOM中，不会改变文档内容，不可复制，仅仅是在css渲染层加入。

所以不要用:before或:after展示有实际意义的内容，尽量使用它们显示修饰性内容，例如图标

## content属性
::before和::after必须配合content属性来使用，content用来定义插入的内容，content必须有值，至少是空。默认情况下，伪类元素的display是默认值inline，可以通过设置display:block来改变其显示。
- String 

使用引号包一段字符串，将会向元素内容中添加字符串。如：a:after{content:""}
- attr() 

    通过attr()调用当前元素的属性，比如将图片alt提示文字或者链接的href地址显示出来。
    
- url()/uri() 

- counter()
  调用计数器，可以不使用列表元素实现序号功能。

  # 13 定位

  ## 定位属性

  1、边偏移

  | 边偏移属性 | 描述                                           |
  | ---------- | ---------------------------------------------- |
  | top        | 顶端偏移量，定义元素相对于其父元素上边线的距离 |
  | bottom     | 底部偏移量，定义元素相对于其父元素下边线的距离 |
  | left       | 左侧偏移量，定义元素相对于其父元素左边线的距离 |
  | right      | 右侧偏移量，定义元素相对于其父元素右边线的距离 |

  也就说，以后定位要和这边偏移搭配使用了， 比如 top: 100px;  left: 30px; 等等

  2、定位模式

  在CSS中，position属性用于定义元素的定位模式，其基本语法格式如下：

  选择器{position:属性值;}

  position属性的常用值

  | 值       | 描述                                             |
  | -------- | ------------------------------------------------ |
  | static   | 自动定位（默认定位方式）                         |
  | relative | 相对定位，相对于其原文档流的位置进行定位         |
  | absolute | 绝对定位，相对于其上一个已经定位的父元素进行定位 |
  | fixed    | 固定定位，相对于浏览器窗口进行定位               |

  ## 相对定位

  

相对定位是将元素相对于它在标准流中的位置进行定位，当position属性的取值为relative时，可以将元素定位于相对位置。

对元素设置相对定位后，可以通过边偏移属性改变元素的位置，**但是它在文档流中的位置仍然保留**。

~~~
注意：    相对定位最重要的一点是，它可以通过边偏移移动位置，但是原来的所占的位置，继续占有。

就是说，相对定位的盒子仍在标准流中，它后面的盒子仍以标准流方式对待它。

~~~

# 绝对定位

## 父级没有定位

若所有父元素都没有定位，以浏览器为准对齐(document文档)。

### 父级有定位

绝对定位是将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。 

### 绝对定位的盒子没有边偏移

如果只是给盒子指定了 定位，但是没有给与边偏移，则改盒子以标准流来显示排序，和上一个盒子的底边对齐，但是不占有位置。

~~~
[**注意**] 如果文档可滚动，绝对定位元素会随着它滚动，因为元素最终会相对于正常流的某一部分定位。

当position属性的取值为absolute时，可以将元素的定位模式设置为绝对定位。

注意：    绝对定位最重要的一点是，它可以通过边偏移移动位置，但是它完全脱标，完全不占位置。
~~~

## 固定定位fixed(认死理型)

固定定位是绝对定位的一种特殊形式，它以浏览器窗口作为参照物来定义网页元素。当position属性的取值为fixed时，即可将元素的定位模式设置为固定定位。

当对元素设置固定定位后，它将脱离标准文档流的控制，始终依据浏览器窗口来定义自己的显示位置。不管浏览器滚动条如何滚动也不管浏览器窗口的大小如何变化，该元素都会始终显示在浏览器窗口的固定位置。

固定定位有两点：

1. 固定定位的元素跟父亲没有任何关系，只认浏览器。
2. 固定定位完全脱标，不占有位置，不随着滚动条滚动。

# 14 叠放次序（z-index）&overflow 溢出

当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。

在CSS中，要想调整重叠定位元素的堆叠顺序，可以对定位元素应用z-index层叠等级属性，其取值可为正整数、负整数和0。

比如：  z-index: 2;

注意：

1. z-index的默认属性值是0，取值越大，定位元素在层叠元素中越居上。
2. 如果取值相同，则根据书写顺序，后来居上。
3. 后面数字一定不能加单位。
4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性，亦不可指定此属性。

## overflow 溢出

检索或设置当对象的内容超过其指定高度及宽度时如何管理内容。

visible : 　不剪切内容也不添加滚动条。

auto : 　 超出自动显示滚动条，不超出不显示滚动条

hidden : 　不显示超过对象尺寸的内容，超出的部分隐藏掉

scroll : 　不管超出内容否，总是显示滚动条