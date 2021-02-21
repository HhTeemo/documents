(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(o,t,l){"use strict";l.r(t);var s=l(42),n=Object(s.a)({},(function(){var o=this,t=o.$createElement,l=o._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[l("h1",{attrs:{id:"系统的操作命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统的操作命令"}},[o._v("#")]),o._v(" 系统的操作命令")]),o._v(" "),l("h2",{attrs:{id:"系统相关运行命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统相关运行命令"}},[o._v("#")]),o._v(" 系统相关运行命令")]),o._v(" "),l("p",[o._v("补充说明：linux是多用户的系统，windows是多用户的系统（收费 ）")]),o._v(" "),l("h3",{attrs:{id:"系统关机"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统关机"}},[o._v("#")]),o._v(" 系统关机")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("shutdown\n\t   \n[root@centos-8 ~]# shutdown\nShutdown scheduled for Sat 2020-06-13 14:58:46 CST, use 'shutdown -c' to cancel.\n定义一个关机方案=定义什么时间进行关机，使用shutdown -c 取消关机计划\n\n[hyf@centos-8 ~]$ \nBroadcast message from root@centos-8 on pts/0 (Sat 2020-06-13 15:00:19 CST):\n会将关机信息广播给所有关机主机的用户\nThe system is going down for poweroff at Sat 2020-06-13 15:01:19 CST!\n准备什么时间真正进行关机\n\t   \nshutdown -h 5  --- 指定5分钟后关机\n")])])]),l("h3",{attrs:{id:"系统重启"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统重启"}},[o._v("#")]),o._v(" 系统重启")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("[root@centos-8 ~]# shutdown -r\nShutdown scheduled for Sat 2020-06-13 15:03:06 CST, use 'shutdown -c' to cancel.\n\n\n[hyf@centos-8 ~]$ \nBroadcast message from root@centos-8 on pts/0 (Sat 2020-06-13 15:02:06 CST):\n\nThe system is going down for reboot at Sat 2020-06-13 15:03:06 CST!\n\nreboot\n")])])]),l("h2",{attrs:{id:"目录路径相关命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#目录路径相关命令"}},[o._v("#")]),o._v(" 目录路径相关命令")]),o._v(" "),l("h3",{attrs:{id:"创建新的目录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建新的目录"}},[o._v("#")]),o._v(" 创建新的目录")]),o._v(" "),l("p",[o._v("mkdir == make directory（制造目录）")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("[root@centos-8 ~]# mkdir /oldboy\n[root@centos-8 ~]# mkdir -p /oldboy/oldboy01/oldboy02/oldboy03/oldboy04  -- 创建多级目录,忽略错误提示\n[root@centos-8 ~]# ls -d /oldboy/oldboy01/oldboy02/oldboy03/oldboy04\n/oldboy/oldboy01/oldboy02/oldboy03/oldboy04\n\n")])])]),l("h3",{attrs:{id:"如何进行目录的切换"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#如何进行目录的切换"}},[o._v("#")]),o._v(" 如何进行目录的切换")]),o._v(" "),l("p",[o._v("cd == change directory（改变目录）")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("绝对路径：\n[root@centos-8 oldboy]# cd /oldboy/oldboy01/oldboy02/oldboy03/oldboy04/\n相对路径：\n[root@centos-8 oldboy03]# cd oldboy04/   当对于当前路径找他下面的路径信息\n[root@centos-8 oldboy04]# cd ..          返回到上一级目录\n[root@centos-8 oldboy04]# cd ../../      返回到上两级目录\n[root@centos-8 oldboy04]# cd ../oldboy05\n\n两个目录之间快速切换\n[root@centos-8 oldboy05]# cd /tmp/\n[root@centos-8 tmp]# cd -\n/oldboy/oldboy01/oldboy02/oldboy03/oldboy05\n[root@centos-8 oldboy05]# cd -\n/tmp\n\n快速返回到家目录\n[root@centos-8 oldboy05]# cd ~\n[root@centos-8 ~]# cd -\n/oldboy/oldboy01/oldboy02/oldboy03/oldboy05\n[root@centos-8 oldboy05]# cd\n[root@centos-8 ~]# \n")])])]),l("h3",{attrs:{id:"查看当前所在路径"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看当前所在路径"}},[o._v("#")]),o._v(" 查看当前所在路径")]),o._v(" "),l("p",[o._v("pwd == print work directory（显示当前路径）")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("[root@centos-8 oldboy05]# pwd\n/oldboy/oldboy01/oldboy02/oldboy03/oldboy05\n[root@centos-8 oldboy05]# cd /oldboy/oldboy01/\n[root@centos-8 oldboy01]# pwd\n/oldboy/oldboy01\n[root@centos-8 oldboy01]# cd /tmp/\n[root@centos-8 tmp]# pwd\n\n")])])]),l("h2",{attrs:{id:"文件目录相关命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文件目录相关命令"}},[o._v("#")]),o._v(" 文件目录相关命令")]),o._v(" "),l("h3",{attrs:{id:"创建文件信息命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建文件信息命令"}},[o._v("#")]),o._v(" 创建文件信息命令")]),o._v(" "),l("p",[o._v("touch")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("touch /oldboy/oldboy.txt\t\n[root@centos-8 oldboy02]# ls /oldboy/oldboy.txt\n/oldboy/oldboy.txt\n[root@centos-8 oldboy02]# ls -l /oldboy/oldboy.txt\n-rw-r--r--. 1 root root 0 Jun 13 15:13 /oldboy/oldboy.txt\n\n")])])]),l("h3",{attrs:{id:"检查文件或目录是否存在命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#检查文件或目录是否存在命令"}},[o._v("#")]),o._v(" 检查文件或目录是否存在命令")]),o._v(" "),l("p",[o._v("ls == list（列表）")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("检查文件是否存在\n[root@centos-8 ~]# ls /etc/hosts\n/etc/hosts\n[root@centos-8 ~]# ls /etc/hosts01\nls: cannot access /etc/hosts01: No such file or directory\n\n检查目录是否存在\n[root@centos-8 oldboy02]# ls /etc/\nadjtime                     dracut.conf    ld.so.conf                pam.d             shadow\naliases                     dracut.conf.d  ld.so.conf.d              papersize         shadow-\nalsa                        egl            libaudit.conf             passwd            shells\n\n有针对查看目录信息\n[root@centos-8 ~]# ls -d /oldboy\n/oldboy\n\n查看文件数据的详细信息\n[root@centos-8 ~]# ls -l /etc/services\n-rw-r--r--. 1 root root 692241 Sep 10  2018 /etc/services\n")])])]),l("h3",{attrs:{id:"查看文件内容的命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看文件内容的命令"}},[o._v("#")]),o._v(" 查看文件内容的命令")]),o._v(" "),l("p",[o._v("cat(猫) --- 查看文件")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("[root@centos-8 ~]# cat /oldboy/oldboy.txt \nhello world!\n[root@centos-8 ~]# cat /etc/hosts\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n")])])]),l("h3",{attrs:{id:"复制保存数据"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#复制保存数据"}},[o._v("#")]),o._v(" 复制保存数据")]),o._v(" "),l("p",[o._v("cp -- copy(复制)\n用法: cp 要复制数据信息(文件/目录) 复制到什么位置(目录中)")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("文件备份方法:\n[root@centos-8 ~]# cp /oldboy/oldboy.txt /tmp/\n[root@centos-8 ~]# ls -l /tmp/oldboy.txt \n-rw-r--r--. 1 root root 13 Jun 13 15:21 /tmp/oldboy.txt\n[root@centos-8 ~]# ls -l /oldboy/oldboy.txt\n-rw-r--r--. 1 root root 13 Jun 13 15:20 /oldboy/oldboy.txt\n\n目录备份方法:\n[root@centos-8 oldboy]# cp -r /oldboy/oldboy01/ /tmp\n[root@centos-8 oldboy]# ls /tmp/oldboy01\noldboy02\n[root@centos-8 oldboy]# ls -d /tmp/oldboy01\n/tmp/oldboy01\n[root@centos-8 oldboy]# ls -d /tmp/oldboy01/oldboy02\n/tmp/oldboy01/oldboy02\n[root@centos-8 oldboy]# ls -d /tmp/oldboy01/oldboy02/oldboy03\n/tmp/oldboy01/oldboy02/oldboy03\n\n补充: 目录备份有时需要进行多次确认\n[root@centos-8 oldboy01]# cp -r /oldboy/oldboy01/ /tmp/\ncp: overwrite ‘/tmp/oldboy01/oldboy.txt’? y\ncp: overwrite ‘/tmp/oldboy01/oldboy01.txt’? y\ncp: overwrite ‘/tmp/oldboy01/oldboy02.txt’? y\ncp: overwrite ‘/tmp/oldboy01/oldboy03.txt’? y\n\n进行目录中数据强行覆盖\n[root@centos-8 oldboy01]# \\cp -r /oldboy/oldboy01/ /tmp/  \n[root@centos-8 oldboy01]# cp -r /oldboy/oldboy01/ /tmp/\ncp: overwrite ‘/tmp/oldboy01/oldboy.txt’? \n")])])]),l("h3",{attrs:{id:"移动数据信息-剪切"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#移动数据信息-剪切"}},[o._v("#")]),o._v(" 移动数据信息(剪切)")]),o._v(" "),l("p",[o._v("mv --- move(移动)\nmv命令用法和cp命令类似")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v('移动剪切文件数据\n[root@centos-8 ~]# mv /oldboy/oldboy.txt /tmp/\n[root@centos-8 ~]# ls -l /tmp/oldboy.txt\n-rw-r--r--. 1 root root 50 Apr  1 10:24 /tmp/oldboy.txt\n[root@centos-8 ~]# ls -l /oldboy/oldboy.txt\nls: cannot access /oldboy/oldboy.txt: No such file or directory\n\n移动剪切目录数据\n[root@centos-8 ~]# mv /oldboy/oldboy01/ /tmp\n[root@centos-8 ~]# ls -d /tmp/oldboy01\n/tmp/oldboy01\n[root@centos-8 ~]# ls -ld /tmp/oldboy01\ndrwxr-xr-x. 3 root root 100 Apr  1 11:00 /tmp/oldboy01\n[root@centos-8 ~]# ls -ld /oldboy/oldboy01\nls: cannot access /oldboy/oldboy01: No such file or directory\n\n[root@centos-8 ~]# cd /oldboy\n[root@centos-8 oldboy]# ls\n[root@centos-8 oldboy]# touch oldboy.txt\n[root@centos-8 oldboy]# ls\noldboy.txt\n[root@centos-8 oldboy]# echo "oldboy shenzhen" >oldboy.txt\n[root@centos-8 oldboy]# cat oldboy.txt \noldboy shenzhen\n[root@centos-8 oldboy]# mv oldboy.txt oldgirl.txt\n[root@centos-8 oldboy]# ls\noldgirl.txt\n[root@centos-8 oldboy]# cat oldgirl.txt \noldboy shenzhen\n\n移动数据时,出现重复信息也会提示需要覆盖\n[root@centos-8 oldboy]# ls -l /tmp/oldboy.txt\n-rw-r--r--. 1 root root 50 Apr  1 10:24 /tmp/oldboy.txt\n[root@centos-8 oldboy]# touch oldboy.txt\n[root@centos-8 oldboy]# mv oldboy.txt /tmp/\nmv: overwrite ‘/tmp/oldboy.txt’? \n')])])]),l("h3",{attrs:{id:"删除数据命令-慎用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#删除数据命令-慎用"}},[o._v("#")]),o._v(" 删除数据命令(慎用)")]),o._v(" "),l("p",[o._v("delete(删除)==remove(移除)==rm")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("删除文件 \n[root@centos-8 oldboy01]# rm /tmp/oldboy.txt\nrm: remove regular file ‘/tmp/oldboy.txt’? ^C \n[root@centos-8 oldboy01]# \\rm /tmp/oldboy.txt\n[root@centos-8 oldboy01]# ls -l /tmp/oldboy.txt\nls: cannot access /tmp/oldboy.txt: No such file or directory\n[root@centos-8 oldboy01]# touch /tmp/oldboy.txt\n[root@centos-8 oldboy01]# ls -l /tmp/oldboy.txt\n-rw-r--r--. 1 root root 0 Apr  1 11:09 /tmp/oldboy.txt\n[root@centos-8 oldboy01]# rm /tmp/oldboy.txt \nrm: remove regular empty file ‘/tmp/oldboy.txt’? ^C\n[root@centos-8 oldboy01]# rm -f /tmp/oldboy.txt \n[root@centos-8 oldboy01]# ls -l /tmp/oldboy.txt\nls: cannot access /tmp/oldboy.txt: No such file or directory\n\n删除目录\n[root@centos-8 oldboy01]# rm /tmp/oldboy01/\nrm: cannot remove ‘/tmp/oldboy01/’: Is a directory\n[root@centos-8 oldboy01]# rm -f /tmp/oldboy01/\nrm: cannot remove ‘/tmp/oldboy01/’: Is a directory\n[root@centos-8 oldboy01]# rm -r /tmp/oldboy01/\nrm: descend into directory ‘/tmp/oldboy01/’? ^C\n[root@centos-8 oldboy01]# rm -rf /tmp/oldboy01/\n[root@centos-8 oldboy01]# ls -d /tmp/oldboy01\nls: cannot access /tmp/oldboy01: No such file or directory\n")])])]),l("p",[o._v("PS: 运维人员两大经典错误")]),o._v(" "),l("ol",[l("li",[o._v("删根目录  避免")]),o._v(" "),l("li",[o._v("删库跑路???")])]),o._v(" "),l("h2",{attrs:{id:"文件信息编辑命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文件信息编辑命令"}},[o._v("#")]),o._v(" 文件信息编辑命令")]),o._v(" "),l("p",[o._v("将文件打开进行直接编辑\nvi/vim  --- 用于编辑文件的命令\nvi oldboy.txt\n第一个步骤: 进入到编辑状态(插入模式)\n按键盘上小写字母 i\n第二个步骤: 编写文件内容\n第三个步骤: 进行保存关闭文档\n按esc(退出编辑状态)--:wq \t(write写/保存 quit 退出)\n:q \t(不保存直接退出)\n:w  (只保存但不退出)")]),o._v(" "),l("p",[o._v("系统命令帮助方法")]),o._v(" "),l("p",[o._v("man == manual（查看命令手册信息）")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("manual --\x3e man mkdir  \nman 查看的命令\nNAME     命令作用说明\n   mkdir - make directories\nSYNOPSIS 命令使用方法\n   mkdir [OPTION]... DIRECTORY...\nDESCRIPTION 命令的参数解释\n   -p, --parents\n          no error if existing, make parent directories as needed\t\n")])])]),l("h2",{attrs:{id:"系统的快捷方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统的快捷方式"}},[o._v("#")]),o._v(" 系统的快捷方式")]),o._v(" "),l("p",[o._v("方向键（上 下）显示历史输入命令信息")]),o._v(" "),l("p",[o._v("ctrl+l 清楚所有屏幕信息输出")]),o._v(" "),l("p",[o._v("ctrl+c 中断取消命令执行过程")]),o._v(" "),l("p",[o._v("ctrl+a 快速移动光标到行首")]),o._v(" "),l("p",[o._v("ctrl+e 快速移动光标到行尾")]),o._v(" "),l("p",[o._v("ctrl+u 将光标到行首信息剪切")]),o._v(" "),l("p",[o._v("ctrl+k 将光标到行尾信息剪切")]),o._v(" "),l("p",[o._v("ctrl+w     将空格分隔的一个字符串整体进行删除（剪切）")]),o._v(" "),l("p",[o._v("ctrl+y 将剪切的内容进行粘贴")]),o._v(" "),l("p",[o._v("ctrl+方向键（左 右） 命令行中快速移动光标")]),o._v(" "),l("p",[o._v("tab 系统命令信息补全功能")]),o._v(" "),l("p",[o._v("ctrl+s 锁定系统窗口信息状态（xshell）")]),o._v(" "),l("p",[o._v("ctrl+q 解锁系统窗口信息状态")]),o._v(" "),l("h2",{attrs:{id:"特殊符号"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#特殊符号"}},[o._v("#")]),o._v(" 特殊符号")]),o._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[o._v("~     家目录符号\n..    上一级目录\n>     标准输出重定向：将原有文件内容先进行清空，然后添加新的信息\n>>    标准输出追加重定向：不会覆盖情况原文件内容,而是在原文件最后一行追加新的信息\n#     将配置文件信息进行注释\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);