import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('artciles')
export class ArtcileController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  getSingle() {
    return 'getSingle';
  }
}
