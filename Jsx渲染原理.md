<!--
 * @Author: SoChichung
 * @Date: 2022-08-07 20:42:23
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-09-21 09:18:19
 * @Description: 
 * 
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved. 
-->
## jsx 渲染原理

### 示例

```JavaScript
const jsx = React.createElement(
  "div",
  { className: "box" },
  React.createElement(
    "h2",
    { className: "title" },
    "\u6211\u662F\u6807\u9898"
  ),
  React.createElement(
    "ul",
    {
      className: "list",
      style: {
        color: 'red'
      }
    },
    React.createElement("li", null, "\u5217\u88681"),
    React.createElement("li", null, "\u5217\u88682"),
    React.createElement("li", null)
  )
);
console.log(jsx);
```

### 解析

   @1 基于 babel-preset-react-app 语法包，可以把jsx语法，渲染解析为 React.createElement 格式 
    遇到“HTML标签/调用组件标签”，就会创建为createElement格式
    React.createElement(
      标签名/组件,
      属性对象:对象中包含标签上设置的各个属性，如果没有任何属性，值是null,（就像示例里的li标签）
      后续的参数都是其子节点
    )
  @2 把React.createElement方法执行，创建出“JSX元素对象/虚拟DOM对象/React child”
    {
      $$typeof: Symbol(react.element),
      type: "div" ,  //标签名/组件
      props: {
        含解析出来的各个属性,
        如果有子节点，则多一个chldren的属性，没有子节点就没有这个属性，属性值可能是一个值或者是一个数组
      },
      ref: null,
      key: null
    }