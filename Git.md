# Git安装

- [详细安装教程](https://www.runoob.com/git/git-install-setup.html)

```shell
# https://git-scm.com/download/win
# https://www.sourcetreeapp.com/download-archives
# 配置用户信息
git config --global user.name "gaoxiang"
git config --global user.email "igaoxian@foxmail.com"
git config --list # 查看配置
```

# 工作流

一般工作流程如下：

- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

![Git工作流](\public\image\Git工作流.png)

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

# [Git 远程仓库(Github)](https://www.runoob.com/git/git-remote-repo.html)

# [Git 服务器搭建](https://www.runoob.com/git/git-server.html)

# 参考资料

![收藏](/public/image/git01.jpg)