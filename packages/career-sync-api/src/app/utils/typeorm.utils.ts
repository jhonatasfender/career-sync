/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-explicit-any */

import path from 'path';
import { EntitySchema, ObjectType } from 'typeorm';

export function loadEntitiesFromPath(): Array<
  ObjectType<any> | EntitySchema<any>
> {
  const normalizedPath = path.resolve('.');
  const files = require('glob').sync(
    `${normalizedPath}/packages/career-sync-api/**/*.entity.{ts,js}`
  );

  return files.map((file: string) => {
    console.log(require(file));

    return require(file).default;
  });
}
