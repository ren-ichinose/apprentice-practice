import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  getPageHome(): string {
    return 'Whellcome to my Todo App!';
  }
}
