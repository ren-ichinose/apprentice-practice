import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import CreateArticleDto from './dto/create-article.dto';
import ResponseArticle from './interfaces/article.interface';
import UpdateArticleDto from './dto/update-article.dto';

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

    const slug = this.createValidSlug(title);

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

  async update(
    updateArticleDto: UpdateArticleDto,
    slug: string,
    userId: number,
  ): Promise<ResponseArticle> {
    const findedArticle = await this.prisma.article.findUnique({
      where: { slug },
    });

    if (!findedArticle || findedArticle.userId !== userId)
      throw new ForbiddenException('更新ができませんでした');

    const getedUser = await this.userService.getByid(findedArticle.userId);
    if (!getedUser)
      throw new BadRequestException('ページが見つかりませんでした');

    const updatedSlug = this.createValidSlug(findedArticle.title);

    const updatedArticle = await this.prisma.article.update({
      where: { id: findedArticle.id },
      data: { ...updateArticleDto, slug: updatedSlug },
    });
    const { id, userId: updatedUserId, ...rest } = updatedArticle;
    const { username, bio, image } = getedUser;

    const author = {
      username,
      bio,
      image,
      following: false,
    };

    const article = {
      ...rest,
      slug: updatedSlug,
      tagList: [''],
      favorited: false,
      favoritesCount: 0,
      author,
    };

    return article;
  }

  async delete(slug: string, userId: number): Promise<void> {
    const findedArticle = await this.prisma.article.findUnique({
      where: { slug },
    });

    if (!findedArticle || findedArticle.userId !== userId)
      throw new ForbiddenException('削除ができませんでした');

    await this.prisma.article.delete({ where: { slug } });
  }

  protected createValidSlug(title: string): string {
    const cleanedTitle = title.toLowerCase().replace(/\s+/g, '-');
    const validSlug = cleanedTitle.replace(/[^a-z0-9-]/g, '');

    return validSlug;
  }
}
