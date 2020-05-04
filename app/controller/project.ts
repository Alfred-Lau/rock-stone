import { Controller } from 'egg';

export default class ProjectController extends Controller {
  public async list() {
    const { ctx } = this;
    console.log('dsds');
    const data = await ctx.model.Project.findAll();
    ctx.body = data;
  }

  /**
   * async create
   */
  public async create() {
    const { ctx } = this;
    console.log('ctx.request.body', ctx.request.body);
    const data = await ctx.model.Project.create(ctx.request.body);
    ctx.body = data;
  }
}
