import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import CreateArticleDto from './dto/create-article.dto';
import ResponseArticle from './interfaces/article.interface';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getSingle(slug: string): Promise<ResponseArticle> {
    const findedArticle = await this.prisma.article.findUnique({
      where: { slug },
    });
    if (!findedArticle) throw new NotFoundException();

    const getedUser = await this.userService.getByid(findedArticle.userId);
    if (!getedUser)
      throw new BadRequestException('ページが見つかりませんでした');

    const { id, userId, ...rest } = findedArticle;
    const { username, bio, image } = getedUser;

    const author = {
      username,
      bio,
      image,
      following: false,
    };

    const article = {
      ...rest,
      tagList: [''],
      favorited: false,
      favoritesCount: 0,
      author,
    };

    return article;
  }

  async create(
    createArticleDto: CreateArticleDto,
    email: string,
  ): Promise<ResponseArticle> {
    const getedUser = await this.userService.getByEmail(email);
    if (!getedUser)
      throw new UnauthorizedException('アカウントを確認してください');

    const { title, description, body, tagList } = createArticleDto;
    const { id: userId, username, bio, image } = getedUser;

    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const {
      id,
      userId: createdUserid,
      ...rest
    } = await this.prisma.article.create({
      data: { slug, title, description, body, userId },
    });

    const author = {
      username,
      bio,
      image,
      following: false,
    };

    const article = {
      ...rest,
      tagList: tagList || [''],
      favorited: false,
      favoritesCount: 0,
      author,
    };

    return article;
  }
}
