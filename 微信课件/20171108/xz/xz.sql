#1：创建库 xuezi
CREATE DATABASE xuezi CHARSET=UTF8;
#2: 进入   xuezi
USE xuezi;
--3: 创建表 user
--   uid       编号
--   uname     用户名
--   upwd      密码
--   email     邮箱
--   phone     电话
--   avatar    头像
--   gender    性别  男 女
--   user_name 真实姓名
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname   VARCHAR(20) NOT NULL DEFAULT '',
  upwd    VARCHAR(32) NOT NULL DEFAULT '',
  email   VARCHAR(128) NOT NULL DEFAULT '',
  phone   VARCHAR(20) NOT NULL DEFAULT '',
  avatar  VARCHAR(100) NOT NULL DEFAULT '',
  gender  VARCHAR(1) NOT NULL DEFAULT '',
  user_name  VARCHAR(20) NOT NULL DEFAULT ''
);
#4:添加记录三条
#SET NAMES GBK;
INSERT INTO user VALUES(null,'tom','123','','','','男','张铁蛋');
INSERT INTO user VALUES(null,'qiangdong','123','','','','男','刘强强');
INSERT INTO user VALUES(null,'naicha','123','','','','男','刘花花');


