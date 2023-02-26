import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEnvFileName(): string {
    return process.env.ENV_FILE_NAME ?? 'Undefined';
  }
}
