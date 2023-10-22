(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{327:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#docker"}},[s._v("docker")]),a("ul",[a("li",[a("a",{attrs:{href:"#位置"}},[s._v("位置")])]),a("li",[a("a",{attrs:{href:"#基本命令"}},[s._v("基本命令")])]),a("li",[a("a",{attrs:{href:"#常用容器"}},[s._v("常用容器")])]),a("li",[a("a",{attrs:{href:"#常用dockerfile"}},[s._v("常用Dockerfile")])])])]),a("li",[a("a",{attrs:{href:"#linux"}},[s._v("Linux")]),a("ul",[a("li",[a("a",{attrs:{href:"#创建新用户"}},[s._v("创建新用户")])]),a("li",[a("a",{attrs:{href:"#ssh"}},[s._v("ssh")])]),a("li",[a("a",{attrs:{href:"#环境变量"}},[s._v("环境变量")])]),a("li",[a("a",{attrs:{href:"#glibc-2-28安装"}},[s._v("GLIBC_2.28安装")])])])]),a("li",[a("a",{attrs:{href:"#eslint"}},[s._v("ESlint")]),a("ul",[a("li",[a("a",{attrs:{href:"#alibaba-react"}},[s._v("Alibaba + React")])])])]),a("li",[a("a",{attrs:{href:"#nginx"}},[s._v("Nginx")]),a("ul",[a("li",[a("a",{attrs:{href:"#常用命令"}},[s._v("常用命令")])]),a("li",[a("a",{attrs:{href:"#配置文件常用"}},[s._v("配置文件常用")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),a("h3",{attrs:{id:"位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[s._v("#")]),s._v(" 位置")]),s._v(" "),a("ul",[a("li",[s._v("docker在Windows上运行时需要"),a("code",[s._v("WSL")]),s._v("(Windows Susbsytem for Linux), 对应文件管理器左侧"),a("code",[s._v("Linux")])]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("wsl -l -v")]),s._v("查看使用的哪一个文件夹(一般为"),a("code",[s._v("docker-desktop-data")]),s._v(")")]),s._v(" "),a("li",[s._v("docker一般在"),a("code",[s._v("docker-desktop-data/data/docker")]),s._v("中, 该路径下"),a("code",[s._v("containers")]),s._v("为容器信息, "),a("code",[s._v("volumes")]),s._v("为持久卷, 可以使用"),a("code",[s._v("docker inspect")]),s._v("查看容器与持久卷的对应关系")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("docker-desktop-data/data/docker/overlay2")]),s._v("中存储了每个容器对应生成的linux系统, 对应关系在"),a("code",[s._v("docker inspect")]),s._v("中的"),a("code",[s._v("GraphDriver.Data.WorkDir")])])]),s._v(" "),a("h3",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),a("p",[a("strong",[s._v("镜像")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker images")]),s._v("查看本机镜像")]),s._v(" "),a("li",[a("code",[s._v("docker pull IMAGE[:TAG]")]),s._v("拉取镜像"),a("code",[s._v("IMAGE")]),s._v(", 可选版本"),a("code",[s._v("TAG")])]),s._v(" "),a("li",[a("code",[s._v("docker rmi IMAGE")]),s._v("删除镜像"),a("code",[s._v("IMAGE")])])]),s._v(" "),a("p",[a("strong",[s._v("容器")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker ps -a")]),s._v(": 查看本机所有容器")]),s._v(" "),a("li",[a("code",[s._v("docker start/stop/restart CONTAINER")]),s._v(": 启动/停止/重启容器"),a("code",[s._v("CONTAINER")]),s._v("(名称或ID)")]),s._v(" "),a("li",[a("code",[s._v("docker rm CONTAINER")]),s._v(": 删除容器")]),s._v(" "),a("li",[a("code",[s._v("docker exec -it CONTAINER COMMAND")]),s._v(": 打开容器"),a("code",[s._v("CONTAINER")]),s._v("的终端, "),a("code",[s._v("-i")]),s._v("交互式, "),a("code",[s._v("-t")]),s._v("分配一个终端, "),a("code",[s._v("COMMAND")]),s._v("指定第一个命令, 一般为"),a("code",[s._v("bash")])]),s._v(" "),a("li",[a("code",[s._v("docker inspect CONTAINER")]),s._v(": 检视容器"),a("code",[s._v("CONTAINER")])]),s._v(" "),a("li",[a("code",[s._v("docker port CONTAINER")]),s._v(": 查看容器"),a("code",[s._v("CONTAINER")]),s._v("端口转换信息")])]),s._v(" "),a("p",[a("strong",[s._v("构建")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker build [-t NAME[:TAG]] [-f dockerfile_path] path")]),s._v(": 构建容器, "),a("code",[s._v("-t")]),s._v("指定名称, "),a("code",[s._v("-f")]),s._v("指定"),a("code",[s._v("Dockerfile")]),s._v("路径, "),a("code",[s._v("path")]),s._v("上下文路径")])]),s._v(" "),a("h3",{attrs:{id:"常用容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用容器"}},[s._v("#")]),s._v(" 常用容器")]),s._v(" "),a("p",[a("strong",[s._v("mysql")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker pull mysql")])]),s._v(" "),a("li",[a("code",[s._v("docker run -itd --name CONTAINER -p PORT1:3306 -e MYSQL_ROOT_PASSWORD=PASSWORD mysql")]),s._v(": 本机"),a("code",[s._v("PORT1")]),s._v("端口映射容器3306端口(mysql默认端口号), "),a("code",[s._v("PASSWORD")]),s._v("mysql密码, 开启容器"),a("code",[s._v("CONTAINER")])]),s._v(" "),a("li",[a("code",[s._v("docker exec -it CONTAINER mysql -u root -pPASSWORD")]),s._v(": 终端访问mysql, 密码"),a("code",[s._v("PASSWORD")])]),s._v(" "),a("li",[a("code",[s._v("mysql -uroot -pPASSWORD")]),s._v(": 访问数据库, "),a("code",[s._v("root")]),s._v("用户, "),a("code",[s._v("PASSWORD")]),s._v("密码")]),s._v(" "),a("li",[a("code",[s._v("设置密码")]),s._v(":\n"),a("ul",[a("li",[a("code",[s._v("跳过密码验证")]),s._v(": 在"),a("code",[s._v("my.cnf")]),s._v("中加入"),a("code",[s._v("skip-grant-tables")])]),s._v(" "),a("li",[a("code",[s._v("修改本地密码")]),s._v(": "),a("code",[s._v("bash")]),s._v("中输入"),a("code",[s._v("mysqladmin -u <username> -p <old_passwd> password <new_passwd>")])]),s._v(" "),a("li",[a("code",[s._v("修改远程密码")]),s._v("(如docker外): "),a("code",[s._v("mysql")]),s._v("中输入"),a("code",[s._v("alter user <username>@<host> identified by <new_passwd>;")])]),s._v(" "),a("li",[a("code",[s._v("设置所有权限")]),s._v("(如远程权限): "),a("code",[s._v("mysql")]),s._v("中输入"),a("code",[s._v("grant all privileges on *.* to 'root'@'%';")])]),s._v(" "),a("li",[a("code",[s._v("刷新配置")]),s._v(": "),a("code",[s._v("mysql")]),s._v("中输入"),a("code",[s._v("FLUSH PRIVILEGES;")])])])])]),s._v(" "),a("p",[a("strong",[s._v("mongo")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker pull mongo")])]),s._v(" "),a("li",[a("code",[s._v("docker run -itd --name CONTAINER -p PORT1:27017 mongo [--auth]")]),s._v(": 本机"),a("code",[s._v("PORT1")]),s._v("端口映射容器27017端口(mongo默认端口号), 开启容器"),a("code",[s._v("CONTAINER")]),s._v(", "),a("code",[s._v("--auth")]),s._v("开启密码访问")]),s._v(" "),a("li",[a("code",[s._v("docker exec -it CONTAINER mongosh")]),s._v(": 访问数据库")])]),s._v(" "),a("p",[a("strong",[s._v("redis")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker pull redis")])]),s._v(" "),a("li",[a("code",[s._v("docker run -itd --name CONTAINER -p PORT1:6379 redis [--requirecpass PASS]")]),s._v(": 本机"),a("code",[s._v("PORT1")]),s._v("端口映射容器6379端口(redis默认端口号), 开启容器"),a("code",[s._v("CONTAINER")]),s._v(", 密码访问"),a("code",[s._v("PASS")])]),s._v(" "),a("li",[a("code",[s._v("docker exec -it CONTAINER redis-cli")]),s._v(": 访问数据库")]),s._v(" "),a("li",[a("code",[s._v("设置密码")]),s._v(": 进入"),a("code",[s._v("redis-cli")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("config get requirepass")]),s._v(": 查看密码")]),s._v(" "),a("li",[a("code",[s._v("config set requirepass <passwd>")]),s._v(": 设置密码")]),s._v(" "),a("li",[a("code",[s._v("auth <passwd>")]),s._v(": 密码登录")])])])]),s._v(" "),a("h3",{attrs:{id:"常用dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用dockerfile"}},[s._v("#")]),s._v(" 常用Dockerfile")]),s._v(" "),a("p",[a("strong",[s._v("go")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建第一步 build基本文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang:alpine "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" build")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" GIN_MODE=release")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PORT=9000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/src/app")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" go.mod go.sum ./")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go env -w GOPROXY=https://goproxy.cn,direct")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go mod download && go mod verify")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝使用的相关文件, 如配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go build -v -o app ./main.go")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建第二步 仅拷贝必要文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alpine为包含基本功能的最小单位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("build")])]),s._v(" /usr/src/app /")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PORT")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("h3",{attrs:{id:"创建新用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新用户"}},[s._v("#")]),s._v(" 创建新用户")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝基本环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/skel/.b* /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/skel/.p* /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/bash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),a("p",[a("strong",[s._v("客户端添加ssh")]),s._v(":")]),s._v(" "),a("ol",[a("li",[a("code",[s._v('ssh-keygen -t ed25519 -C "title"')]),s._v(", "),a("code",[s._v("ed25519")]),s._v("为生成算法, "),a("code",[s._v("title")]),s._v("最好为邮箱")]),s._v(" "),a("li",[s._v("提示"),a("code",[s._v("Enter file in ...")]),s._v(", 输入名字"),a("code",[s._v("name")]),s._v("区分不同ssh, 密码设置可以回车跳过")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("~/.ssh")]),s._v("文件夹下有对应的"),a("code",[s._v("name")]),s._v("秘钥和"),a("code",[s._v("name.pub")]),s._v("公钥")])]),s._v(" "),a("p",[a("strong",[s._v("客户端管理多个ssh")]),s._v(":")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("ssh-add -l")]),s._v("查看是否有代理, 若为"),a("code",[s._v("Could not open a connection to your authentication agent.")]),s._v(", 则"),a("code",[s._v("exec ssh-agent bash")])]),s._v(" "),a("li",[a("code",[s._v("ssh-add ~/.ssh/id_ed25519")]),s._v("添加代理, 参数为添加的文件路径")]),s._v(" "),a("li",[s._v("配置"),a("code",[s._v("~/.ssh/config")]),s._v("如下")])]),s._v(" "),a("div",{staticClass:"language-Config line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host <name> # 用于区分的名字\n  HostName <ip> # 仓库地址\n  PreferredAuthentications publickey\n  User <user> # 登录用户\n  IdentityFile <file> # 使用的密钥对\n  Port <port> # 连接使用端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("服务端添加ssh")]),s._v(":")]),s._v(" "),a("ol",[a("li",[s._v("在"),a("code",[s._v("root")]),s._v("身份下")]),s._v(" "),a("li",[a("code",[s._v("chmod 700 /home/<user>")])]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("/home/<user>/.ssh/authorized_keys")]),s._v("中添加客户端公钥")])]),s._v(" "),a("h3",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),a("ol",[a("li",[s._v("在"),a("code",[s._v("/etc/profile")]),s._v("中使用"),a("code",[s._v("export a=b")]),s._v("语法配置")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("~/.bashrc")]),s._v("中加入"),a("code",[s._v("source /etc/profile")]),s._v(", 每次终端启动都会加载")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("~/.screenrc")]),s._v("中加入"),a("code",[s._v("termcapinfo xterm*|rxvt*|kterm*|Eterm* ti@:te@")]),s._v(", 支持screen的滚轮")])]),s._v(" "),a("h3",{attrs:{id:"glibc-2-28安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glibc-2-28安装"}},[s._v("#")]),s._v(" GLIBC_2.28安装")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v(": "),a("strong",[s._v("最好不要使用该方法")]),s._v(", 若过程中出现命令不可用的情况, 使用"),a("code",[s._v("LD_PRELOAD=/lib/x86_64-linux-gnu/libc-2.27.so COMMAND")]),s._v("的形式调用命令"),a("code",[s._v("COMMAND")]),s._v(", 若系统没有"),a("code",[s._v("libc-2.27.so")]),s._v("则使用"),a("code",[s._v("libc.so.6")]),s._v("链接到的文件")]),s._v(" "),a("ul",[a("li",[s._v("以下命令基于"),a("code",[s._v("libc-2.27.so")]),s._v("环境, 以及")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" http://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf glibc-2.28.tar.gz \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" glibc-2.28/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/glibc-2.28\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make install WSL下出现报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/lib/wsl/lib2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/lib/wsl/lib/* /usr/lib/wsl/lib2\nldconfig\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每次重启后不自动还原")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/wsl.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# content")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("automount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nldconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# content end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make install end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改libc.so.6连接后无法直接使用任何命令, 需要在命令前面加上LD_PRELOAD的形式")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /lib/x86_64-linux-gnu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/glibc-2.28/lib/ld-2.28.so "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/glibc-2.28/lib/libc-2.28.so "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nunlink ld-linux-x86-64.so.2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" ld-2.28.so ld-linux-x86-64.so.2\nunlink libc.so.6\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_PRELOAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("libc-2.27.so "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" libc-2.28.so libc.so.6\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_PRELOAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/lib/x86_64-linux-gnu/libc-2.27.so unlink /lib64/ld-linux-x86-64.so.2\n/lib/x86_64-linux-gnu/ld-2.28.so /bin/ln "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /lib/x86_64-linux-gnu/ld-2.28.so /lib64/ld-linux-x86-64.so.2\nstrings /lib/x86_64-linux-gnu/libc.so.6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" GLIBC_2.28 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否安装成功")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h2",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[s._v("#")]),s._v(" ESlint")]),s._v(" "),a("h3",{attrs:{id:"alibaba-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alibaba-react"}},[s._v("#")]),s._v(" Alibaba + React")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装 局部安装会导致阿里云流水线失败(原因是阿里云node版本不够用)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npx eslint -h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .eslintrc.json\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑开始")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint-config-ali/typescript/react"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑结束")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("nginx测试 + 查看nginx使用的配置文件")]),s._v(": "),a("code",[s._v("nginx -t")])]),s._v(" "),a("li",[a("code",[s._v("nginx部署")]),s._v(": "),a("code",[s._v("nginx")])]),s._v(" "),a("li",[a("code",[s._v("nginx重启")]),s._v(": "),a("code",[s._v("nginx -s reload")])])]),s._v(" "),a("h3",{attrs:{id:"配置文件常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件常用"}},[s._v("#")]),s._v(" 配置文件常用")]),s._v(" "),a("ul",[a("li",[s._v("注意配置文件中涉及路径参数需具体调整")])]),s._v(" "),a("div",{staticClass:"language-nginx.conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n  listen 80\n  server_name a.com; # 多个域名同一ip同一端口时发挥作用\n  # 前端\n  location / {\n    root /home/frontend/package; # 前端打包资源的文件夹\n    index index.html; # 入口文件\n    try_files $uri $uri/ /index.html;\n    proxy_set_header Host $http_host;\n  }\n  # 后端1 访问时为a.com/api/...\n  location /api/ {\n    proxy_pass http://127.0.0.1:8080; # 调整为后端运行的端口号\n  }\n  # 后端静态资源(java打包后静态资源原本应在jar包中不方便取出, 故额外配置)\n  # 使用springboot时注意给静态资源拦截器添加映射关系\n  location /backendresource/ {\n    proxy_pass http://127.0.0.1:8080;\n  }\n}\n\n# 后端2 访问时为a.com:8000/api/...\nserver {\n  listen 8000\n  server_name a.com;\n  location / {\n    proxy_pass http://127.0.0.1:8000;\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);