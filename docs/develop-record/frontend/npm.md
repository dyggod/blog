# npm

## [如何让yarn支持cnpm的完整加速](https://www.cnblogs.com/Chary/p/13862863.html)


## 切换源
```
npm config get registry  // 查看当前设置的源

npm config set registry https://registry.npm.taobao.org  // 设置为淘宝镜像

npm config set registry https://registry.npmjs.org  // 设置为npm镜像

npm install xxx --registry https://registry.npm.taobao.org  // 临时使用淘宝镜像安装
```
