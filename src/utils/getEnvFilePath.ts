import { existsSync } from 'fs';
import { resolve } from 'path';

export const getEnvFilePath = (envFilesDirectory: string) => {
  const env = process.env.NODE_ENV;
  const fileName = env ? `${env}.env` : 'development.env';
  const filePath = resolve(`${envFilesDirectory}/${fileName}`);
  return existsSync(filePath) ? filePath : resolve(`${envFilesDirectory}/.env`);
};
