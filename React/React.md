<!--
 * @Author: SoChichung
 * @Date: 2022-08-01 03:47:26
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-06 09:26:14
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
-->

[TOC]

# React

## babel 的编译

React 的源码（语法糖）：

```JavaScript
<div className="shopping-list">
  <h1>Shopping List for {props.name}</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
    <li>Oculus</li>
  </ul>
</div>;
```

babel 编译后：

```JavaScript
React.createElement("div", {
  className: "shopping-list"
}, React.createElement("h1", null, "Shopping List for ", props.name), React.createElement("ul", null, React.createElement("li", null, "Instagram"), React.createElement("li", null, "WhatsApp"), React.createElement("li", null, "Oculus")));
```

也就是说 像**<div/>** 之类的语法糖实际上是被转成了**React.createElement**处理

## function 组件 和 class 组件的区别

看实际业务的功能划分 function 和 class

如果组件不包含 state 只需一个 render 那么就使用 function 舍弃 r**ender（）**的写法

改成 **function MyComponent(props)**

## 渲染列表

- 渲染数据是数组： 用**list.map** 遍历
- 渲染数据是对象：用**Reflect.ownKeys** 遍历

  - Reflect.ownKeys 方法用于返回对象的所有属性，基本等同于 Object.getOwnPropertyNames 与 Object.getOwnPropertySymbols 之和。

  **React 中的\<li>的 key**

当我们需要渲染一个列表的时候，React 会存储这个列表每一项的相关信息。当我们要更新这个列表时，React 需要确定哪些项发生了改变。我们有可能增加、删除、重新排序或者更新列表项。

例如

```JavaScript
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

要转换成

```JavaScript
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

​ 除了数字发生了改变之外，阅读这段代码的人也许会认为我们把 Alexa 和 Ben 的顺序交换了位置，然后把 Claudia 插入到 Alexa 和 Ben 之间。然而，React 是电脑程序，它并不知道我们想要什么。

​ 因为 React 无法得知我们人类的意图，所以我们需要给每一个列表项一个确定的 _key_ 属性，它可以用来区分不同的列表项和他们的同级兄弟列表项。你可以使用字符串，比如 `alexa`, `ben`, `claudia`。如果我们使用从数据库里获取的数据，那么 Alexa、Ben 和 Claudia 的数据库 ID 就可以作为 key 来使用。

## 代码解释
