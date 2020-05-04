import { Controller } from 'egg';

export default class ReadingController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await 'helle,list';
  }
}
