import { Test, TestingModule } from '@nestjs/testing';
import { AwsProviderService } from './aws-provider.service';

describe('AwsProviderService', () => {
  let service: AwsProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsProviderService],
    }).compile();

    service = module.get<AwsProviderService>(AwsProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
