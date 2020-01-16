# SVN手记



### 1. SVN 的一些概念

- **repository（源代码库）:**源代码统一存放的地方
- **Checkout（提取）:**当你手上没有源代码的时候，你需要从repository checkout一份
- **Commit（提交）:**当你已经修改了代码，你就需要Commit到repository
- **Update (更新):**当你已经Checkout了一份源代码， Update一下你就可以和Repository上的源代码同步，你手上的代码就会有最新的变更

### 2.安装

- 过程如下，详见[教程](https://www.runoob.com/svn/svn-install.html )

```shell
[runoob@centos6 ~]$ svn --version
[root@centos6 ~]# yum install subversion
```

### 3. 生命周期及配置

使用之前要进行[服务配置](https://www.runoob.com/svn/svn-start-mode.html )

+ **创建版本库:**`create`操作创建一个新的版本库，存放源码和修改日志。 [创建版本库教程]( https://www.runoob.com/svn/svn-create-repo.html )
+ **检出:**`checkout`操作创建一个副本，是开发者私人的空间，写完以后可以提交的版本库。[检出教程](runoob.com/svn/svn-check-out.html)
+ **更新:**`update`操作会与版本库进行同步。更新教程
+ **执行变更:**创建副本之后你可以写代码，对副本进行curd的过程就是执行变更。
+ **复查变化:**在提交之间进行检查是一个谨慎也必要的行为，除非你保证一定没有错误，`status`操作就是用来查看待变更的列表。[查看历史](https://www.runoob.com/svn/svn-show-history.html)
+ **修改错误:**当你curd副本之后，后悔了发现自己写错了，就可以进行`revert`操作。[回退教程](https://www.runoob.com/svn/svn-revert.html)
+ **解决冲突:**合并的时候同一个文件同一行被修改了，就会有冲突，你就要执行`Merge`来处理冲突。[解决冲突](https://www.runoob.com/svn/svn-conflict.html)
+ **提交更改:**就是一个开心的过程，作业(daima)写完要上交了,执行`commit`操作。[提交教程](https://www.runoob.com/svn/svn-commit.html)

### 3.1 分支和标签

- 分支是在原来版本的基础上copy出一个独立的版本，标签是为一个指定的代码版本起一个有意义的名字

### 4. TortoiseSVN 使用教程

+ **[使用教程](https://www.runoob.com/svn/tortoisesvn-intro.html)**
+ 