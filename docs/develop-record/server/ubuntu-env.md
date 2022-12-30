# ubuntu 常用环境搭建 及 WSL 相关

## ssh 配置

1. 安装启动ssh

```sh
sudo apt update

sudo apt install openssh-server

sudo systemctl status ssh
```

2. 防火墙允许ssh
```sh
sudo ufw allow ssh
```

## 防火墙命令

```sh
sudo ufw status  // 查看状态

sudo ufw enable  // 启动

sudo ufw disable // 关闭

sudo ufw reset   // 重置

sudo ufw allow xxx  // 允许服务或端口

sudo ufw deny xxx   // 拒绝服务或端口

sudo ufw delete allow xxx  // 删除某个规则
```

## 安装net-tools

```sh
sudo apt install net-tools

ifconfig

```

## 安装mongodb

以root用户或具有sudo权限的用户执行以下步骤，已在Ubuntu上安装MongoDB：

1. 安装必要的依赖关系，已通过HTTPS添加新的存储库
```sh
sudo apt update

sudo apt install dirmngr gnupg apt-transport-https ca-certificates software-properties-common
```

2. 导入存储库的GPG密钥，并使用以下命令添加mongodb存储库
```sh
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

sudo add-apt-repository 'deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse'
```
在撰写本文时，MongoDB的最新版本是5.0版。要安装另一个版本，请替换5.0为您的首选版本.

3. 启用存储库后，mongodb-org通过键入以下命令安装元软件包

```sh
sudo apt install mongodb-org
```
以下软件包将被安装进系统：
+ mongodb-org-server  -mongod守护程序以及相应的初始化脚本和配置
+ mongodb-org-mongos  -mongos守护进程
+ mongodb-org-shell-mongo  -它是MongoDB的交互式JavaScript接口。它用于执行命令行中的管理任务
+ mongodb-org-tools -包含几个用于导入和导出数据，统计信息以及其他实用程序的MongoDB工具

4. 启动mongodb守护进程
```sh
sudo systemctl enable --now mongod
```

5. 验证安装是否完成，请使用该mongo工具连接到MongoDB数据库服务器，并打印连接状态：
```sh
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

输出将如下所示：
```sh
MongoDB shell version v5.0.9
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("0d451289-c1b8-4177-a6d4-17e3d2e2e6a2") }
MongoDB server version: 5.0.9
{
  "authInfo" : {
          "authenticatedUsers" : [ ],
          "authenticatedUserRoles" : [ ]
  },
  "ok" : 1
}
```

## 本地 WSL 系统相关

### 进入 WSL 目录

在资源管理器中输入 `\\wsl$`，即可进入 WSL 目录

### 停止和启动 WSL

使用管理员权限运行终端

```sh
net stop LxssManager # 停止 WSL

net start LxssManager # 启动 WSL
```


