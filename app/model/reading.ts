/* Reading Model */

export default app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Reading = app.model.define('readings', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    /* 正在阅读文章的标题 */
    title: STRING(30),
    /* 正在阅读文章的作者 */
    author: STRING(30),
    /* 文章具体讲了啥 */
    content: STRING(500),
    /* 正在阅读文章的读后感链接 */
    output: STRING(200),
    /* 分类 */
    tag: STRING(200),
    /* 推荐语 */
    recommendation: STRING(300),
    /* 我的评分 */
    star: INTEGER(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return Reading;
};
