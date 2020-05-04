import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/blog', controller.blog.list);
  router.post('/api/blog/new', controller.blog.create);


  router.get('/api/reading', controller.reading.list);
  router.post('/api/reading/new', controller.reading.create);

  router.get('/api/project', controller.project.list);
  router.post('/api/project/new', controller.project.create);

};
