/* Blog Model */

export default app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Blog = app.model.define('blog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    author: STRING(30),
    content: STRING(500),
    desc: STRING(200),
    tag: STRING(200),
  });

  return Blog;
};
