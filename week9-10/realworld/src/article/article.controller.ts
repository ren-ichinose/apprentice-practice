import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import Payload from 'src/interfaces/interface';
import { ArticleService } from './article.service';
import CreateArticleDto from './dto/create-article.dto';
import ResponseArticle from './interfaces/article.interface';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body('article') createArticleDto: CreateArticleDto,
    @Req() { user }: { user: Payload },
  ): Promise<{ article: ResponseArticle }> {
    const article = await this.articleService.create(
      createArticleDto,
      user.email,
    );
    return { article };
  }
}
