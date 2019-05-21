import { Test, TestingModule } from '@nestjs/testing';
import { AwsProviderController } from './aws-provider.controller';

describe('AwsProvider Controller', () => {
  let controller: AwsProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwsProviderController],
    }).compile();

    controller = module.get<AwsProviderController>(AwsProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
