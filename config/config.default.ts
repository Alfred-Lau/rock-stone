import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587820703885_5951';

  config.security = {
    csrf: {
      enable: false, // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      ignoreJSON: true,
    },
  };

  // add your egg config in here
  /* 1. 第一处修改 */
  // config.middleware = ['sequelize'];

  // /* 2. 第二处修改 */
  // config.logme = {
  //   pathname: 'liujian',
  //   enabled: true,
  //   match: ['/api'],
  // };

  /* 3. 添加 ORM 层 sequelize 配置 */

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: 'liujian10086',
    port: 3306,
    database: 'blog-api',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
