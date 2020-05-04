/* Project Model */

export default app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Project = app.model.define('projects', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    /* 项目名称 */
    title: STRING(30),
    /* 项目作者 */
    author: STRING(30),
    /* 项目描述 */
    desc: STRING(200),
    /* 项目分类 */
    tag: STRING(200),
    /* GitHub 链接 */
    link: STRING(500),
    /* 项目完成度 */
    process: INTEGER(100),
    /* 项目图片 */
    logo: STRING(500),
    created_at: DATE,
    updated_at: DATE,
  });

  return Project;
};
