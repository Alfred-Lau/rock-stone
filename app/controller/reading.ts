import { Controller } from 'egg';

export default class ReadingController extends Controller {
  public async list() {
    const { ctx } = this;
    const data = await ctx.model.Reading.findAll();
    ctx.body = data;
  }

  /**
   * async create
   */
  public async create() {
    const { ctx } = this;
    console.log('ctx.request.body', ctx.request.body);
    const data = await ctx.model.Reading.create(ctx.request.body);
    ctx.body = data;
  }
}
