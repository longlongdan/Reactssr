# 主站个人页面

# 技术栈
- React Hooks/Redux
- node/express


# 本地开发环境启动
```
git clone git@github.com:longlongdan/Reactssr.git
npm install
npm run dev
```
访问路径为：http://localhost:8888/ 

# 新组件开发流程
- 在containers创建我们的组件，提供静态的getData方法在服务端获取数据,如果需要添加样式使用withStyle.js提供的方法对组件进行修饰
- router里设置路由
