# MongoDB

## 配置

1. <p id="authorize">开启授权</p> 

mongodb默认是不需要用户名、密码登录的，因为我们认为它只在本地服务器，在管控之下。但当我们
需要加强安全性或者远程连接时，就需要授权认证。

找到mongodb的配置文件，以linux为例，在`/etc/mongod.conf`中加入：
```sh
# security
-----修改为-----
security:
  authorization: enabled
```
然后重启mongodb：`sudo systemctl restart mongod`

2. 添加用户
```sh
mongo
use admin
db.createUser({user: "admin", pwd: "admin", roles:[{role: "root", db: "admin"}]})
```
用户名、密码、权限请自行定义。

3. 设置远程连接
mongodb默认为开启用户认证和只监听本地接口。开启用户认证请参照[开启授权](#authorize)。

然后`/etc/mongod.conf`中设置监听所有端口：
```
net:
  port: 27017
  bindIp: 127.0.0.1
-----修改为----------
net:
  port: 27017
  bindIp: 0.0.0.0
```

4. 命令行导入/导出备份数据文件
  + 导入
```sh
mongoimport -h localhost --port 27017 -d xugong -c vehicle --jsonArray C:\Users\in2\Desktop\vehicle.json
```
其中--jsonArray在是其他文件时改为--file。

如果发现jsonArray报错，去掉此参数。

`C:\Users\in2\Desktop\vehicle.json`是数据文件路径，请替换为自己的文件路径。

  + 导出
```sh
mongoexport -h localhost --port 27017 -d xugong -c vehicle -o <Path>
```

`-d`后为数据库名，`-c`后为集合名，`-o`后为保存的目录路径。

## mongoose

1. 解决无法存储空对象问题

mongodb默认不存储空对象，来最小化存储空间。

使用mongoose时可将minimize选项设置为false来覆盖此配置。

文档：https://mongoosejs.com/docs/guide.html#minimize

2. mongoose创建model时默认集合名是复数形式，如何创建单数集合名

model连接时第三个参数是实际的collection名。如果传值，缺省状态下用第一个参数的复数形式:
```javascript
mongoose.model("user", userSchema, "user");
```

3. mongoose schema查询出的文档，不能直接增加或删除字端，需启用文档的toObject()
```javascript
// doc是查询出的文档
doc.add = "add";  // 无效
// 需：
const doc_back = doc.toObject();
doc_back.add = "add";
```


