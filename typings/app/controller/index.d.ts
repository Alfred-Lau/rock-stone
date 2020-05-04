// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/controller/blog';
import ExportProject from '../../../app/controller/project';
import ExportReading from '../../../app/controller/reading';
import ExportBaseBase from '../../../app/controller/base/base';

declare module 'egg' {
  interface IController {
    blog: ExportBlog;
    project: ExportProject;
    reading: ExportReading;
    base: {
      base: ExportBaseBase;
    }
  }
}
