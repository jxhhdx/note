# GIt安装
```shell
# https://git-scm.com/download/win
# https://www.sourcetreeapp.com/download-archives
# 配置用户信息
git config --global user.name "gaoxiang"
git config --global user.email "igaoxian@foxmail.com"
git config --list # 查看配置
```

# 工作流

![](D:\shortcut\note\public\image\Git工作流.png)

```shell
git init  # 初始化版本库
git add git commit  # 添加到版本库
git status  # 查看状态
echo "git repo2" >>test.txt
git reset HEAD bush_test.txt  # 回归暂存区
git checkout -- bush_test.txt  # 清除

git add  # 添加到暂存区
git commit  # 添加到版本库
git reset HEAD  # 版本库文件覆盖暂存区
"git checkout ." or "git checkout -- <file>"  # 危险不建议，暂存区覆盖工作区
"git checkout HEAD ." or "git checkout HEAD <file>"  # 危险不建议，版本库覆盖暂存区和工作区
git rm --cached <file>  # 删除暂存区的文件
```

# 分支仓库

```shell
git init [newrepo]  # 初始化
git clone git://github.com/schacon/grit.git [指定克隆后的文件名称]

# 设置密钥
ssh-keygen -t rsa -C "igaoxian@foxmail.com"  
ssh -T git@github.com  # 测试连接是否成功
cd .ssh/
echo "# gxx" >> README.md
git init
git add README.md
git commit -m "first commit"

git remote add origin https://github.com/gitlnla/gxx.git
git push -u origin master
```

# 远程仓库

```shell
git remote add [origin] [https://github.com/gitlnla/gxx.git]
git remote [-v]<!--查看当前配置有哪些仓库-->
ssh-keygen -t rsa -C "igaoxian@foxmail.com"
git fetch<!--从远程仓库下载新分支与数据 该命令执行后要执行git merge远程分支到你的分支-->
git pull<提取远程仓库并合并到当前分支>
git push <远程主机名> <本地分支名>:<远程分支名>
git push --force origin<!--强推-->
git remote rm [origin2]
```

