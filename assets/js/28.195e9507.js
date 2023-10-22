(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{312:function(v,_,t){"use strict";t.r(_);var a=t(10),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"mysql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[v._v("#")]),v._v(" MySQL")]),v._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#存储引擎"}},[v._v("存储引擎")]),_("ul",[_("li",[_("a",{attrs:{href:"#innodb"}},[v._v("InnoDB")])]),_("li",[_("a",{attrs:{href:"#myisam"}},[v._v("MyISAM")])])])]),_("li",[_("a",{attrs:{href:"#索引"}},[v._v("索引")]),_("ul",[_("li",[_("a",{attrs:{href:"#b-tree"}},[v._v("B+Tree")])]),_("li",[_("a",{attrs:{href:"#哈希索引"}},[v._v("哈希索引")])]),_("li",[_("a",{attrs:{href:"#全文索引"}},[v._v("全文索引")])]),_("li",[_("a",{attrs:{href:"#空间数据索引"}},[v._v("空间数据索引")])]),_("li",[_("a",{attrs:{href:"#索引优化"}},[v._v("索引优化")])])])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"存储引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[v._v("#")]),v._v(" 存储引擎")]),v._v(" "),_("h3",{attrs:{id:"innodb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[v._v("#")]),v._v(" InnoDB")]),v._v(" "),_("ul",[_("li",[v._v("默认的事务存储引擎")]),v._v(" "),_("li",[v._v("事务默认隔离级别为可重复读")]),v._v(" "),_("li",[v._v("主索引为聚簇索引(唯一): 索引与数据保存在一起")]),v._v(" "),_("li",[v._v("支持在线热备份")])]),v._v(" "),_("h3",{attrs:{id:"myisam"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[v._v("#")]),v._v(" MyISAM")]),v._v(" "),_("ul",[_("li",[v._v("空间数据索引")]),v._v(" "),_("li",[v._v("不支持事务")]),v._v(" "),_("li",[v._v("不支持行级锁, 只能对整张表加锁(写操作排它锁), 允许读取时插入(并发插入)")])]),v._v(" "),_("h2",{attrs:{id:"索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[v._v("#")]),v._v(" 索引")]),v._v(" "),_("h3",{attrs:{id:"b-tree"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b-tree"}},[v._v("#")]),v._v(" B+Tree")]),v._v(" "),_("p",[_("strong",[v._v("VS B-Tree")]),v._v(":")]),v._v(" "),_("ul",[_("li",[v._v("非叶子结点只存储键值信息, 叶子结点存储数据")]),v._v(" "),_("li",[v._v("叶子结点有指针指向下一个叶子结点")])]),v._v(" "),_("p",[_("strong",[v._v("VS 红黑树")]),v._v(":")]),v._v(" "),_("ul",[_("li",[v._v("树的高度更低, 查找次数更少")]),v._v(" "),_("li",[v._v("磁盘有预读, 磁盘顺序读取时无需磁盘寻道, 速度快, 结点大小为页大小, 一次IO载入一个结点且能预读相邻结点")])]),v._v(" "),_("h4",{attrs:{id:"聚簇索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引"}},[v._v("#")]),v._v(" 聚簇索引")]),v._v(" "),_("ul",[_("li",[v._v("InnoDB")]),v._v(" "),_("li",[v._v("数据行只存储在索引的叶子结点中, 非叶子结点不存储")]),v._v(" "),_("li",[v._v("默认是主键, 若无主键InnoDB选择一个非空索引代替, 若再无则隐式定义主键作为聚簇索引")]),v._v(" "),_("li",[v._v("辅助索引先通过辅助索引对应的B+Tree找到叶子节点上的主键信息, 然后再通过主键索引对应的B+Tree找到数据信息")])]),v._v(" "),_("h4",{attrs:{id:"非聚簇索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非聚簇索引"}},[v._v("#")]),v._v(" 非聚簇索引")]),v._v(" "),_("ul",[_("li",[v._v("MyISAM")]),v._v(" "),_("li",[v._v("叶子结点上不存储数据, 存储数据的地址")])]),v._v(" "),_("h3",{attrs:{id:"哈希索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引"}},[v._v("#")]),v._v(" 哈希索引")]),v._v(" "),_("ul",[_("li",[v._v("InnoDB中为自适应哈希索引, 被频繁使用的索引会在B+Tree索引上创建哈希索引")])]),v._v(" "),_("h3",{attrs:{id:"全文索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全文索引"}},[v._v("#")]),v._v(" 全文索引")]),v._v(" "),_("ul",[_("li",[v._v("MyISAM和5.6后的InnoDB支持")]),v._v(" "),_("li",[v._v("使用MATCH AGAINST语法")]),v._v(" "),_("li",[v._v("比"),_("code",[v._v("like")]),v._v("高效, 但是存在精度问题")]),v._v(" "),_("li",[v._v("只能对"),_("code",[v._v("char, text")]),v._v("等类型建全文索引")]),v._v(" "),_("li",[_("code",[v._v("自然语言全文索引")]),v._v(": 出现频率超过50%则不会被搜索, 匹配出现频率更少的")]),v._v(" "),_("li",[_("code",[v._v("布尔全文索引")]),v._v(": 通过修饰符进行更加细致的匹配方式")])]),v._v(" "),_("h3",{attrs:{id:"空间数据索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空间数据索引"}},[v._v("#")]),v._v(" 空间数据索引")]),v._v(" "),_("ul",[_("li",[v._v("用于地理数据存储")])]),v._v(" "),_("h3",{attrs:{id:"索引优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[v._v("#")]),v._v(" 索引优化")]),v._v(" "),_("ul",[_("li",[v._v("表达式的一部分或者函数的参数的索引没有作用")]),v._v(" "),_("li",[v._v("搜索有多个条件时使用"),_("code",[v._v("多列索引")]),v._v(", 让选择性更强的索引放在前面, 选择性为不重复索引占比")]),v._v(" "),_("li",[v._v("对于"),_("code",[v._v("BLOB, TEXT, VARCHAR")]),v._v("等大数据使用"),_("code",[v._v("前缀索引")])]),v._v(" "),_("li",[v._v("索引包含需查询字段为"),_("code",[v._v("覆盖索引")]),v._v(", 可以防止"),_("code",[v._v("回表")]),v._v("(通过索引找到聚簇索引后在拿到数据)")])])])}),[],!1,null,null,null);_.default=r.exports}}]);