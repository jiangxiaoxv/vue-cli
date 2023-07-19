# Vue-cli 学习(是一个基于 vue.js 进行快速开发的完整系统)

1. 安装

- yarn global add @vue/cli

2. @vue/cli-service 是一个开发环境依赖
3. cli 服务（@vue/cli-service）
   - cli 服务是构建与 webpack 和 webpack-dev-server 之上的
   - 加载其他 cli 插件的核心服务
   - 一个针对绝大部分应用优化的内部 webpack 配置
   - 项目内部 vue-cli-service 命令，提供 serve、build 和 inspect 命令
4. cli 插件
   - 以@vue/cli-plugin 开头
   - 插件可以更改 webpack 的内部配置，也可以向 vue-cli-service 注入命令
5. npm uninstall -g @vue/cli 卸载 3.x 脚本脚手架

6. 安装@vue/cli-init 作为桥接工具，@vue/cli 是 vue3 的，有了桥接工具可以使用 vue2
7. vue init webpack hello 创建工程，是 vue2 的语法
8. vue create hello 创建的工程是 vue3 的
