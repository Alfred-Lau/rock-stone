// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/model/blog';
import ExportProject from '../../../app/model/project';
import ExportReading from '../../../app/model/reading';

declare module 'egg' {
  interface IModel {
    Blog: ReturnType<typeof ExportBlog>;
    Project: ReturnType<typeof ExportProject>;
    Reading: ReturnType<typeof ExportReading>;
  }
}
