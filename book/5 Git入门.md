# **Git入门**

1. 远程仓库


```
ssh-keygen -t rsa -C "jasonlee123man@126.com" 
#存储地址：/c/Users/Administrator/.ssh/id_rsa.pub

ssh -T git@github.com		#检测权限是否设置成功

git remote add origin git地址    #关联本地仓库和远程仓库
git pull origin master --allow-unrelated-histories
git push -u origin master
```

2.添加远程仓库

```
$ git remote add origin 远程地址   
$ git pull origin master
$ git push -u origin master
```

3.标签

```
$ git tag   					#查看所有标签
$ git tag name  				#创建变迁
$ git tag -a name -m "comment"  #制定提交信息
$ git tag -d name				#删除标签
$ git push origin name 			#标签发布
```

4.分支

```
$ git branch
$ git checkout myBranch
$ git merge myBranch
$ git branch -d myBranch   #删除某一分支
$ git push origin --delete <branchName>   #删除远程分支
```

5.diff

6.github pages

- 新建gh-pages分支
- 用户名.github.io/项目名称

7.历史

```
$ git reset HEAD myFile.txt
$ git checkout --myFile.txt   #内容回退
$ git log
$ git reset --hard  号码
$ git rm myFile.txt
```

