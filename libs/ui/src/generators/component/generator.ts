import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import { ComponentGeneratorSchema } from './schema';
import { names } from '@nrwl/devkit';

export async function componentGenerator(
  tree: Tree,
  schema: ComponentGeneratorSchema,
) {
  const componentNames = names(schema.name);
  const componentDirectory = `libs/ui/src/lib/components/${componentNames.className}`;

  generateFiles(tree, joinPathFragments(__dirname, './files'), componentDirectory, {
    name: componentNames.className,
    kebabName: componentNames.fileName,
  });

  const indexPath = `libs/ui/src/lib/components/index.ts`;
  const exportStatement = `export * from './${componentNames.className}';\n`;
  const buffer = tree.read(indexPath);
  const content = buffer ? buffer.toString('utf-8') : '';

  if (!content.includes(exportStatement)) {
    tree.write(indexPath, `${content}${exportStatement}`);
  }

  await formatFiles(tree);
}

export default componentGenerator;
