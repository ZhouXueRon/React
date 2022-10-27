> 官网：https://react.docschina.org/

# 起步

## React简介

### 什么是React?

​	react是由Facebook研发的、用于解决UI复杂度的开源**JavaScript库**，目前由React联合社区维护。

> 它不是框架，只是为了解决UI复杂度而诞生的一个库

### React的特点

- **轻量**：React的开发版本所有源码（包含注释）仅3000多行
- **原生**：所有的React的代码都是用原生JS书写而成的，不依赖其他任何库
- **易扩展**：React对代码的封装程度较低，也没有过多的使用魔法，所以React中的很多功能都可以扩展
- **不依赖宿主环境**：React只依赖原生JS语言，不依赖任何其他东西，包括运行环境。因此，它可以被轻松的移植到浏览器、桌面应用、移动端
- **渐进式**：React并非框架，对整个工程没有强制约束力。这对与那些已存在的工程，可以逐步的将其改造为React，而不需要全盘重写
- **单向数据流**：所有的数据自顶而下的流动
- **用JS代码声明界面**
- **组件化**

### 对比Vue

|   对比项   | Vue  | React |
| :--------: | :--: | :---: |
| 全球使用量 |      |   √   |
| 国内使用量 |  √   |       |
|    性能    |  √   |   √   |
|   易上手   |  √   |       |
|   灵活度   |      |   √   |
|  大型企业  |      |   √   |
|  中型企业  |  √   |       |
|    生态    |      |   √   |

### 学习路径

> 整体原则：熟悉API --> 深入理解原理

1. React
   - 基础：掌握React的基本使用方法，有能力制作各种组件，并理解其基本运作原理
   - 进阶：掌握React中的一些黑科技，提高代码质量

2. React-Router：相当于vue-router
3. Redux：相当于Vuex
   - Redux本身
   - 各种中间件

4. 第三方脚手架：umi
5. UI库：Ant Design，相当于Vue的Element-UI 或 IView
6. 源码部分
   - React源码分析
   - Redux源码分析

## Hello World

> ### 直接在页面上使用React，引入下面的JS

~~~html
<!-- React的核心库，与宿主环境无关 -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<!-- 依赖核心库，将核心库的功能与页面结合 -->
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
~~~

==说明：==crossorigin用于跨域访问报错时显示更详细的错误信息

### 创建React元素

1. **React.createElement**，用于创建一个React元素，称作虚拟DOM，本质上是一个对象

   - 参数1：元素类型，如果是字符串，一个普通的HTML元素
   - 参数2：元素的属性，一个对象
   - 后续参数：元素的子节点

   ~~~html
   <script>
       // 创建一个span元素
       const span = React.createElement("span", {}, "一个sapn元素")
       // 创建一个h1元素
       const h1 = React.createElement("h1", {
           title: "第一个React元素",
       }, "Hello", "World", span);
       // 渲染数据
       ReactDOM.render(h1, document.getElementById("root"));
   </script>
   ~~~

2. **JSX**

   JS扩展语法，需要使用babel进行转义

   ~~~html
   <script type="text/babel">
   	// 创建一个span元素
   	const span = <span>一个span元素</span>
   	// 创建一个h1元素
   	const h1 = <h1 title="第一个React元素">
   		Hello World
   		<span>一个span元素</span>
       </h1>
       // 渲染数据
       ReactDOM.render(h1, document.getElementById("root"));
   </script>
   ~~~

   

