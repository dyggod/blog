# Linux

## 常用命令

### 文件相关

```bash
# 查看文件内容
cat file

# 列出文件夹下所有文件
ls -l

# 查看文件夹下详细信息
ls -l -a

# 创建文件夹
mkdir folder

# 删除文件夹
rm -rf folder

# 删除文件
rm file

# 复制文件
cp file1 file2

# 移动文件
mv file1 file2

# 查看文件大小
du -sh file

# 创建文件
touch file

# 查看文件
less file

# 编辑文件
vi file # 按i进入编辑模式，按esc退出编辑模式，按:wq保存并退出
vim file # 按i进入编辑模式，按esc退出编辑模式，按:wq保存并退出
```

### 系统相关

```bash
# 查看系统版本
cat /etc/issue

# 查看内存使用情况
free -m

# 查看磁盘使用情况
df -h

# 查看cpu使用情况
top
```

### 用户相关

```bash
# 查看当前用户
whoami

# 查看当前用户组
groups

# 切换用户
su user # 切换到user用户

# 切换用户组
newgrp group # 切换到group用户组

# 切换到root用户
sudo su

# 添加用户
useradd user # 添加user用户

# 删除用户
userdel user # 删除user用户

# 修改root密码
sudo passwd root

# 修改用户密码
passwd user
```

### 安装相关

```bash
# 安装软件
sudo apt-get install software

# 卸载软件
sudo apt-get remove software

# 更新软件源
sudo apt-get update

# 升级软件
sudo apt-get upgrade software

# 安装deb包
sudo dpkg -i package.deb

# 使用网络下载文件
wget url
```

### 网络相关

```bash
# 安装net-tools
sudo apt-get install net-tools

# 查看网络连接
netstat -an

# 查看网口信息
ifconfig
```

### 执行文件
```bash
# 执行文件
./file

# 给文件添加执行权限
chmod +x file

# 给文件夹添加执行权限
chmod +x folder

# 给文件添加所有权限
chmod 777 file

# 执行bash脚本
source file # 在当前shell中执行，等效于. file
bash file # 在新的shell中执行
```
