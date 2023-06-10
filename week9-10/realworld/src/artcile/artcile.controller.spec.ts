import { Test, TestingModule } from '@nestjs/testing';
import { ArtcileController } from './artcile.controller';

describe('ArtcileController', () => {
  let controller: ArtcileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtcileController],
    }).compile();

    controller = module.get<ArtcileController>(ArtcileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
