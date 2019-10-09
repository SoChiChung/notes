# React

## JSX

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React 并没有采用将*标记与逻辑进行分离到不同文件*这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现[*关注点分离*](https://en.wikipedia.org/wiki/Separation_of_concerns)。

**React [不强制要求](https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/react-without-jsx.html)使用 JSX**，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息

### 预防 XSS攻击

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 [XSS（cross-site-scripting, 跨站脚本）](https://en.wikipedia.org/wiki/Cross-site_scripting)攻击。

### React.createElement()



Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。以下两种示例代码完全等效：

```JavaScript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```JavaScript
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

**在实践中，大多数 React 应用只会调用一次 `ReactDOM.render()`**

## 组件



**组件名称必须以大写字母开头。**

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**



### state

+ state是组件对象最重要的属性, 值是对象(可以包含多个数据)
+ 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件



### ref

在典型的 React 数据流中，[props](https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/components-and-props.html) 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。

### #### 使用**ref**的场合



- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。