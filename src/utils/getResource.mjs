import path from 'path';

import fs from 'fs-extra';

export const getResource = async resourceName => {
  try {
    console.log(path.resolve(__dirname, '..', 'src', 'resources', `${resourceName}.json`));
    const resource = await fs.readJson(
      path.resolve(__dirname, '..', 'src', 'resources', `${resourceName}.json`)
    );
    return resource;
  } catch (err) {
    console.error(err);
  }
  return {};
};
