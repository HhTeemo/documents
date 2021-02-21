(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(t,a,e){"use strict";e.r(a);var s=e(42),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-服务"}},[t._v("#")]),t._v(" linux 服务")]),t._v(" "),e("h2",{attrs:{id:"web-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-服务"}},[t._v("#")]),t._v(" web 服务")]),t._v(" "),e("p",[t._v("http")]),t._v(" "),e("p",[t._v("lamp平台")]),t._v(" "),e("p",[t._v("linux apache mysql php")]),t._v(" "),e("p",[t._v("发帖留言 提交 php把你的发言  提交数据中")]),t._v(" "),e("p",[t._v("php 登录数据调用你所有的留言 将你的留言产生html语句")]),t._v(" "),e("p",[t._v("显示到主页上")]),t._v(" "),e("h3",{attrs:{id:"apache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" apache")]),t._v(" "),e("p",[t._v("对外服务")]),t._v(" "),e("p",[t._v("ip地址 端口号 80 443")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("启动服务")]),t._v(" "),e("p",[t._v("service httpd start")])]),t._v(" "),e("li",[e("p",[t._v("验证")]),t._v(" "),e("p",[t._v("ss -antpl | grep 80")]),t._v(" "),e("p",[t._v("a 代表所有")]),t._v(" "),e("p",[t._v("n 代表数字显示的ip")]),t._v(" "),e("p",[t._v("t tcp协议")]),t._v(" "),e("p",[t._v("p 进程号")]),t._v(" "),e("p",[t._v("l 监听状态")])]),t._v(" "),e("li",[e("p",[t._v("主页建立")]),t._v(" "),e("p",[t._v("vim /var/www/html/index.html")])]),t._v(" "),e("li",[e("p",[t._v("主配置文件分析")]),t._v(" "),e("p",[t._v("vim /etc/httpd/conf/httpd.conf")]),t._v(" "),e("p",[t._v("listen 80 #监听端口")]),t._v(" "),e("p",[t._v("Options Indexes FollowSymLinks #禁用后，关闭共享")]),t._v(" "),e("p",[t._v("Options FollowSymLinks")])])]),t._v(" "),e("p",[t._v("find /etc -name httpd")]),t._v(" "),e("p",[t._v("httpd 所在路径  /etc/rc.d/init.d/httpd")]),t._v(" "),e("p",[t._v("​\t\t  快捷链接  /etc/init.d/httpd")]),t._v(" "),e("p",[t._v("访问控制设定")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Order allow,deny\n# Allow from all\n\n1.仅允许192.168.1.2主机访问主页\nOrder allow,deny\t白名单\nAllow from 192.168.1.2\n\nOrder deny,allow\t黑名单\nAllow from 192.168.1. 网段\n\n2.对页面进行加密，先输入用户名再输入密码才可以进入\n用户名 密码 自己配置\nhtpasswd -c /rtc/httpd/conf/httpuser tom   建立用户验证文件\n\n在配置文件中\nauthtype basic 基础弹窗\nauthname “提示信息”\nauthserfile 用户验证文件路径\nrequire valid-user 只有有效用户才能访问\n")])])]),e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" mysql")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('yum install mysql-server -y 安装mysql\nservice mysqld start\t启动mysql服务\nmysqladmin -u root -p password "123456" 设置mysqlroot用户\nmysql -u root -p    用户登录\n')])])]),e("h3",{attrs:{id:"php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" php")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("umount /dev/cdrom 卸载挂载\nmount /dev/cdrom /media 挂载光盘到/media下\n\nyum install php php-mysql phpmbstring\nvim /etc/php.ini\t配置php文件\nshort_open_tag = On \n\n")])])]),e("h2",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),e("p",[t._v("支持庞大的并发访问，稳定，低损耗")]),t._v(" "),e("h3",{attrs:{id:"安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[t._v("#")]),t._v(" 安装Nginx")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("编译安装之前确保已存在开发环境软件包")]),t._v(" "),e("p",[t._v("yum -y install pcre-devel zlib-devel")])]),t._v(" "),e("li",[e("p",[t._v("创建运行用户和组(程序用户建立)")]),t._v(" "),e("p",[t._v("useradd -M -s /sbin//nologin nginx")])]),t._v(" "),e("li",[e("p",[t._v("编译安装")]),t._v(" "),e("p",[t._v("tar zxf nginx")]),t._v(" "),e("p",[t._v("./configure --prefix=/usr/local/nginx --user=nginx --group=nginx")]),t._v(" "),e("p",[t._v("make && make install")])]),t._v(" "),e("li",[e("p",[t._v("启用")]),t._v(" "),e("p",[t._v("/usr/local/nginx/sbin/nginx 启动脚本")]),t._v(" "),e("p",[t._v("-t 选项可检查配置文件错误")])]),t._v(" "),e("li",[e("p",[t._v("验证")]),t._v(" "),e("p",[t._v("ss -antpl | grep 80")]),t._v(" "),e("p",[t._v("浏览器访问 http://127.0.0.1")])]),t._v(" "),e("li",[e("p",[t._v("停用")]),t._v(" "),e("p",[t._v("killall -s HUP nginx 重载")]),t._v(" "),e("p",[t._v("killall -s QUIT nginx 停止")])]),t._v(" "),e("li",[e("p",[t._v("主页位置")]),t._v(" "),e("p",[t._v("/usr/loacl/nginx/html")])])]),t._v(" "),e("p",[t._v("nginx.conf 主配置文件，该文件包括三大部分：全局配置、I/O事件、HTTP配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CoreModule核心模块\n\nuser www;                       #Nginx进程所使用的用户\nworker_processes 1;             #Nginx运行的work进程数量(建议与CPU数量一致或auto)\nerror_log /log/nginx/error.log  #Nginx错误日志存放路径\npid /var/run/nginx.pid          #Nginx服务运行后产生的pid进程号\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("events事件模块\n\nevents {            \n\tworker_connections  //每个worker进程支持的最大连接数\n    use epool;          //事件驱动模型, epoll默认\n   \t//use [kqueue | rtsig | epoll | /dev/poll | select | poll]; epoll模型是linux2.6以上版本内核中的高性能网络I/O模型。如果跑在FreeBSD上面，就用kqueue模型。\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    http内核模块\n    //公共的配置定义在http{}\n    http {  //http层开始\n    ...    \n       \n       //使用Server配置网站, 每个Server{}代表一个网站(简称虚拟主机)\n        'server' {\n            listen       80;        //监听端口, 默认80\n            server_name  localhost; //提供服务的域名或主机名\n            access_log host.access.log  //访问日志\n           \n           //控制网站访问路径\n            'location' / {\n                root   /usr/share/nginx/html;   //存放网站代码路径\n                index  index.html index.htm;    //服务器返回的默认页面文件\n            }\n            //指定错误代码, 统一定义错误页面, 错误代码重定向到新的Locaiton\n            error_page   500 502 503 504  /50x.html;\t//内部错误反抗页面\n            location = /50x.html {\t\t//错误页面配置\n            root html;\n            }\n        }\n        \n        ...\n        //第二个虚拟主机配置\n        'server' {\n        ...\n        }\n        \n        include /etc/nginx/conf.d/*.conf;  //包含/etc/nginx/conf.d/目录下所有以.conf结尾的文件\n        include mime.types;  //文件扩展名与文件类型映射表\n        default_type application/octet-stream; //默认文件类型\n        sendfile on;\t\t\t//支持文件发送(下载)\n        keepalive_timeout 65;\t//连接保持超时时间，单位是秒\n    }   //http层结束\n")])])]),e("p",[t._v("Nginx 实现 PHP 解析")]),t._v(" "),e("h2",{attrs:{id:"包过滤防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包过滤防火墙"}},[t._v("#")]),t._v(" 包过滤防火墙")]),t._v(" "),e("p",[t._v("iptables 工具")]),t._v(" "),e("p",[t._v("4个功能（表）：")]),t._v(" "),e("p",[t._v("raw")]),t._v(" "),e("p",[t._v("mangle 前两个表实现数据流量的跟踪与整形")]),t._v(" "),e("p",[t._v("nat 网络地址转换")]),t._v(" "),e("p",[t._v("filter 过滤")]),t._v(" "),e("p",[t._v("systcl -p 查看是否开启路由转发")]),t._v(" "),e("p",[t._v("iptables -t filter -nvL")]),t._v(" "),e("p",[t._v("n 用数字代替ip地址")]),t._v(" "),e("p",[t._v("v 显示详细信息")]),t._v(" "),e("p",[t._v("L 列出所有信息")]),t._v(" "),e("p",[t._v("每个表都有撞门写规则的地方Chain（链）")]),t._v(" "),e("p",[t._v("INPUT")]),t._v(" "),e("p",[t._v("FORWORD 转发规则链（当源地址192.168.1.1 以及目标地址 172.16.1.20都不是本机地址）")]),t._v(" "),e("p",[t._v("OUTPOT 出站链")]),t._v(" "),e("p",[t._v("watch -nl iptables -t filter -nvl  防火墙显示信息一秒更新一次")]),t._v(" "),e("h3",{attrs:{id:"iptables-基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-基本语法"}},[t._v("#")]),t._v(" iptables 基本语法")]),t._v(" "),e("p",[t._v("语法构成")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables [-t 表名] 选项 [链名] [条件] [-j 控制类型]\n例：\niptables -t filter -I INPUT -p tcp --dport 80 -j ACCEPT   允许ping测试\niptables -t filter -I INPUT -P icmp -j REJECT \t阻止ping测试\n\n")])])]),e("p",[t._v("注意事项：")]),t._v(" "),e("p",[t._v("不指定表名时，默认指filter表")]),t._v(" "),e("p",[t._v("不指定链名时，默认指表内的所有链")]),t._v(" "),e("p",[t._v("除非设置链的默认策略，否则必须指定匹配条件")]),t._v(" "),e("p",[t._v("选项、链名、控制类型使用大写字母，其余均为小写")]),t._v(" "),e("p",[t._v("数据包的常见控制类型：")]),t._v(" "),e("p",[t._v("ACCEPT：允许通过")]),t._v(" "),e("p",[t._v("DROP：直接丢弃，不给出任何回应")]),t._v(" "),e("p",[t._v("REJECT：拒绝通过，必要时会给出提示")]),t._v(" "),e("p",[t._v("LOG：记录日志信息，然后传给下一条规则继续匹配")]),t._v(" "),e("h3",{attrs:{id:"iptables-管理选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-管理选项"}},[t._v("#")]),t._v(" iptables 管理选项")]),t._v(" "),e("h4",{attrs:{id:"添加新的规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加新的规则"}},[t._v("#")]),t._v(" 添加新的规则")]),t._v(" "),e("p",[t._v("-A：在链尾追加一条规则")]),t._v(" "),e("p",[t._v("-I：在链的开头（或指定序号）插入一条规则")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -t filter -A INPUT -p tcp -j ACCEPT\niptables -I INPUT -p udp -j ACCEPT\niptables -I INPUT 2 -p udp -j ACCEPT\n")])])]),e("h4",{attrs:{id:"查看规则列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看规则列表"}},[t._v("#")]),t._v(" 查看规则列表")]),t._v(" "),e("p",[t._v("-L：列出所有的规则表名")]),t._v(" "),e("p",[t._v("-n：以数字形式显示地址、端口等信息")]),t._v(" "),e("p",[t._v("-v：以更详细的方式显示规则信息")]),t._v(" "),e("p",[t._v("--line-number：查看规则时，显示规则的序号")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -t filter -nvL --line-numbers\n")])])]),e("h4",{attrs:{id:"删除、清空规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除、清空规则"}},[t._v("#")]),t._v(" 删除、清空规则")]),t._v(" "),e("p",[t._v("-D：删除链内指定序号（或内容）的一条规则")]),t._v(" "),e("p",[t._v("-F：清空所有规则")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -D FORWARD 2\niptables -F FORWARD\n")])])]),e("h4",{attrs:{id:"设置默认策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置默认策略"}},[t._v("#")]),t._v(" 设置默认策略")]),t._v(" "),e("p",[t._v("-P：为指定的链设置默认规则，默认策略要么是ACCEPT，要么是DROP")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -t filter -P FORWARD DROP\niptables -P OUTPUT ACCEPT\n")])])]),e("h4",{attrs:{id:"规则匹配条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则匹配条件"}},[t._v("#")]),t._v(" 规则匹配条件")]),t._v(" "),e("p",[t._v("通用匹配")]),t._v(" "),e("ul",[e("li",[t._v("可直接使用，不依赖于其他条件或扩展")]),t._v(" "),e("li",[t._v("包括网络协议、IP地址、网络接口等条件")])]),t._v(" "),e("p",[t._v("隐含匹配")]),t._v(" "),e("ul",[e("li",[t._v("要求以特定的协议匹配作为前提")]),t._v(" "),e("li",[t._v("包括端口、TCP标记、ICMP类型等条件")])]),t._v(" "),e("p",[t._v("显式匹配")]),t._v(" "),e("ul",[e("li",[t._v("要求以“-m 扩展模块”的形式明确指出类型")]),t._v(" "),e("li",[t._v("包括多端口、MAC地址、IP范围、数据包状态等条件")])]),t._v(" "),e("p",[t._v("常见的通用匹配条件")]),t._v(" "),e("p",[t._v("协议匹配：-p 协议名")]),t._v(" "),e("p",[t._v("地址匹配： -s 源地址、-d 目标地址")]),t._v(" "),e("p",[t._v("接口匹配：-i 入站网卡 、-o 出站网卡")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -I INPUT -p icmp -j DROP\n\niptables -A FORWARD -s 192.168.1.11 -j REJECT\n\niptables -A INPUT -i eth1 -s 192.168.0.0/16 -j DROP\n")])])]),e("p",[t._v("常用的隐含匹配条件")]),t._v(" "),e("p",[t._v("端口匹配：--spot 源端口、--dport 目的端口")]),t._v(" "),e("p",[t._v("TCP标记匹配：--tcp-flags 检查范围 被设置的标记")]),t._v(" "),e("p",[t._v("ICMP类型匹配：--icmp-type ICMP类型")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -A FORWARD -s 192.168.1.0/24 -p udp --dport 53 -j REJECT\n\niptables -A INPUT -p icmp --icmp-types 8 -i DROP\n8 请求，0 回显，3 不可达\n")])])]),e("p",[t._v("常用的显示匹配条件")]),t._v(" "),e("p",[t._v("多端口匹配：-m multiport --sport 源端口列表、-m multiport --dport 目的端口列表")]),t._v(" "),e("p",[t._v("IP范围匹配：-m iprange --src-range IP范围")]),t._v(" "),e("p",[t._v("MAC地址匹配：-m mac --mac-source MAC地址")]),t._v(" "),e("p",[t._v("状态匹配：-m state --state 连接状态")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables -A INPUT -p tcp -m multiport --dport 25,80,110,143 -j ACCEPT\n\niptables -A FORWARD -p tcp -m iprange --src-range 192.168.10.0/24\n\niptbales -I INPUT -p tcp -m state --state ESTABLISHED -j ACCEPT\n")])])]),e("p",[t._v("规则的备份及还原")]),t._v(" "),e("p",[t._v("导出（备份）规则")]),t._v(" "),e("p",[t._v("iptables-save 工具")]),t._v(" "),e("p",[t._v("可结合重定向输出保存到指定文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iptables-save > /opt/iprules_all.txt\nservices iptables save \t\t\t永久保存\n")])])]),e("h3",{attrs:{id:"nat-表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nat-表"}},[t._v("#")]),t._v(" nat 表")]),t._v(" "),e("p",[t._v("网络地址转换")]),t._v(" "),e("p",[t._v("源地址转换")]),t._v(" "),e("p",[t._v("iptables -t nat -A POSTROUNTING -p tcp -o eth1 -s 192.168.1.0/24 -j SNAT --to-source 12.34.56.78")]),t._v(" "),e("p",[t._v("iptables -F FORWARD")]),t._v(" "),e("p",[t._v("iptables -t nat -A POSTROUNTING -p tcp -o eth1 -s 192.168.1.0/24 -j MASQUERADE  动态获取源ip")]),t._v(" "),e("p",[t._v("目标地址转换")]),t._v(" "),e("p",[t._v("iptables -t nat -A PREROUNTING -p tcp -i eth1 -d 12.34.56.80 - -j DNAT --to-destination 192.168.1.1:8080")])])}),[],!1,null,null,null);a.default=v.exports}}]);