import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/blog', controller.blog.list);
  router.post('/api/blog/new', controller.blog.create);
  router.get('/api/reading', controller.reading.list);
  router.get('/api/project', controller.project.list);
};
