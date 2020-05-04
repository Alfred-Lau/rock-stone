1. 区分中间件，sequelize 不是中间件！
2. shit Node.js v14 Warning: Accessing non-existent property \_\_\_ of module exports inside circular dependency #2648
3. shit 不能通过 数据库直接删表，任何微小的变动，请走 migration，否则谁都救不了你
4. 数据库相关操作

```bash

1. npx sequelize migration:generate --name=init
2. 修改 up and down
3.# 升级数据库
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```

5. egg 项目部署

- 参考链接：https://eggjs.org/zh-cn/core/deployment.html

```bash
npm install --production
tar -zcvf ../release.tgz .
npm i egg-scripts --save
```

6. egg 项目的 release 包 是直接 和 依赖打在一起的，不需要重新安装依赖，可以考虑进化到 docker

```bash
tar zxvf release.tgz -C /root/project/backend

```

7. rds 在生产环境，需要使用外网链接串

8. netstat -nltp
