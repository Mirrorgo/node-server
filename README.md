资料:
- https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7
---
极其直接的必须掌握的知识点。

1. 异步流程控制学习重点
2. Api写法：Error-first Callback 和 EventEmitter
3. 中流砥柱：Promise
4. 终极解决方案：Async/Await

Node in action和了不起的Node.js是入门的绝好书籍，非常简单，各个部分都讲了，但不深入，看了之后，基本就能用起来了
当你用了一段之后，你会对Node.js的运行机制好奇，为啥呢？这时候去读朴大的《深入浅出Node.js》一书就能够解惑。原因很简单，九浅一深一书是偏向底层实现原理的书，从操作系统，并发原理，node源码层层解读。如果是新手读，难免会比较郁闷。
实践类的可以看看雷宗民（老雷）和赵坤（nswbmw）写的书

我一般给大家的推荐是把Node in action读上5遍10遍，入门干活足够了。剩下的就是反复实践，多写代码和npm模块就好。

学习方法, 看👉https://github.com/parro-it/awesome-micro-npm-packages

Web编程核心
- 异步流程控制（前面讲过了）
- 基本框架 Koa或Express，新手推荐Express，毕竟资料多，上手更容易。如果有一定经验，推荐Koa，其实这些都是为了了解Web编程原理，尤其是中间件机制理解。
- 数据库 mongodb或mysql都行，mongoose和Sequelize、bookshelf，TypeOrm等都非常不错。对于事物，不是Node.js的锅，是你选的数据库的问题。另外一些偏门，想node连sqlserver等估计还不成熟，我是不会这样用的。
- 模板引擎， ejs，jade，nunjucks。理解原理最好。尤其是extend，include等高级用法，理解布局，复用的好处。其实前后端思路都是一样的。

如何系统的学习node？
答:阶段
1/要会用，能完成工作任务
2/写点提高效率的工具
3/参与开源项目，甚至是node源码

1/《node in action》看五遍，然后就去写吧，别管代码质量如何，能写敢写
2/多用些模块，理解它们，如果有机会就自己写一下，万一有很多人用你，我小弟写过一个地区选择加载的json数据，star数不少呢
3/给别人贡献代码，要去学别人的习惯，网上有git标准工作流和提pr方法，你要做的是精研该模块代码，关注issue，其他就是等机会。

初学者推荐Express，如果有一定经验，推荐Koa。当然真正项目里还是推荐Eggjs

先说下我的招人标准，做技术总监时上指下派只要看好技术能力和态度即可，做CTO时要考虑团队文化，人品和能否在公司长留，所以不同的人面试要看的点是不一样的，我曾面过很多Node.js程序员，也见过很多面试题，汇总一下，大致有以下9个点：

基本的Node.js几个特性，比如事件驱动、非阻塞I/O、Stream等
异步流程控制相关，Promise是必问的
掌握1种以上Web框架，比如Express、Koa、Thinkjs、Restfy、Hapi等，会问遇到过哪些问题、以及前端优化等常识
数据库相关，尤其是SQL、缓存、Mongodb等
对于常见Node.js模块、工具的使用，观察一个人是否爱学习、折腾
是否熟悉linux，是否独立部署过服务器，有+分
js语法和es6、es7，延伸CoffeeScript、TypeScript等，看看你是否关注新技术，有+分
对前端是否了解，有+分
是否参与过或写过开源项目，技术博客、有+分
---

可以根据框架的特性进行分类
<table>
      <thead>
        <tr>
          <th>框架名称</th>
          <th>特性</th>
          <th>点评</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Express</td>
          <td>简单、实用，路由中间件等五脏俱全</td>
          <td>最著名的Web框架</td>
        </tr>
        <tr>
          <td>Koa</td>
          <td>专注于异步流程改进</td>
          <td>下一代Web框架</td>
        </tr>
        <tr>
          <td>Egg</td>
          <td>基于Koa，在开发上有极大便利</td>
          <td>企业级Web开发框架</td>
        </tr>
      </tbody>
    </table>

对于框架选型

业务场景、特点，不必为了什么而什么，避免本末倒置
自身团队能力、喜好，有时候技术选型决定团队氛围的，需要平衡激进与稳定
出现问题的时候，如果不慎踩到一个坑里，需要团队在无外力的情况能够搞定，否则会影响进度
> Tips：个人学习求新，企业架构求稳，无非喜好与场景而已