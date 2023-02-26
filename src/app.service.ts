import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEnvFileName(): string {
    return `ENV_FILE_NAME: ${process.env.ENV_FILE_NAME ?? 'Undefined'}`;
  }
}
