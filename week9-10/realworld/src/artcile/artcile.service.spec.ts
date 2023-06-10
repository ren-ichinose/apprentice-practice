import { Test, TestingModule } from '@nestjs/testing';
import { ArtcileService } from './artcile.service';

describe('ArtcileService', () => {
  let service: ArtcileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtcileService],
    }).compile();

    service = module.get<ArtcileService>(ArtcileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
