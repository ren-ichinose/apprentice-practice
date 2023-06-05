import { Controller, Get, Render } from '@nestjs/common';
import AppService from './app.service';

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getPageHome(): { message: string } {
    const message = this.appService.getPageHome();
    return { message };
  }
}
