import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },

  // graphql: {
  //   enable: true,
  //   package: 'egg-graphql',
  // },
};

export default plugin;
