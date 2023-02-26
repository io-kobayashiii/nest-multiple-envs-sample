import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { getEnvFilePath } from './utils/getEnvFilePath';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const envFilePath: string = getEnvFilePath(`${__dirname}/envs`);

    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "ENV_FILE_NAME: test.env"', () => {
      expect(appController.getEnvFileName()).toBe('ENV_FILE_NAME: test.env');
    });
  });
});
