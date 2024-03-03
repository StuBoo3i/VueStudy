# demo
A project to study the vue3.

### 目录结构
config:配置目录，包括端口号等，可以默认
node_modules:npm加载的项目依赖模块。
src：这里是我们要开发的目录，
assets：放置一些图片，如，logo
components：目录里放置了一个组件文件，可以不用
App.vue:项目的入口文件，我们可以将组件写这里，不使用components
main.js：项目的核心文件
static：静态资源目录，如图片字体等
test：初始测试文件可以删除
.xxxx：配置文件
index.html:首页入口文件，
package：项目配置文件

### 文本插值
在文本插值：`{{}}`中可以使用Javascript表达式
每个文本插值的绑定仅支持单一表达式，也就是一段能够被求值的JavaScript代码。一个简单的判断方法是是否可以写在return后面。
条件判断语句也不可以，必须是单一表达式，可以使用三目表达式。
双大括号会将数据插值为纯文本，而不是HTML，若想插入HTML，使用`v-html`指令

### 属性绑定
双大括号不能在HTML attributes 中使用，想要响应式的绑定一个attribute，应该使用`v-bind`指令
`<div v-bind:class="msg">测试</div>`
文本值的绑定是通过双花括号，属性的绑定通过`v-bind`：
`v-bind`指令指示Vue将元素的id attribute 与组件的dynamicID属性保持一致，如果绑定的值是null或
undefined，那么该attribute将会从渲染的元素上移除

简写:`<div :class="msg"></div>`

布尔型attribute 依据 true/false 值来决定 attribute 是否应该存在于该元素上，disabled是常见例子

可以通过JavaScript对象来动态绑定多个attribute

### 条件渲染
在Vue中，提供了条件渲染，这类似于JS中的条件语句：
`·v-if
·v-else
·v-else-if
·v-show`

`v-if`指令用于条件性的渲染一块内容，这块内容只会在指令的表达式返回真值时才会被渲染

`v-if` vs `v-show`
`v-if`是"真实的"按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
`v-if` 也是惰性的:如果在初次渲染时条件值为false，则不会做任何事。条件区块只有当条件首次变为true时才被渲染。
相比之下，`v-show`简单许多，元素无论初始条件如何，始终会被渲染，只有CSS display属性会被切换。
总的来说，`v-if`.有更高的切换开销，而`v-show`有更高的初始渲染开销。
因此，如果需要频繁切换，则使用`v-show`较好;如果在运行时绑定条件很少改变，则`v-if`会更合适。

### 列表渲染
可以使用`v-for`指令基于一个数组来渲染一个列表，`v-for`指令的值需要使用`item in items`的语法
其中items是元数据的数组，而item是迭代项的别名
`v-for` 也可以支持使用可选的第二个参数表示当前项的位置索引。
也可以使用of替代in作为分隔符，更接近JS的语法
`v-for`可以遍历一个对象的所有属性

通过key管理状态
Vue默认按照"就地更新"的策略来更新通过`v-for`渲染的元素列表。当数据项的顺序改变时，
Vue不会随之移动DOM元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。
为了给Vue一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，
你需要为每个元素对应的块提供一个唯一的key attribute

提示
key在这里是一个通过`v-bind`绑定的特殊attribute
推荐在任何可行的时候为`v-for`提供一个key attribute
key绑定的值期望是一个基础类型的值，例如字符串或number类型

### 事件处理
我们可以使用`v-on`指令(简写为`@`)来监听DOM事件，并在事件触发时执行对应的JavaScript。
用法:

`v-on:click="methodName"`
`@click="handler"`

事件处理器的值可以是

* 内联事件处理器:事件被触发时执行的内联JavaScript语句(与onclick类似)
* 方法事件处理器:一个指向组件上定义的方法的属性名或是路径

事件参数可以获取event对象和通过事件传递数据

事件修饰符

在处理事件时调用 `even.preventDefault()`或 `event.stopPropagation()` 是很常见的。
尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节
会更好为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**，常用有以下几个:

* `.stop`
* `.prevent`
* `.once`
* `.enter`

具体参考地址:https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers

### 数组变化侦听
变更方法：Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `sort()`
* `reverse()`

替换一个数组：变更方法，顾名思义，就是会对调用它们的原数组进行变更。
相对地，也有一些不可变 (immutable)方法，例如 

* `filter()`
* `concat()`
* `slice()`

这些都不会更改原数组，而总是返回一个新数组。当遇到的是非变更方法时，我们需要将旧的数组替换为新的

### 计算属性
模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。
因此我们推荐使用计算属性来描述依赖响应式状态的复杂逻辑.

计算属性缓存 vs 方法

你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果

重点**区别**:
* 计算属性:**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算
* 方法:方法调用总是会在重渲染发生时再次执行函数

### class绑定
数据绑定的一个常见需求场景是操纵元素的 CSS class 列表，因为 `class` 是 attribute，
我们可以和其他attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。
但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。
因此，Vue 专门为 `class` 的 `v-bind` 用法提供了特殊的功能增强。
除了字符串外，表达式的值也可以是对象或数组

数组和对象嵌套过程中，只能是数组嵌套对象，不能反其道而行

### Style绑定
数据绑定的一个常见需求场景是操纵元素的 CSS style列表，
因为`style`是 attribute，我们可以和其他attribute一样使用 `v-bind` 将它们和动态的字符串绑定。
但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。
因此，Vue 专门为`style`的 `v-bind` 用法提供了特殊的功能增强。
除了字符串外，表达式的值也可以是对象或数组

### 侦听器
我们可以使用 `watch` 选项在每次响应式属性发生变化时触发一个函数

### 表单输入绑定
在前端处理表单时，我们常常需要将表单输入框的内容同步给JavaScript 中相应的变量。
手动连接值绑定和更改事件监听器可能会很麻烦,`v-model`指令帮我们简化了这一步骤。

`v-model`也提供了修饰符:
* `.lazy`
* `.number`
* `.trim `

默认情况下，`v-mode` 会在每次 `input` 事件后更新数据,添加`.lazy`修饰符来改为在每次 `change` 事件后更新数据

### 模板引用--获取DOM操作
虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作， 但在某些情况下，我们仍然需要直接访问底层 DOM 元素。
要实现这一点， 我们可以使用特殊的 `ref` attribute
挂载结束后引用都会被暴露在`this.$refs`之上

### 组件组成
组件最大的优势就是可复用性
当使用构建步骤时，我们一般会将Vue组件定义在一个单独的`.vue`文件中，这被叫做单文件组件(简称SFC)

组件组成结构
* `<template>`
* `    <div>承载标签</div>`
* `</template>`
* `<script>`
* `export default {}`
* `</script>`
* `<style scoped>`
* `</style>`

组件引入
* `<template>`
* `   <!--第三步:显示组件-->`
* `   <MyComponent />`
* `</template>`
* `<script>`
* `// 第一步:引入组件`
* `import MyComponent from"./components/MyComponent.vue`
* `export default {`
* `   //第二步:注入组件`
* `   components:{`
* `       MyComponent`
* `   }`
* `}`
* `</script>`
















