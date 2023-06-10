import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ArtcileController } from './artcile.controller';
import { ArtcileService } from './artcile.service';

@Module({
  imports: [JwtModule],
  controllers: [ArtcileController],
  providers: [ArtcileService],
})
export class ArtcileModule {}
