# git

## 常用命令

#### git配置

1. 查

```
git config --global --list  // 查询全局配置

git config --global user.name  // 查询全局用户名
git config --global user.email // 查询全局用户邮箱

git config --local user.name   // 查询局部用户名
```

2. 改

```sh
git config --global user.name 名字   // 修改全局用户名为"名字"
git config --global user.email 邮箱  // 修改全局用户邮箱为"邮箱"

git config --local user.name 名字    // 修改局部用户名为"名字"
```

3. 本地生成ssh key

```sh
ssh-keygen -t rsa   // 在 .ssh 下生成密钥对

// 参数
-f：指定用来保存密钥的文件名
-C：添加注释/备注
-t：密钥类型
```

4. 验证本地与github账号绑定

```sh
ssh -T git@github.com
```

#### 仓库配置

1. 远程地址操作

```sh
git remote -v   // 查看远程仓库地址

git remote rm origin  // 移除远程仓库地址

git remote add origin https://...   // 添加远程仓库地址为"https://..."

git remote set-url origin https://...  // 切换远程仓库地址为"https://..."

git remote update origin --prune       // 获取最新远程仓库状态

git config core.ignorecase true  // 让git识别文件名大小写修改。但这种方式或许引发后续的麻烦，还可以：git mv ABC.js abc.js，再提交

git config --global core.autocrlf false  // 禁止自动转crlf

git config --global core.editor "vim"    // 设置git使用编辑器为vim
```

2. 分支操作

```
git branch -r    // 查看远程分支

git branch 分支名   // 创建本地分支

git checkout 分支名  // 切换本地分支，如果本地没有远程有会拉取远程分支并切换

git branch -b 分支名 // 创建一个本地分支并切换

git branch -d 分支名  // 删除一个本地分支

git branch -m old_branch new_branch   // 修改本地分支名

git push origin 分支名  // 推送至远程分支

git push origin :分支名  // 删除远程分支
```

3. tag操作

```
git tag -l -n   // 产看tag列表及内容

git fetch origin tag名  // 获取远程tag
```

4. 提交操作

```
git add 文件  // 添加暂存文件

git diff      // 查看尚未暂存的文件做的更新

git commit -m commit消息   // 提交

git commit -a -m commit消息  // 自动把已跟踪过的文件暂存并提交，跳过git add

git log        // 查看提交历史

git reset --hard 提交id  // 回退到某个commit，并且不保留修改

git reset --soft 提交id  // 回退到某个commit，并且保留修改

git checkout -- 文件名  // 却笑文件修改

git push origin 分支名 --force // 强制覆盖远程分支
```

5. submodule操作

```
git clone --recursive  // 克隆有submodule的仓库

git submodule status   // 查看主repo下的对应的submodule的commit

git submodule update   // 更新submodule

git submodule update --init --recursive  // 初始化submodule并更新
```

6. squash合并commit

```
git rebase -i HEAD~3  // 找到最新的三个提交并进入编辑模式

对要合并的commit将 pick 改为 squash

退出编辑模式:wq保存
```

## gitignore

1. 忽略文件夹下除了某些文件的所有文件

```text
/model/*           // 忽略/model下所有文件
!/model/*.py       // 除了/model下的所有.py文件
!/model/1.js       // 除了/model下的1.js
```

## github 推送或拉取时ssh错误
错误信息：
```shell
Cloning into 'packbox'...
kex_exchange_identification: read: Software caused connection abort
banner exchange: Connection to 20.205.243.166 port 22: Software caused connection abort
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

解决方案：
  1. 使用https克隆仓库 及 将仓库下`.git`目录中`config`文件中的`url`改为仓库https的地址

## git-lfs

说明：[简书](https://www.jianshu.com/p/493b81544f80)

https://www.jianshu.com/p/493b81544f80
设置clone时下载lfs文件：`git lfs install --skip-smudge`

或clone时添加：`GIT_LFS_SKIP_SMUDGE=1 git clone ...`

使用指南：[指南](https://sabicalija.github.io/git-lfs-intro/)

## window电脑配置两个github账号设置：

https://zhuanlan.zhihu.com/p/107341502

https://www.cnblogs.com/xjnotxj/p/5845574.html
